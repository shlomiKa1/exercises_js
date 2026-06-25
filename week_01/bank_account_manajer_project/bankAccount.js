import {
  isValidCreatetion,
  isValidName,
  isValidBalance,
  isValidTypeAccount,
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

export function deposit(customerID, amount) {}

export function withdraw(customerID, amount) {}

export function searchCustomer(nameID) {}

export function closeAccount(customerID) {}

export function showStatistics() {}

const createCustomer = factoryCreateCustomer();

const arr = [];
arr.push(createCustomer("Shlomi", 12345, "student"));
arr.push(createCustomer("Shlomi", 12345, "premium"));
console.log(arr);
showCustomers(arr);
