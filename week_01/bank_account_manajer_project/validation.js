import { TYPE_ACCOUNT } from "./config.js";

const isValidName = (name) =>
  typeof name === "string" && name.trim().length > 0;

const isValidBalance = (balance) => typeof balance === "number" && balance >= 0;

const isValidTypeAccount = (typeAccount) =>
  TYPE_ACCOUNT.includes(typeAccount.toLowerCase());

const idExists = (id, customers) => customers.includes(id);

const isActive = (customer) => customer.isActive === true;

export const isValidCreatetion = (fullName, balabce, accountType) => {
  if (!isValidName(fullName)) return "You can't put empty name!!!";

  if (!isValidBalance(balabce)) return "Balance ia not valid";

  if (!isValidTypeAccount(accountType)) return "Type account is not vaild";

  return true;
};

export const vaildDeposit = (id, amount, customers) => {
  if (!idExists(id, customers)) return false;

  if (!isValidBalance(amount)) return false;

  customer = customers.find((findCustomer) => findCustomer.id == id);
  if (isActive(customer)) return false;

  return customer;
};
