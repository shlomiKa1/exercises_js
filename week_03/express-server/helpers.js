import fs from "fs/promises";

const JSON_FILE = "students.json";

export async function loadFile(filename = JSON_FILE) {
  const fileContent = await fs.readFile(filename);
  return JSON.parse(fileContent);
}

export async function saveFile(data, filename = JSON_FILE) {
  await fs.writeFile(filename, JSON.stringify(data, null, 2), "utf-8");
}

export function handlerMessage(msg, obj = {}) {
  if (!obj) return JSON.stringify({ message: msg });
  return JSON.stringify({ message: msg, ...obj }, null, 2);
}
