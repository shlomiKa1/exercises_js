// hello();

// function hello() {
//   console.log("Hello world");
// }

// const helloWorld = function() {
//     console.log("Hello World");
// }
// helloWorld()


const hello = () => {
    console.log("Hello");
}

hello();

function logger(cd) {
    const start = Date.now();
    cd();
    arrTimes.push(Date.now - start);
}

const arrTimes = [];

logger(() => console.log('first'));


function momo(name, age) {
    console.log(name, age);
}
