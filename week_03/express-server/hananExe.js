import express from "express";

const server = express();

server.get("/api", (req, res) => {
  res.send({ message: "Hello from express" });
});

server.get("/api/search", (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }
  res.json({ message: "Hello '" + name + "' from query param" });
});

server.get("/api/:name/", (req, res) => {
  res.send({ message: "Hello '" + req.params.name + "' from path param" });
});

server.listen(3000, () => console.log("Listening on port 3000"));
