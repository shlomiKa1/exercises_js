const fs = require("fs");
const path = require("path");

const dirData = path.join(
  "week_02",
  "asynrone",
  "callbacks-fs-practive",
  "data",
);

// Exercise 1
function writeTXT(filename, data) {
  fs.writeFile(filename, data, "utf8", (err) => {
    if (err) return console.log("Could not read file");
    console.log("File was created successfully");
  });
}

// Exercise 2
function readTXT(filename) {
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) return console.log("Could not read file");

    console.log(data);
  });
}

// exercise 3
function exercise3() {
  filename = path.join(dirData, "message.txt");
  const data = "Hello from Node fs!";
  writeTXT(filename, data);
  readTXT(filename);
}
// exercise3();

// Exercise 4
const exercise4 = () => {
  readTXT(path.join(dirData, "not-exist.txt"));
};
// exercise4();

// Exercise 5
function readTextFile(filepath, callback) {
  fs.readFile(filepath, "utf-8", callback);
}

// Exercise 6
function appendToTextFile(filename, data) {
  fs.appendFile(filename, data, "utf-8", (err) => {
    if (err) return console.log(err);
    console.log("Added text successfully");
  });
}

// appendToTextFile(path.join(dirData, "message.txt"));
// readTXT(path.join(dirData, "message.txt"));

// Exercise 7
function createLogFile(filename, firstData, arrData) {
  writeTXT(filename, firstData);

  for (const data of arrData) {
    appendToTextFile(filename, data);
  }
}
// createLogFile(path.join(dirData, "log.txt"), "Log stared", [
//   "\nFirst action completed",
//   "\nSecond action completed",
// ]);

// Exercise 8
function createFolder(folderName) {
  fs.mkdirSync(folderName, { recursive: true });
  const lastFolder = folderName.split("\\");
  console.log(`${lastFolder[lastFolder.length - 1]} folder created`);
  return folderName;
}
// createFolder(path.join(dirData, "users"));

// Exercise 9
function createFile() {
  const folderPath = createFolder(path.join(dirData, "users"));

  const filename = path.join(folderPath, "user1.txt");
  const user = { Name: "David", Age: 25 };
  fs.writeFileSync(filename, JSON.stringify(user), "utf-8");
}
// createFile()

// Exercise 10
function readFolders(folderName) {
  fs.readdir(folderName, { witFileTypes: true }, (err, data) => {
    if (err) return console.log(err);

    console.log(data);
  });
}
// readFolders(dirData);

function createFiles11() {
  fs.writeFile(path.join(dirData, "step1.txt"), "Step 1 completed", (err) => {
    if (err) return console.log(err);

    fs.writeFile(path.join(dirData, "step2.txt"), "Step 2 completed", (err) => {
      if (err) return console.log(err);

      fs.writeFile(
        path.join(dirData, "step3.txt"),
        "Step 3 completed",
        (err) => {
          if (err) return console.log(err);
        },
      );
    });
  });

  console.log("All steps completed");
}
// createFiles11();

// Exercise 12
function readFiles12() {
  fs.readFile(path.join(dirData, "step1.txt"), "utf8", (err, data) => {
    console.log(data);
    fs.readFile(path.join(dirData, "step2.txt"), "utf8", (err, data) => {
      console.log(data);
      fs.readFile(path.join(dirData, "step3.txt"), "utf8", (err, data) => {
        console.log(data);
      });
    });
  });
}
readFiles12()

// Exercise 13
function createReports() {
  fs.writeFileSync(path.join(dirData, "report-title.txt"), "Daily Report", "utf-8");
    
  fs.writeFileSync(path.join(dirData, "report-body.txt"), "Everything is working");
  
  fs.readFile(path.join(dirData, "report-title.txt"), (err, data) => {
    if (err) return console.log(err);
    
    let result = data + "\n"
    
    fs.readFile(path.join(dirData, "report-body.txt"), (err, data) => {
      if (err) return console.log(err);

      result += data

      return fs.writeFile(path.join(dirData, "final-report.txt"), result, (err) => {
        if (err) return console.log(err);
      });
    });  
  });
}  
// createReports()

// Exercise 14
function copyFile14() {
  fs.writeFile(path.join(dirData, "original.txt"), "Original file content", "utf-8", (err) => {
    if (err) return console.log(err);

    const readOriginal = fs.readFileSync(path.join(dirData, "original.txt"), "utf-8");

    fs.writeFile(path.join(dirData, "copy.txt"), readOriginal, (err) => {
      if (err) return console.log(err);
      console.log(fs.readFileSync(path.join(dirData, "copy.txt"), "utf-8"))
      
    })
  })
}
copyFile14()