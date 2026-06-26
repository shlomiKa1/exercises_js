import { TYPE_ACCOUNT } from "./config.js";

const isValidName = (name) =>
  typeof name === "string" && name.trim().length > 0;

const isValidBalance = (balance) => typeof balance === "number" && balance >= 0;

const isValidTypeAccount = (typeAccount) =>
  TYPE_ACCOUNT.includes(typeAccount.toLowerCase());

const findById = (id, customers) =>
  customers.find((customer) => customer.id === id);

const findByName = (name, customers) =>
  customers.find(
    (customer) => customer.fullName.toLowerCase() === name.toLowerCase(),
  );

const isActive = (customer) => customer.status === true;

const vaildAmount = (amount, balabce) => amount < balabce;

export function isValidCreation (fullName, balance, accountType) {
  if (!isValidName(fullName)) return "You can't put empty name!!!";

  if (!isValidBalance(balance)) return "Balance ia not valid";

  if (!isValidTypeAccount(accountType)) return "Type account is not vaild";

  return true;
};

export function vaildDeposit (id, amount, customers) {
  const customer = findById(id, customers);

  if (!customer) return customer;

  if (!isValidBalance(amount)) return false;

  if (!isActive(customer)) return false;

  return customer;
};

export function vaildWithdraw (id, amount, customers) {
  const customer = findById(id, customers);

  if (!customer) return false;

  if (!isValidBalance(amount) || !vaildAmount(amount, customer.balance))
    return false;

  if (!isActive(customer)) return false;

  return customer;
};

export function vaildCustomer(nameID, customers) {
  if (typeof nameID === "string") {
    if (isValidName(nameID)) return findByName(nameID, customers);
    return "Error name is not vaild";
  }
  if (typeof nameID === "number") return findById(nameID, customers);
}

export function vaildClose(id, customers) {
  const customer = findById(id, customers);

  if (!customer) return false;

  if (!isActive(customer)) return "Account allredy closed";
  return customer;
}
