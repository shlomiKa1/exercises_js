import mysql from 'mysql2/promise';

const baseConfig = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  waitForConnections: true,
  port: 3305,
};

let pool;

async function initDatabase(database) {
  try {
    const tempConnection = await mysql.createConnection(baseConfig);
    await tempConnection.execute(`CREATE DATABASE IF NOT EXISTS ${database}`);
    await tempConnection.end();

    pool = mysql.createPool({ ...baseConfig, database: `${database}` });
  } catch (error) {
    console.log(error);
    pool = null;
  }
}

async function createTable(tableName, schemaTable) {
  try {
    await pool.execute(`CREATE TABLE IF NOT EXISTS ${tableName} ${schemaTable}`);
  } catch (error) {
    console.log(error);
  }
}

async function baseRepo(tableName) {
  // Filtered for selects
  async function find(filter) {
    const filterQuery = filter
      ? ' WHERE ' +
        Object.keys(filter)
          .map((key) => `${key}=?`)
          .join(' AND ')
      : '';
    const values = filter ? Object.values(filter) : [];
    const [result] = await pool.execute(`SELECT * FROM ${tableName}${filterQuery}`, values);

    return result;
  }

  // Find by ID
  async function findById(id) {
    const [result] = await find({ id });

    if (!result || result.length === 0) {
      return { message: `${id} not found` };
    }

    return result;
  }

  // Insert to table
  async function create(data) {
    const query = Object.keys(data).join(',');
    const values = Object.values(data);
    const placholders = values.map(() => '?').join(', ');

    const [result] = await pool.execute(
      `INSERT INTO ${tableName} (${query})
      VALUES(${placholders})`,
      values,
    );

    return result.insertId;
  }

  // Update data
  async function update(id, data) {
    if (data.length === 0) {
      return { message: "Data is empty" };
    }

    const query = Object.keys(data)
      .map((key) => `${key} =?`)
      .join(', ');
    const values = Object.values(data);

    const [result] = await pool.execute(`UPDATE ${tableName} SET ${query} WHERE id =?`, [...values, id]);

    if (!result || result.length === 0) {
      return { message: `${id} not found` };
    }
    return result.affectedRows;
  }

  // Delete data
  async function remove(id) {
    const [deleted] = await pool.execute(`DELETE FROM ${tableName} WHERE id = ?`, [id]);

    if (deleted.affectedRows === 0) {
      return { message: `${id} not found` };
    }

    return { message: `${id} deleted successfully` };
  }

  return { tableName, find, findById, create, update, remove };
}

const database = 'computer';
const table = 'users';
const schema = `(
    id int primary key auto_increment,
    name VARCHAR(25) NOT NULL,
    password VARCHAR(255) NOT NULL
    )`;

try {
  await initDatabase(database);
  await createTable(table, schema);

  const repo = await baseRepo(table);

  // console.log(await repo.findById(1));
  // console.log(await repo.create({ name: 'momo', password: '123456' }));
  // console.log(await repo.findById(1));
  // console.log(await repo.update(2));
  // console.log(await repo.update(1, { password: '1234' }));
  // console.log(await repo.create({ name: 'CH', password: '123456C' }));
  // console.log(await repo.remove(3));
  // console.log(await repo.remove(2));

  console.log('1. Find non-existing:', await repo.findById(1));
  console.log('2. Create momo ID:', await repo.create({ name: 'p7', password: '123456' }));
  console.log('3. Find momo:', await repo.findById(1));
  // console.log('4. Update non-existing status:', await repo.update(2, {f:3}));
  console.log('4. Update momo password status:', await repo.update(1, { password: '1234' }));
  console.log('5. Create CH ID:', await repo.create({ name: 'CH', password: '123456C' }));
  console.log('6. Remove non-existing:', await repo.remove(3));
  console.log('7. Remove CH:', await repo.remove(2));
  pool.end();
} catch (error) {
  console.log(error.message);
  pool.end();
}
