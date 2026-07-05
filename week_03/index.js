import http from "http";

function exercise1() {
  const server = http.createServer((req, res) => {
    const time = new Date().getHours();
    if (time >= 6 && time <= 20) {
      res.end("Good Morning");
    } else {
      res.end("Good Morning");
    }
  });

  return server;
}

function exercise2() {
  const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
      res.setHeader("Contact-Type", "text/plan");
      res.end("Home Page");
    } else if (req.url === "/about" && req.method === "GET") {
      res.end("About Page");
    } else if (req.url === "/contact" && req.method === "GET") {
      res.end("Contact Page");
    } else {
      res.statusCode = 404;
      res.end("Page Not Found");
    }
  });

  return server;
}

function exercise3() {
  const server = http.createServer((req, res) => {
    if (req.url === "/users" && req.method === "GET") {
      res.end("Users list");
    } else if (req.url === "/users" && req.method === "POST") {
      res.end("User created");
    } else {
      res.end("Method Not Allowed");
    }
  });

  return server;
}

let server;
// server = exercise1();
// server = exercise2();
server = exercise3();

server.listen(3000, () => {
  console.log("Hello from my server");
});
