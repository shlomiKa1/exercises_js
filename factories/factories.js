// Exercise 2
function createName(name) {
  return {
    name,
    greet: () => console.log(`היי, אני ${name}`),
  };
}
