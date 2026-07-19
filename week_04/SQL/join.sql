-- Active: 1784029970302@@127.0.0.1@3305@db_exe
CREATE TABLE if not exists users (
  id      INTEGER PRIMARY KEY,
  name    TEXT NOT NULL,
  city_id INTEGER
);

CREATE TABLE orders (
  id      INTEGER PRIMARY KEY,
  user_id INTEGER,
  product TEXT,
  amount  INTEGER
);

CREATE TABLE cities (
  id      INTEGER PRIMARY KEY,
  city    TEXT,
  country TEXT
);

-- נתונים:
INSERT INTO users VALUES (1,'Alice',10),(2,'David',11),(3,'Sarah',10),(4,'Noa',12);
INSERT INTO orders VALUES (1,1,'MacBook',2500),(2,1,'Phone',900),(3,3,'Tablet',600),(4,3,'Keyboard',150);
INSERT INTO cities VALUES (10,'Tel Aviv','IL'),(11,'Jerusalem','IL'),(12,'Haifa','IL');

-- Exercise 1
SELECT u.name, o.product, o.amount FROM users as u
    INNER JOIN orders as o
        ON u.id = o.user_id

-- Exercise 2
SELECT u.name, MIN(o.product)
FROM users as u
LEFT JOIN orders as o
    ON u.id = o.user_id
GROUP BY u.id;

-- Exercise 3
SELECT u.name
FROM users as u
LEFT JOIN orders as o
    ON u.id = o.user_id
WHERE o.user_id IS NULL

-- Exercise 4
SELECT u.name, o.product, o.amount
FROM users as u
INNER JOIN orders as o
    ON u.id = o.user_id
WHERE o.amount > 500
ORDER BY o.amount DESC

-- Exercise 5
SELECT u.name, o.product, c.city
FROM users u
INNER JOIN orders o
    ON u.id = o.user_id
INNER JOIN cities c
    ON u.city_id = c.id