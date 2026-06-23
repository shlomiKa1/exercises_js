// Exercise 2
function createName(name) {
  return {
    name,
    greet: () => console.log(`היי, אני ${name}`),
  };
}

  // Exercise 3
  const name1 = greetName("Shlomi");
  const name2 = greetName("Avi");

  name1.greet();
  name2.greet();
