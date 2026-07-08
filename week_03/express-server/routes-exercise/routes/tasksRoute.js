import express from "express";
// import e from "dotenv/config";

const tasks = [];
export const router = express.Router();

router.get("/", (req, res) => {
  res.send(JSON.stringify(tasks, null, 2));
});

router.post("/", (req, res) => {
  const { title, done = false } = req.body;

  if (!title) {
    res
      .status(400)
      .send({ message: "Title must include at least 6 characters" });
  }

  if (typeof done !== "boolean") {
    res
      .status(400)
      .send({ message: "Title must include at least 6 characters" });
  }

  const id = Math.max(0, ...tasks.map((task) => task.id)) + 1;
  tasks.push({ id, title, done });

  res.status(201).send({ message: "Task created successfully", id });
});

router.get("/:id", (req, res) => {
  const id = +req.params.id;
  const task = tasks.find((task) => task.id === id);

  if (!task) {
    res.status(404).send({ message: `${id} Not Found` });
  }

  res.send({ message: "Found task", task });
});

router.delete("/:id", (req, res) => {
  const id = +req.params.id;
  const idx = tasks.findIndex((task) => task.id === id);

  if (idx === -1) {
    res.status(404).send({ message: `${id} Not Found` });
  }

  tasks.splice(idx, 1);
  res.send({ message: "Task deleted successfully", id });
});

router.put("/:id", (req, res) => {
  const id = +req.params.id;
  const { title = tasks.title, done = false } = req.body;

  const task = tasks.map((task) => task.id === id);

  Object.assign(task, { title, done });

  res.send({ message: "Task update successfully", id });
});
