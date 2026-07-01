import { error } from "console";

// Exercise 5
async function conversionPromise(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();

    return data;
  } catch (err) {
    throw err;
  }
}

// Exercise 6
async function done() {
  return "Done";
}
done().then((data) => {
  console.log("=== Exercise 6 ===");
  console.log(data);
});

// Exercise 7
async function sqaure(number) {
  return await (number ** 2);
}

const number = 4;
sqaure(number).then((num) => {
  console.log("\n=== Exercise 7 ===");
  console.log(`${number} ^ 2 = ${num}`);
});

// exercise 9
async function printUsers() {
  const users = await getUsers();
  console.log(users);
}

// Exercise 11
async function asyncEven(number) {
    const checkEven = await isEven(number)
    console.log(`${number} is even? ${checkEven}`);
}

// Exercise 14
async function twoUrl(url1, url2) {
  try {
    const [res1, res2] = await Promise.all([fetch(url1), fetch(url2)]);

    if (!res1.ok) throw new Error(`Status: ${res1.status}, in url: ${url1}`);
    if (!res2.ok) throw new Error(`Status: ${res2.status}, in url: ${url2}`);

    const [data1, data2] = await Promise.all([res1.json(), res2.json()]);

    return { "data 1": data1, data2: data2 };
  } catch (err) {
    console.log("Error: ", err.message);
    throw err;
  }
}

// exercise 15 - 16
async function threeUrl(url1, url2, url3) {
  try {
    const [res1, res2, res3] = await Promise.all([
      fetch(url1),
      fetch(url2),
      fetch(url3),
    ]);

    if (!res1.ok) throw new Error(`Status: ${res1.status}, in URL: ${url1}`);
    if (!res2.ok) throw new Error(`Status: ${res2.status}, in URL: ${url2}`);
    if (!res3.ok) throw new Error(`Status: ${res3.status}, in URL: ${url2}`);

    const [data1, data2, dara3] = await Promise.all([
      res1.json(),
      res2.json(),
      res3.json(),
    ]);

    return { data1: data1, data2: data2, data3: dara3 };
  } catch (err) {
    console.error("Error: ", err.message);
    throw err;
  }
}

// Exercise 18
async function getDataUrls(urls) {
  const allData = [];

  for (const url of urls) {
    try {
      const res = await fetch(url);

      if (!res.ok) throw new Error(`Status: ${res.status}, In URL: ${url}`);

      const data = await res.json();
      allData.push({ url: data });
    } catch (err) {
      console.error(err.message);
      throw err;
    }
  }
  return allData;
}

// Exercise 19
async function getDataUrlsBetter(urls) {
  try {
    const promises = urls.map(async (url, res) => {
      res = await fetch(url);

      if (!res.ok) throw new Error(`Status: ${res.status}, In URL: ${url}`);
      return res.json();
    });

    const data = await Promise.all(promises);

    return data;
  } catch (err) {
    console.error(err.message);
    throw err;
  }
}

// Exercise 20
async function getAllOrderDetail() {
  try {
    const [dataUser, dataOrders, dataDetails] = await Promise.all([
      getUsers(),
      getOrders(),
      getOrdersDetails(),
    ]);

    if (!dataUser) throw new Error(`User data is empty`);
    if (!dataOrders) throw new Error(`Orders data is empty`);
    if (!dataDetails) throw new Error(`Order details data is empty`);

    return { user: dataUser, orders: dataOrders, orderDetails: dataDetails };
  } catch (err) {
    console.error(err.message);
    throw err;
  }
}
