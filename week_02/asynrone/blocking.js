import input from 'analiza-sync';
import { error } from 'console';
import { copyFile } from 'fs';
import fs from 'fs/promises'
import path from 'path';


fs.readFile('b.txt', 'utf8', (err, data) => {
    if (err) return console.log(err);

    const users = JSON.parse()
    const name = input("Enter name: ")
    const password = input("Enter password: ")

    users.push({name, password})
    fs.writeFile('b.txt', JSON.stringify(users), (err) => {
        if (err) return console.log(err);
        
        fs.readFile()
    })
    
})


const originalPath = path.join(__dirname, "..", "dara", "orginalPath")
const copyPath = path.join(__dirname, "..", "dara", "copy.txt")


fs.readFile(originalPath, "utf-8", (err, data) => {
    if (err) return console.error(err);
    return data;
})

fs.writeFile(copyPath, "data", "utf-8", (err) => {
    if (err) return console.error(err);
    return;
})


fs.readFile(originalPath, "utf-8")
.then((data) => fs.writeFile(copyFile, data, "utf-8"))
.then(() => fs.readFile(copyFile, "utf-8"))
.then(console.log)
.catch(console.error)
