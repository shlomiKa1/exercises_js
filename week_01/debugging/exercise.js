function exercise1() {
  function sum(a, b) {
    return a + b;
  }

  console.log(sum(2, 3));
}

function exercise2() {
  const first = "10";
  const second = "5";

  console.log(Number(first) + Number(second));
}

function exercise3() {
  const numbers = [1, 2, 3];

  const result = numbers.map((num) => num * 2);

  console.log(result);
}

function exercise4() {
  const numbers = [1, 2, 3, 4];

  const evens = numbers.filter((num) => num % 2 === 0);

  console.log(evens);
}

function exercise5() {
  let total = 0;

  for (let i = 1; i <= 3; i++) {
    total += i;
  }

  console.log(total);
}

function exercise6() {
  const user = {
    name: "Hanan",
    age: 30,
  };

  console.log(user.name);
}

function exercise7() {
  const arr = [10, 20, 30];

  console.log(arr[2].toString());
}

function exercise8() {
  function greet(name) {
    if (!name) {
      return;
    }

    console.log("Hello " + name);
  }

  greet("David");
}

function exercise9() {
  function multiply(a, b) {
    return a * b;
  }

  const result = multiply(2, 4);

  console.log(result + 1);
}

function exercise10() {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, 100);
  }
}

function exercise11() {
  function change(name) {
    user.name = name;
  }

  const user = { name: "Hanan" };

  change("Moshe");

  console.log(user.name);
}

function exercise12() {
  const user = { name: "Hanan" };
  const copy = Object.fromEntries(Object.entries(user));

  copy.name = "Ruth";

  console.log(user.name);
}

function exercise13() {
  function getFullName(user) {
    return user.firstName + " " + user.lastName;
  }

  const user = {
    firstName: "Hanan",
    lastName: "Toto",
  };

  console.log(getFullName(user));
}

function exercise14() {
  function divide(a, b) {
    if (b === 0) {
      return "Cannot divide";
    }

    return a / b;
  }

  console.log(divide(10, 0));
}

function exercise15() {
  const items = [1, 2, 3];

  items.forEach((item) => {
    if (item === 2) {
      console.log(item);
      return;
    }
  });
}

function exercise16() {
  const obj = {
    value: 10,
    getValue: function () {
      return this.value;
    },
  };

  const fn = obj.getValue();

  console.log(fn);
}

function exercise17() {
  function counter() {
    let count = 0;

    return {
      increment: () => count++,
      get: () => count,
    };
  }

  const c = counter();

  c.increment();
  c.increment();

  console.log(c.get());
}

// exercise18()
function exercise28() {
  function runTasks(tasks) {
    const result = [];

    tasks.forEach(async (task) => {
      const value = await task();
      result.push(value);
    });

    return result;
  }

  const tasks = [
    () => Promise.resolve(1),
    () => Promise.resolve(2),
    () => Promise.resolve(3),
  ];

  console.log(runTasks(tasks));
}

function exercise29() {
  const text = "hello";

  for (let i = 0; i < text.length; i++) {
    console.log(text[i].toUpperCase());
  }
}

function exercise30() {
  function createUser(name, age) {
    return;
    {
      (name, age);
    }
  }

  const user = createUser("Hanan", 30);

  console.log(user.name);
}
