import { URL } from "url";
import http from "http";
import { error } from "console";

// Exercise 1
function extractId(url) {
  const parts = url.split("/");
  if (Number.isInteger(Number(parts[2]))) return parts[2];
  return NaN;
}
// console.log(extractId("/users/42"));
// console.log(extractId("/users/1"));
// console.log(extractId("/users/"));

// Exercise 2
function parseQuery(url1) {
  const qs = url1.split("?")[1] || "";
  const objQs = {};
  for (let q of qs.split("&")) {
    q = q.split("=");

    objQs[q[0]] = q[1];
  }

  return objQs;
}
console.log(parseQuery("/users?role=admin&page=2"));

// Exercise 3
function getQueryParams(rawUrl) {
  const parsed = new URL(rawUrl, "http://localhost");
  const qs = parsed.searchParams;

  return {
    page: qs.get("page") || "1",
    limit: qs.get("limit") || "10",
    sort: qs.get("sort") || "name",
  };
}
// console.log(getQueryParams("/users?page=3&sort=name"));

// Exercise 4
const users = [
  { id: 1, name: "Alice" },
  { id: 1, name: "Bob" },
];

function getParam(url, pattern) {
  const pp = pattern.split("/");
  const up = url.split("/");
  const key = pp.find((s) => s.startsWith(":"))?.slice(1);
  const idx = pp.findIndex((s) => s.startsWith(":"));

  return { [key]: up[idx] };
}

const url1 = "GET /users/1";
const url2 = "GET /users/9";
// console.log(getParam("GET", "/users/1"));

function send(url) {
  const { id } = getParam(url, "/users/:id");
  const user = users.find((u) => u.id === +id);

  if (!user) {
    console.log(`${url1} -> 404 {"error": "Not found"}`);
  } else {
    console.log(`${url1} -> 200`, user);
  }
}
// send(url1);
// send(url2);

// Exercise 5
function handler(req, res) {
  const parsed = new URL(req.url, "http://localhost");
  const qs = parsed.searchParams;
  const role = qs.get("role");
  const page = +(qs.get("page") || 1);
  const limit = +(qs.get("limit") || 10);

  let result = users;
  if (role) {
    result = users.filter((u) => u["role"] === role);
  }

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  result = result.slice(startIndex, endIndex);

  sendJSON(res, 200, result);
}

// Exercise 6
function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => {
      chunks.push(chunk);
    });

    req.on("end", () => {
      const raw = Buffer.concat(chunks).toString();

      try {
        resolve(JSON.parse(raw));
      } catch {
        resolve({ Error: "Buffer was wrong" });
      }
    });
    req.on("error", reject);
  });
}

async function create(req, res) {
  const data = await readBody(req);

  if (!data.name) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Name is required" }));
    return;
  }

  const newUser = {
    id: users.length + 1,
    name: data.name,
  };

  users.push(newUser);
  console.log("Current users in DB:", users);

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(newUser));
}

// Exercise 7
async function updateUser(req, res) {
  const parsedUrl = new URL(req.url, "http://localhost");
  const pathParts = parsedUrl.pathname.split("/");
  const id = pathParts[pathParts.length - 1];

  const qs = new URL(req.url, "http://localhost").searchParams;
  console.log(qs);
  const notify = qs.get("notify") === true;

  const data = await readBody(req);

  const idx = users.findIndex((u) => u.id === +id);
  if (idx === -1) return sendJSON(res, 404, {});

  users[idx] = { ...users[idx], ...data };

  if (notify) console.log("User updated!");
  sendJSON(res, 200, users[idx]);
}

// Exercise 8
function validateParams(id, query) {
  const errors = [];

  if (!id || isNaN(+id) || +id <= 0) errors.push("id must be positive");

  const page = +(query.get("page") || 1);
  if (page < 1) errors.push("number of page must be positive");

  const limit = +(query.get("limit") || 10);
  if (limit < 1 || limit > 100) errors.push("Limit must be between 1-100");

  return {
    valid: errors.length === 0,
    errors,
    parsed: { id: +id, page, limit },
  };
}

// Exercise 9
function extractParams(pattern, url) {
  const pp = pattern.split("/");
  const up = url.split("?")[0].split("/");

  if (pp.length !== up.length) return null;

  const params = {};
  for (let i = 0; i < pp.length; i++) {
    if (pp[i].startsWith(":")) {
      params[pp[i].slice(1)] = up[i];
    } else if (pp[i] !== up[i]) {
      return null;
    }
  }
  return params;
}
// console.log(extractParams("/users/:userId/posts/:postId", "/users/5/posts/12"));

// Exercise 10
http
  .createServer(async (req, res) => {
    const { method } = req;
    const parsed = new URL(req.url, "http://localhost");
    const pathParts = parsed.pathname.split("/");
    const resource = pathParts[1];
    const id = pathParts[2];
    const expand = parsed.searchParams.get("expand");

    if (method === "GET" && resource === "users" && id) {
      const user = users.find((u) => u.id === +id);

      if (!user) {
        return sendJSON(res, 404, { message: `${id} Not Found` });
      }

      let responseData = [...users];
      if (expand === "posts") {
        responseData.posts = users.filter((user) => user.id === +id);
      }
      return sendJSON(res, 200, responseData);
    }

    if (method === "POST" && resource === "users" && !id) {
      try {
        const data = await readBody(req);

        if (!data.name) {
          return readJSON(res, 400, { error: "Name is required" });
        }

        const newUser = {
          id: users.length + 1,
          name: data.name,
        };

        users.push(newUser);
        console.log("Current users in DB:", users);

        res.writeHead(res, 201, JSON.stringify(newUser, null, 4));
      } catch (err) {
        sendJSON(res, 400, { message: "Invalid JSON body" });
      }
    }
    sendJSON(res, 404, { error: "Not found" });
  })
  .listen(3000);

// function sendJSON(res, status, data) {
//   res.writeHead(status, { "Content-Type": "application/json" });
//   res.end(JSON.stringify(data));
// }

// const server = http.createServer((req, res) => {
//   const parsedUrl = new URL(req.url, "http://localhost");
//   const pathname = parsedUrl.pathname;
//   const method = req.method;

//   if (req.url === "/users" && req.method === "POST") {
//     create(req, res);
//   } else if (pathname.startsWith("/users") && method === "PUT") {
//     updateUser(req, res);
//   } else {
//     res.writeHead(404, { "Content-Type": "application/json" });
//     res.end(JSON.stringify({ error: "Route not found" }));
//   }
// });

// server.listen(3000);
