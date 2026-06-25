import { TYPE_ACCOUNT } from "./config.js";

export const isValidName = (name) =>
  typeof name === "string" && name.trim().length > 0;

export const isValidBalance = (balance) =>
  typeof balance === "number" && balance >= 0;

export const isValidTypeAccount = (typeAccount) =>
  TYPE_ACCOUNT.includes(typeAccount.toLowerCase());
