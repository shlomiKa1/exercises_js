import express from "express";

const notes = [];
export const router = express.Router();

router.get("/", (req, res) => {
  res.send({ message: JSON.stringify(notes, null, 2) });
});

router.post("/", (req, res) => {
  const { title } = req.body;

  if (!title) {
    req.status(400).send({ message: "Title can't be empty" });
  }

  const id = Math.max(0, ...notes.map((note) => note.id)) + 1;
  notes.push({ id, title });
});
