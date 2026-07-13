## Exercise 1

```bash
docker run --rm node:20-alpine node -e "console.log('Hello from Docker')"
```

1. Run cmd

```text
Status: Downloaded newer image for node:20-alpine
Hello from Docker
```

2. Add name container:

```text
docker run --name test-node --rm node:20-alpine node -e "console.log('Hello from Docker')"
Hello from Docker
```

3. Show imeges:

| IMAGE              | ID           | DISK USAGE | CONTENT SIZE | EXTRA |
| ------------------ | ------------ | ---------- | ------------ | ----- |
| hello-world:latest | f9078146db2e | 25.9kB     | 9.49kB       | U     |

---

## Exercise 2

1. Run,

2. | CONTAINER ID | IMAGE        | COMMAND                | CREATED        | STATUS        | PORTS                                   | NAMES   |
   | ------------ | ------------ | ---------------------- | -------------- | ------------- | --------------------------------------- | ------- |
   | 1501034ddaf  | nginx:alpine | "/docker-entrypoint.…" | 33 seconds ago | Up 32 seconds | 0.0.0.0:8080->80/tcp, [::]:8080->80/tcp | mynginx |

3. | CONTAINER ID | IMAGE | COMMAND | CREATED | STATUS | PORTS | NAMES |
   | ------------ | ----- | ------- | ------- | ------ | ----- | ----- |
   | empty        | empty | empty   | empty   | empty  | empty | empty |

---

## Exercise 3 -> development 4000

---

## Exercise 4

1. Status: Downloaded newer image for postgres:16
2. Show logs mydb
   ```text
   2026-07-13 08:34:22.463 UTC [1] LOG: starting PostgreSQL 16.14 (Debian 16.14-1.pgdg13+1) on x86_64-pc-linux-gnu, compiled by gcc (Debian 14.2.0-19) 14.2.0, 64-bit
   2026-07-13 08:34:22.463 UTC [1] LOG: listening on IPv4 address "0.0.0.0", port 5432
   2026-07-13 08:34:22.464 UTC [1] LOG: listening on IPv6 address "::", port 5432
   2026-07-13 08:34:22.473 UTC [1] LOG: listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
   2026-07-13 08:34:22.487 UTC [63] LOG: database system was shut down at 2026-07-13 08:34:22 UTC
   2026-07-13 08:34:22.499 UTC [1] LOG: database system is ready to accept connections
   ```
3. psql (16.14 (Debian 16.14-1.pgdg13+1))
Type "help" for help.

---

## Exercise 5
