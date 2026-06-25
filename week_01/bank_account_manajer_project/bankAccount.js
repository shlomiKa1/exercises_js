import {
  isValidCreatetion,
  isValidName,
  isValidBalance,
  isValidTypeAccount,
} from "./validation.js";

export function factoryCreateCustomer() {
  let idCounter = 0;

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
        balabce,
        accountType,
      };

      idCounter++;
      Object.setPrototypeOf(proto, customer);
      return customer;
    }
  };
}

export function showCustomers(customers) {}

export function deposit(customerID, amount) {}

export function withdraw(customerID, amount) {}

export function searchCustomer(nameID) {}

export function closeAccount(customerID) {}

export function showStatistics() {}

// const createCustomer = factoryCreateCustomer();

// const arr = [];
// arr.push(createCustomer("Shlomi", 12345));
// arr.push(createCustomer("Shlomi", 12345));
// console.log(arr);
