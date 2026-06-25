import { TYPE_ACCOUNT } from "./config.js";

export const isValidName = (name) =>
  typeof name === "string" && name.trim().length > 0;

export const isValidBalance = (balance) =>
  typeof balance === "number" && balance >= 0;

export const isValidTypeAccount = (typeAccount) =>
  TYPE_ACCOUNT.includes(typeAccount.toLowerCase());

export const isValidCreatetion = (fullName, balabce, accountType) => {
  if (!isValidName(fullName)) throw new Error("You can't put empty name!!!");
  if (!isValidBalance(balabce)) throw new Error("Balance ia not valid");
  if (!isValidTypeAccount(accountType))
    throw new Error("Type account is not vaild");
  return true;
};
