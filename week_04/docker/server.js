import express from "express";

const server = express();

// server.use((req, res) => {
//   res.end("Hello from Docker images");
// });

server.get("/health", (req, res) => res.json({ ok: true }));

server.listen(3000);
