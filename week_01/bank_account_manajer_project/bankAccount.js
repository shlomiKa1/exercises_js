import {
  isValidCreation,
  vaildDeposit,
  vaildWithdraw,
  vaildCustomer,
  vaildClose,
} from "./validation.js";

export function factoryCreateCustomer() {
  let idCounter = 1;

  return function (fullName, balance, accountType) {
    const validationResult = isValidCreation(fullName, balance, accountType);

    if (validationResult !== true) return validationResult;
    else {
      const proto = {
        getCustomer: function () {
          return this;
        },
      };

      const customer = {
        id: idCounter,
        fullName,
        accountType,
        balance,
        status: true,
      };

      idCounter++;
      Object.setPrototypeOf(customer, proto);
      return customer;
    }
  };
}

export function showCustomers(customers) {
  console.table(customers);
}

export function deposit(customerID, amount, customers) {
  const customer = vaildDeposit(customerID, amount, customers);

  if (!customer)
    return "Deposit failed: customer not found or account inactive";

  customer.balance += amount;
  return "Deposit completed successfully";
}

export function withdraw(customerID, amount, customers) {
  const customer = vaildWithdraw(customerID, amount, customers);

  if (customer) {
    customer.balance -= amount;
    return "Withdraw completed successfully";
  }
  return "Withdraw failed: insufficient balance";
}

export function searchCustomer(nameID, customers) {
  const customer = vaildCustomer(nameID, customers);
  if (!customer) return "Customer is not found";
  return customer;
}

export function closeAccount(customerID, customers) {
  const customer = vaildClose(customerID, customers);

  if (!customer) return "Close account failed: ID is not exists";
  if (typeof customer === "string") return customer;
  customer.status = false;
  return "Account closed successfully";
}

export function showStatistics(customers) {
  let show = "===== Statistics =====";
  show += `\nTotal Customers: ${getTotalCustomers(customers)}`;
  show += `\nActive Customers: ${getActiveAccount(customers)}`;
  show += `\nTotal Money: ${getTotalMoney(customers)}`;
  show += `\nAberage Balance: ${getAverageBalance(customers)}`;
  show += `\nHighest Balance: ${getHighestBalance(customers)}`;

  return show;
}

const getTotalCustomers = (customers) => customers.length;

const getActiveAccount = (customers) =>
  customers.filter((customer) => customer.status === true).length;

function getTotalMoney(customers) {
  return customers
    .map((customer) => customer.balance)
    .reduce((acc, current) => acc + current, 0);
}

function getAverageBalance(customers) {
  return getTotalMoney(customers) / getTotalCustomers(customers);
}

function getHighestBalance(customers) {
  return Math.max(...customers.map((custumer) => custumer.balance));
}
