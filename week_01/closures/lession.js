function createCounter() {
  let counter = 0;
  function increment() {
    counter++;
  }

  function getCounter() {
    return counter;
  }

  const getCounter = () => counter;
  return { increment, getCounter };
}


