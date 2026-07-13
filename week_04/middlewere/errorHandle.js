import express from "express";

const app = express();

// Exercise 1

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Exercise 2
app.get("/time", (req, res) => {
  res.send(`Request received at: [${req.requestTime}]`);
});

// Exercise 3
app.use(express.json());
function checkBody(req, res, next) {
  const body = req.body;

  if (req.method === "POST") {
    if (!body) return res.status(400).json({ message: "Body cannot be empty" });
  }
  next();
}

// Exercise 4
app.post("/data", checkBody, (req, res) => {
  res.status(201).send({ message: "Data recived" });
});

const checkPassword = (req, res, next) => {
  const body = req.body;
  const keysBody = Object.keys(body);

  if (keysBody.length > 0 && keysBody.includes("password")) {
    console.log(body.password);

    if (body.password.length < 8) {
      return res.status(400).send({ error: "Password must at least 8 chars" });
    }
  } else {
    return res.status(500).send("S");
  }
  next();
};

app.post("/password", checkPassword, (req, res) => {
  res.status(201).send({ message: "Creted successfully" });
});

// Exercise 5
app.post("/register", (req, res) => {
  const { password } = req.body;

  if (password.length < 8) {
    res
      .status(400)
      .send({ message: "Password must include at least 8 charts" });
  }
  res.send({ message: "Registered" });
});

// Exercise 6
function onlyAdmin(req, res, next) {
  const admin = req.query.admin;

  if (admin !== true) {
    res.status(403).send({ error: "Forbidden: Admin only" });
  }
}

// Exercise 7
app.get("/setting", onlyAdmin, (req, res) => {
  res.send("Setting page...");
});

// Exercise 8
app.get("/error-test", (req, res) => {
  throw new Error("Something went wron!");
});

// Exercise 9
function errorHandler(err, req, res, next) {
  return res
    .status(res.status || 500)
    .send(err.message || { error: "Internal Server Error" });
}

// Exercise 10
app.get("/search", (req, res) => {
  if (!req.query.q) {
    res.status(400).send({ error: "Search query 'q' is required" });
  }
});

// Exercise 11
function blockIp(req, res, next) {
  if (req.ip === "123.123.123.123") {
    return res.status(403).send({ error: "Your IP is blocked" });
  }
  next();
}

// Exercise 12
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const emailRequired = !email || email.trim().length === 0;
  const passwordRequired = !password || password.trim().length === 0;
  if (emailRequired || passwordRequired) {
    res.status(400).send({ error: "Email and Password is required" });
  }
});

// Exercise 13
function checkJson(req, res, next) {
  const typeFile = req.headers["content-type"];

  if (typeFile !== "application/json") {
    return res.status(415).send({ message: "Not json file" });
  }
  next();
}

// Exercise 14
const checkAgeParam = (req, res, next) => {
  const { getParam } = req.params.age;

  if (typeof age !== "number" && age < 0)
    return res.status(400).send({ error: "Invalid age" });

  next();
};

app.get("/user/:age", (req, res) => {
  console.log(req.params.age);
  res.send({ message: "your age are:", data: req.params.age });
});

// Exercise 15
const checkFile = (req, res, next) => {
  const body = req.body;
  const keys = Object(body);

  if (!keys.includes("fileName")) {
    return res.status(400).send({ message: "No file nmae provided" });
  }
  next();
};

app.post("/upload", (req, res) => {
  res.send("upload");
});

// Exercise 16
let totalRequests = 0;

app.use((req, res) => {
  totalRequests++;
  console.log(`Total Request: ${totalRequests}`);
  next();
});

// Exercise 17
app.put("/profile/:id", (req, res) => {
  const id = req.params.id;

  if (id.length === 5) {
    return res.status(400).send({ error: "ID must be exactly 5 characters" });
  }
  res.send({ message: "Profile updated", id: id });
});

// Exercise 18
function defaultLanguage(req, res, next) {
  const language = req.headers["axxept-langueage"];

  if (!language) {
    req.language = "en";
  }
  next();
}
// app.use(defaultLanguage)

// Exercise 19
app.post("/comment", (req, res) => {
  const commend = req.body.text;

  if (commend.includes("spam")) {
    res.status(400).send({ warning: "Forbidden content" });
  }
  res.send({ message: "Comment posted" });
});

// Exercise 20
function limitText(req, res, next) {
  const text = req.body.text;

  if (text && text.length > 200) {
    res.status(413).send({ error: "Payload too large" });
  }
  next();
}

// Exercise 21
app.get("/secure-data", (req, res) => {
  const isAdmin = req.query.admin === true;
  const validKey = req.headers["x-api-key"] === "SECRET_VALUE";

  if (!isAdmin || !validKey) {
    return res.status(403).send({ error: "Forbidden" });
  }
  res.send("Secure data");
});

// Exercise 22
function errorHandlerFix(err, req, res, next) {
  if (err.type === "validation") {
    return res.status(422).send({ error: true, message: err.message });
  }
  return res.status(500).send({ error: true, message: err.message });
}

// Exercise 23
app.post("/age-check", (req, res, next) => {
  if (req.body.age < 18) {
    next(new Error("Too young"));
  }
  res.send("Age accepted");
});

// Exercise 24
function deleteLogger(req, res, next) {
  if (req.method === "DELETE") {
    console.log(`Resource with ID [${req.params.id}] is being deleted`);
  }
  next();
}
// app.use(deleteLogger);

// Exercise 25.1
app.get("/download/:file", (req, res) => {
  const file = req.params.file;

  if (file.endswith(".pdf")) {
    return res.status(400).send({ message: "Only PDF files alowed" });
  }
  res.send({ message: "Accepted PDF file" });
});

// Exercise 25.2
function logger(req, res, next) {
  const time = new Date().toISOString();

  console.log(`[LOG] ${req.method} ${req.url} - ${time}`);
  next();
}

// Exercise 26
function apiKeyAuth(req, res, next) {
  const key = req.headers["x-auth-token"];

  if (key === "sercret123") {
    return next();
  }
  res.status(401).send({ message: "" });
}

app.get("/protected", apiKeyAuth, (req, res) => {
  res.send({ message: "Protexted resource" });
});

// Exercise 27
app.post("/calculate", (req, res) => {
  const { num1, num2 } = req.body;
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return res.status(400).send({ message: "Both inputs must be numbers" });
  }
  res.send({ data: `${num1}, ${num2}` });
});

// exercise 28
app.use((req, res) => {
  res.status(404).send({ error: "Route not found" });
});

// exercise 29
app.get("/my-db", (req, res) => {
  throw new Error("Database failed");
});

function errorHandlerDB(err, req, res, next) {
  res.status(500).send({ status: "fail", message: "Database failed" });
}

app.use(errorHandlerDB);

// Exercise 30
app.post("/subscribe", (req, res) => {
  const email = req.body.email;

  if (!email || !email.includes("@")) {
    return res.status(400).send({ message: "Invalid email format" });
  }
  res.send({ message: "Subscribed" });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
