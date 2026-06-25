import {
  isValidCreatetion,
  vaildDeposit,
  vaildWithdraw,
  vaildCustomer,
  vaildClose,
} from "./validation.js";

export function factoryCreateCustomer() {
  let idCounter = 1;

  return function (fullName, balabce, accountType) {
    if (isValidCreatetion(fullName, balabce, accountType)) {
      const proto = {
        getCustomer: function () {
          return this;
        },
      };

      const customer = {
        id: idCounter,
        fullName,
        accountType,
        balabce,
        status: true,
      };

      idCounter++;
      Object.setPrototypeOf(proto, customer);
      return customer;
    }
  };
}

export function showCustomers(customers) {
  console.table(customers);
}

export function deposit(customerID, amount, customers) {
  const customer = vaildDeposit(customerID, amount, customers);
  console.log(customer);

  if (customer) {
    customer.balabce += amount;
    console.log("Deposit completed successfully");
    return;
  }
  console.log("Depodit failed: insufficient balance");
}

export function withdraw(customerID, amount, customers) {
  const customer = vaildWithdraw(customerID, amount, customers);

  if (customer) {
    customer.balabce -= amount;
    console.log("Withdraw completed successfully");
    return;
  }
  console.log("Withdraw failed: insufficient balance");
}

export function searchCustomer(nameID, customers) {
  const customer = vaildCustomer(nameID, customers);
  return customer;
}

export function closeAccount(customerID, customers) {
  const customer = vaildClose(customerID, customers);

  if (!customer) return "Close account failed: ID is not exists";
  if (typeof customer === "string") return customer;
  customer.status = false;
  return "Account closed successfully";
}

export function showStatistics() {}

const createCustomer = factoryCreateCustomer();

const arr = [];
arr.push(createCustomer("Shlomi", 12345, "student"));
arr.push(createCustomer("Shlomi", 12345, "premium"));
// console.log(arr);
// showCustomers(arr);
// withdraw(1, 2, arr)
// showCustomers(arr);
// console.log(closeAccount(1, arr));
// console.log(closeAccount(1, arr));
// showCustomers(arr);
