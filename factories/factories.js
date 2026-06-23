// Exercise 4
function createName(name, age) {
  return {
    name,
    age,
    greet: () => console.log({ name, age }),
    isOver18: () => age > 18,
  };
}

// Exercise 3
const name1 = createName("Shlomi", 22);
const name2 = createName("Avi", 30);

name1.greet();
name2.greet();
