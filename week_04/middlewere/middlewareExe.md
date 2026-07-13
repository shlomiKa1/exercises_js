# Exercise Middleware

---

## Part A:

1. Middleware is for more clean code in route, and its running before the the route.

---

2.  middleware:
    **req -> request**
    **res -> response**
    **next -> continue to the next route if there is**

---

3. The middleware will stuck.

---

4. answare:
1. its for all routes in this app
1. for spesific path type
1. for spesific endpoint with handler error.

---

5. We dont can to read BODY in routes like POST/PUT/PATCH

---

## Part B:

---

6.

```js
function logger(req, res, next) {
  console.log(req.method, "|", req.path);
  next();
}
```

---

7.

```js
const express = require("express");
const app = express();

app.use(expres.json());

app.post("/users", (req, res) => {
  console.log(req.body); // צריך להדפיס אובייקט ולא undefined
  res.json({ received: req.body });
});
```

---

8.

```js
function auth(req, res, next) {
  const token = req.haders.authorization;

  if (!token) {
    return res.status(401).json({ message: "There is not connection" });
  }

  next(); // המשך
}
```

---

9.

```js
app.use(logger);
app.use("/api", auth);

app.get("/home", (req, res) => res.send("Home"));
app.get("/api/data", (req, res) => res.send("Data"));
```

A. will use logger + next() -> send("Home")
B. will use auth & res Error "There is not connection"
C. will use auth & + next() -> send("Data")

---

10.

```js
function checkAdmin(req, res, next) {
  if (req.headers["x-role"] === "admin") {
    next();
  }
  res.status(403).json({ message: "Forbidden" });
}
//  continue to the next and after that it return to the function
```

11.

```js
function requestTimer(req, res, next) {
  const time = new Date().toLocalTimeString();
  console.log(`${time} ${req.method}${req.path}`);
  next();
}
```

12.

```js
import express from "express";

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, "|", req.path);
  next();
});

app.get("/public", (req, res) => {
  res.json({ message: "Public" });
});

app.get("/private", (req, res) => {
  res.json({ message: "Private" });
});
```
