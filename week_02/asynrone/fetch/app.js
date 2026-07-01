import user from "../../../week_01/imports/part_B/named.js";

// Exercise 1
function exercise1() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => res.json())
    .then((body) => console.log(body.title));
}
// exercise1()

// Exercise 2
function exercise2() {
  fetch("https://jsonplaceholder.typicode.com/notfound")
    .then((res) => {
      if (!res.ok) throw new Error(`Status: ${res.status}`);
      return res.json();
    })
    .then(console.log)
    .catch(console.error);
}
// exercise2();

// Exercise 3
function exercise3() {
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    if (!res.ok) throw new Error("Status: ", res.status);
    return res.json()
  })
  .then((data) => {
    const allTitles = []
    data.forEach(title => {
        allTitles.push(title.title);
    });
    console.table(allTitles)
  })
  .catch(console.error)
}
// exercise3();

// Exercise 4
function exercise4() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "New title",
      body: "detail of post",
      userId: 1,
    }),
  })
    .then((res) => {
      // if (!res.ok) throw new Error(res.status)
      return res.json();
    })
    .then((saved) => console.log(saved))
    .catch(console.error);
}
// exercise4()

// Exercise 5
function getUserById(id) {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => {
      if (!res.ok) throw new Error("user is not found");

      return res.json();
    })

    .then((data) => console.log(data))
    .catch(console.error);
}

// console.log(getUserById(1));

// Exercise 6
function exercise6() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => {
      console.log("Status: ", res.status, res.statusText);

      if (!res.ok) throw new Error("Error: ", res.status);
      return res.json();
    })
    .then((data) => {
      fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((res) => {
          if (!res.ok) throw new Error("Error: ", res.status);
          return res.json();
        })

        .then((name) => {
          console.log({ username: name.username, title: data.title });
        });
    })

    .catch((err) => console.log("url failed: ", err));
}
// exercise6()

// Exercise 7
function exercise7() {
  return Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users/1"),
    fetch("https://jsonplaceholder.typicode.com/posts/1"),
    fetch("https://jsonplaceholder.typicode.com/todos/1"),
  ])
    .then((data) => console.log(data))
    .catch(console.error);
}
// exercise7();

// exercise 8
function exercise8() {
  const controller = new AbortController();
  const signal = controller.signal;

  fetch("https://jsonplaceholder.typicode.com/posts", { signal })
    .then((res) => {
      if (!res.ok) throw new Error("Error: ", res.status);
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((err) => {
      if (err.name === "AbortError") {
        console.log("Faild over 3 second");
      } else {
        console.log(err);
      }
    });

  setTimeout(() => {
    controller.abort();
  }, 3000);
}
// exercise8();

// Exercise 9
function fetchWithRetry(url, retries) {
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        if (retries === 0) throw new Error("Status", res.status);
        else retries -= 1;
        console.log("Error , try to start again", retries);
      }
      return res.json();
    })
    .then((data) => console.log(data))
    .catch(console.error);
}
// fetchWithRetry("https://jsonplaceholder.typicode.com/posts/555", 2)

// Exercise 10
const cache = {};

function cachedFetch(url) {
  if (cache[url]) {
    console.log("Found from cache");
    return Promise.resolve(cache[url]);
  }

  return fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error("Status: ", res.status);
      return res.json();
    })
    .then((data) => {
      console.log("Bring from the server");
      cache[url] = data;
      return cache[url];
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
}
const url1 = "https://jsonplaceholder.typicode.com/posts/1";

// cachedFetch(url1)
//   .then((data) => {
//     console.log("Finsh the first time, with same url");
//     console.log(data);

//     return cachedFetch(url1);
//   })
//   .then((data) => {
//     console.log("Finsh the second time, with same url");
//     console.log(data);
//     console.log("cache: ", cache);
    
//   })
//   .catch(console.error);

// setTimeout(() => {
//   cachedFetch("https://jsonplaceholder.typicode.com/posts/1");
// }, 2000);
