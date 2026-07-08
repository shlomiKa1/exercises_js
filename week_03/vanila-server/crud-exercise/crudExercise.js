import http from "http";

let movies = [];
let nextId = 1;

const server = http.createServer((req, res) => {
  if (req.url === "/movies") {
    // =============================
    //            GET
    // =============================
    if (req.method === "GET") {
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 200;
      res.end(JSON.stringify(movies));

    // =============================
    //            POST
    // =============================
    } else if (req.method === "POST") {
      let body = "";

      req.on("data", (chunk) => { body += chunk });

      req.on("end", () => {
        try {
          const parsedBody = JSON.parse(body);

          const newMovie = {
            id: nextId++,
            title: parsedBody.title,
            director: parsedBody.director,
          };

          movies.push(newMovie);

          res.statusCode = 201;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(newMovie));
        } catch (err) {
          res.statusCode = 400;
          res.setHeader("Content-Type", "text/plain");
          res.end("Invalid JSON payload");
        }
      });

    // =============================
    //            PUT
    // =============================
    } else if (req.method === "PUT") {
      let body = "";

      req.on("data", (chunk) => { body += chunk });

      req.on("end", () => {
        try {
          const parsedBody = JSON.parse(body);
          const movie = movies.find((movie) => movie.id === parsedBody.id);

          if (!movie) {
            res.statusCode = 404;
            res.setHeader("Content-Type", "text/plain");
            return res.end("Movie Not Found");
          }

          movie.title = parsedBody.title || movie.title;
          movie.director = parsedBody.director || movie.director;

          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(movie));
        } catch (err) {
          res.statusCode = 400;
          res.setHeader("Content-Type", "text/plain");
          res.end("Invalid JSON payload");
        }
      });

    // =============================
    //            DELETE
    // =============================
    } else if (req.method === "DELETE") {
      let body = "";
      req.on("data", (chunk) => { body += chunk });

      req.on("end", () => {
        const data = JSON.parse(body);

        try {
          const parsedBody = JSON.parse(body);

          const movieExists = movies.some((m) => m.id === parsedBody.id);
          if (!movieExists) {
            res.statusCode = 404;
            res.setHeader("Content-Type", "text/plain");
            res.end("Movie Not Found");
          }

          movies = movies.filter((movie) => movie.id != data.id);

        //   if (deleted.length === movies.length)
        //     throw new Error("Movie not Found");

          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.end(
            JSON.stringify({
              message: "Movie deleted successfully",
              id: parsedBody.id,
            }),
          );
        } catch (err) {
          res.statusCode = 400;
          res.setHeader("Content-Type", "text/plain");
          res.end("Invalid JSON payload");
        }
      });
    }
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Route Not Found");
  }
});

server.listen(3000);
