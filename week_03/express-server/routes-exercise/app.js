import express from "express";
import { router as routerTasks } from "./routes/tasksRoute.js";
import { router as routerNotes } from "./routes/notesRoute.js";

const app = express();

app.use(express.json());
app.use("/tasks", routerTasks);
app.use("/notes", routerNotes);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
