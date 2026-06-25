import {
  isValidCreatetion,
  vaildDeposit,
  vaildWithdraw,
  vaildCustomer,
  vaildClose,
} from "./validation.js";

export function factoryCreateCustomer() {
  let idCounter = 1;

  return function (fullName, balance, accountType) {
    if (isValidCreatetion(fullName, balance, accountType)) {
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
    customer.balance += amount;
    console.log("Deposit completed successfully");
    return;
  }
  console.log("Depodit failed: insufficient balance");
}

export function withdraw(customerID, amount, customers) {
  const customer = vaildWithdraw(customerID, amount, customers);

  if (customer) {
    customer.balance -= amount;
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

export function showStatistics(customers) {
  let show = "===== Statistics =====";
  show += `\nTotal Customers: ${getTotalCustomers(customers)}`;
  show += `\nActive Customers: ${geteActiveAccount(customers)}`;
  show += `\nTotal Money: ${getTotalMoney(customers)}`;
  show += `\nAberage Balance: ${getAverageBalance(customers)}`;
  show += `\nHighest Balance: ${getHighestBalance(customers)}`;

  return show;
}

const getTotalCustomers = (customers) => customers.length;

const geteActiveAccount = (customers) =>
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
