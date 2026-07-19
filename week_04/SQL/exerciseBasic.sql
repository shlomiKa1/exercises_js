-- Exercise 1:
CREATE TABLE products (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name CHAR(50) NOT NULL,
    price FLOAT,
    stock INTEGER DEFAULT 0
);

-- Exercise 2
INSERT INTO products (name, price, stock)
    VALUES('Laptop', 2500, 10);

INSERT INTO products (name, price, stock)
    VALUES('Mouse', 45, 50),
    VALUES('Monitor', 800, 5);

-- Exercise 3.1
SELECT * FROM products;

-- Exercise 3.2
SELECT * FROM products WHERE price > 100;

-- Exercise 3.3
SELECT name, price FROM products ORDER BY price ASC;

-- Exercise 3.4
SELECT * FROM products
    ORDER BY price ASC
    LIMIT 1;

-- Exercise 4.1
UPDATE products
    SET price = 55
    WHERE name = 'Mouse';

-- Exercise 4.2
UPDATE products
    SET stock = stock + 5
    WHERE name = 'Monitor';

-- Exercise 4.3
DELETE FROM products
    WHERE stock = 0;