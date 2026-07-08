import express from "express";
import fs from "fs/promises";
import { handlerMessage, loadFile, saveFile } from "./helpers.js";

const JSON_FILE = "students.json";
const dir = await fs.readdir(process.cwd());

if (!dir.includes(JSON_FILE)) await fs.writeFile(JSON_FILE, "[]", "utf-8");

const server = express();

server.use(express.json());

server.use("/api", (req, res, next) => {
  console.log(req.method, " / ", req.url);
  next();
});

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

server.post("/api", async (req, res) => {
  try {
    const { name, age } = req.body;

    if (!name || name.length < 2) {
      return res
        .status(400)
        .send(handlerMessage("Name must include at least 2 characters"));
    }

    if (typeof +age !== "number" || +age < 0) {
      return res.status(400).send(handlerMessage("Age most be a positive number"));
    }

    const students = await loadFile();
    const id = Math.max(0, ...students.map((student) => student.id)) + 1;

    students.push({ id, name, age });
    await saveFile(students);
    res
      .status(201)
      .send(handlerMessage("Student created successfully", { id }));
  } catch (err) {
    console.error(err.message);
    res.status(500).send(handlerMessage("Internal Server Error"));
  }
});

server.listen(3000, () => console.log("Listening on port 3000"));
