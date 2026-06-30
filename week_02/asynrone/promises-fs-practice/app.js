import fs from "fs/promises";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import user from "../../../week_01/imports/part_B/named.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectPath = path.join(__dirname, "data");

function writeFileAsPromise(filepath, content) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(filepath, content, "utf-8", (err) => {
      if (err) return reject(err);
      return resolve();
    });
  });
}

// writeFileAsPromise(path.join(projectPath, "message.txt"), "What up")
//   .then(() => {
//     console.log("Messegae wrote successfully");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Exercise 2
function readFileAsPromise(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, "utf-8", (err, data) => {
      if (err) return reject(err);
      return resolve(data);
    });
  });
}

// readFileAsPromise(path.join(projectPath, "message.txt"))
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Exercise 3
function readDileAndCount(filepath) {
  return new Promise((resolve) => {
    fs.readFile(filepath, "utf-8", (err, data) => {
      resolve(data.length);
    });
  });
}

readDileAndCount(path.join(projectPath, "message.txt")).then((data) => {
  console.log(data);
});

// Exercise 4
function appendFileAsPremise(filepath, content) {
  return new Promise((resolve, reject) => {
    fs.appendFile(filepath, content, "utf-8", (err) => {
      if (err) return reject(err);
      return resolve();
    });
  });
}
// appendFileAsPremise(path.join(projectPath, "step1.txt"), "Step 1 done")
//   .then(() => {
//     console.log("1 done");
//     return appendFileAsPremise(
//       path.join(projectPath, "step2.txt"),
//       "Step 2 done")
//   })
//   .then(() => {
//     console.log("2 done");
//     return appendFileAsPremise(
//       path.join(projectPath, "step3.txt"),
//       "Step 3 done")
//   })
//   .then(() => {
//     console.log("3 done");
//   })
//   .catch((res) => console.log(res));

// Exercise 5
function exercise5() {
  readFileAsPromise(path.join(projectPath, "step1.txt"))
    .then((data) => {
      console.log(data);
      return readFileAsPromise(path.join(projectPath, "step2.txt"));
    })
    .then((data) => {
      console.log(data);
      return readFileAsPromise(path.join(projectPath, "step3.txt"));
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

// Exercise 6
function exercise6() {
  // Write to file:
  writeFileAsPromise(path.join(projectPath, "report-title.txt"), "Daily Report")
    .then(() => {
      console.log("create report-title");
      return writeFileAsPromise(
        path.join(projectPath, "report-body.txt"),
        "Everything is working",
      );
    })
    .then(() => {
      console.log("create report-body");
    })
    .catch((err) => console.log(err));

  // Read to file:
  readFileAsPromise(path.join(projectPath, "report-title.txt"))
    .then((title) => {
      return readFileAsPromise(path.join(projectPath, "report-body.txt")).then(
        (body) => {
          return title + "\n" + body;
        },
      );
    })
    .then((full) => {
      return writeFileAsPromise(
        path.join(projectPath, "final-report.txt"),
        full,
      );
    })
    .then(() => console.log("create final-report"))
    .catch((err) => console.log(err));
}
// exercise6()

// Exercise 7
function exercise7() {
  fs.readFile(path.join(projectPath, "message.txt"), "utf-8")
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
// exercise7()

function exercise8_1() {
  fs.readFile(path.join(projectPath, "step1.txt"), "utf-8")
    .then((data) => {
      console.log(data);
      return fs.readFile(path.join(projectPath, "step2.txt"), "utf-8");
    })
    .then((data) => {
      console.log(data);
      return fs.readFile(path.join(projectPath, "step3.txt"), "utf-8");
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}
// exercise8_1()


function createUser(username) {
  const folderPath = path.join(projectPath, username);
  return fs.mkdir(folderPath, { recursive: true });
}

function writeProfile(username, data) {
  const filePath = path.join(projectPath, username, "profile.txt");
  return fs.writeFile(filePath, data, "utf-8");
}

function readProfile(username) {
    const filePath = path.join(projectPath, username, "profile.txt");
    return fs.readFile(filePath, "utf-8");
}

function exercise9() {
    const username = "alice"
    createUser(username)
    .then(() => writeProfile(username, "Profile to alice"))
    .then((data) => readProfile(username))
    .then(console.log)
    .catch(console.error)
}
exercise9()