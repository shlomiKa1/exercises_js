import { supabase } from "./db.js";

async function create(tableName, data) {
  const { error } = await supabase.from(tableName).insert(data);

  return error;
}

async function getAll(tableName) {
  const { data, error } = await supabase.from(tableName).select();
  return data || error;
}

async function getById(tableName, id) {
  const { data, error } = await supabase.from(tableName).select().eq("id", id);
  return data || error;
}

async function update(tableName, id, data) {
  const { error } = await supabase.from(tableName).update(data).eq("id", id);

  if (error) return error;

  return await getById(tableName, id);
}

async function remove(tableName, id) {
  const { error } = await supabase.from(tableName).delete().eq("id", id);
  return error;
}

async function getPosts(tableName) {
  const { data, error } = await supabase.from(tableName).select();

  if (error) return error;

  const aother = await getById("aothers", data[0].id_auth);
  data[0].id_auth = aother[0];

  return data;
}

// console.log(
//   await create("aothers", [
//     { name: "israel" },
//     { name: "Momo" },
//     { name: "Toto" },
//     { name: "sh" },
//   ]),
// );
// console.log(await getAll("aothers"));

// console.log(await update("aothers", 7, { name: "isr" }));
// console.log(await remove("aothers", 1));

// console.log(
//   await create("posts", [
//     { namepost: "Collecte", id_auth: 3, post: "There is a lot....." },
//     // { namepost: "Fade", id_auth: 7, post: "There is a lot....." },
//     // { namepost: "Orders", id_auth: 8, post: "There is a lot....." },
//   ]),
// );
console.log(await getPosts("posts"));
// console.log(await getById("posts", 3));
