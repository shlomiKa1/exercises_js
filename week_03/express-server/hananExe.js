import express from "express";

const server = express();

server.get("/api", (req, res) => {
  res.send({ message: "Hello from express" });
});

server.listen(3000, () => console.log("Listening on port 3000"));
