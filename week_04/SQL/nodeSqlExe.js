import mysql from "mysql2/promise";
import express, { text } from "express";

const app = express();
app.use(express.json());

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "todo_db",
  port: "3305",
  connectionLimit: 10,
});

app.get("/tasks", async (req, res) => {
  const [tasks] = await pool.execute(`SELECT * FROM tasks`);
  res.send(tasks);
});

// Exercise 2
app.post("/tasks", async (req, res) => {
  const body = req.body;
  const query = Object.keys(body).join(",");
  const values = Object.values(body);
  const placeholders = values.map(() => "?").join(", ");

  const [result] = await pool.execute(
    `INSERT INTO tasks (${query}) VALUES(${placeholders})`,
    values,
  );

  res.status(201).send({ id: result.insertId });
});

// Exercise 3
app.put("/tasks/:id", async (req, res) => {
  //   const body = req.body;
  //   const id = +req.params.id;

  //   const query = Object.keys(body)
  //     .map((key) => `${key}=?`)
  //     .join(",");
  //   const values = [...Object.values(body), id];
  //   const [result] = await pool.execute(
  //     `UPDATE tasks SET ${query} WHERE id = ?`,
  //     values,
  //   );
  const id = +req.params.id;

  const [result] = await pool.execute(
    `UPDATE tasks SET done = true WHERE id = ?`,
    [id],
  );

  res.send({ updated: result.affectedRows });
});

// Exercise 4
app.delete("/tasks/:id", async (req, res) => {
  const id = +req.params.id;

  const [result] = await pool.execute(`DELETE FROM tasks WHERE id = ?`, [id]);

  if (result.affectedRows === 0) {
    return res.status(404).send({ message: `${id} not found` });
  }
  res.send({ deleted: result.affectedRows });
});

app.get("/tasks", async (req, res) => {
  const { done } = req.query.done === "true" ? 1 : 0;

  const [result] = await pool.execute(
    `SELECT * FROM tasks WHERE done = ?`,
    done,
  );
  res.send({ result });
});

app.listen(3000, () => console.log(`port 3000`));
