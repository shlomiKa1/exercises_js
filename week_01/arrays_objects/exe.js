let numbers = [1, 2, 3, 4, 5];

const initialValue = 0;
const sumValue = numbers.reduce(
  (accumultor, currentValue) => accumultor + currentValue,
  initialValue,
);

console.log(sumValue);


const [key, val, ...rest] = [1, 2, 3, 4, 5, 6];
console.log(key, val);