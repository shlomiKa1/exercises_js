import {
  factoryCreateCustomer,
  showCustomers,
  deposit,
  withdraw,
  searchCustomer,
  closeAccount,
  showStatistics,
} from "./bankAccount.js";

const createCustomer = factoryCreateCustomer();

const customers = [];
customers.push(createCustomer("Shlomi", 12345, "student"));
customers.push(createCustomer("Momo", 50000, "premium"));

console.log("Show customers:");
showCustomers(customers);

console.log("Deposit customer to 5");
deposit(1, 5, customers);
showCustomers(customers);

console.log("Withdraw customer to 1");
withdraw(1, 2, customers);
showCustomers(customers);

console.log("Find user by name 'Shlomi'");
console.log(searchCustomer("", customers));

console.log(closeAccount(1, customers));
showCustomers(customers);

console.log(showStatistics(customers));
