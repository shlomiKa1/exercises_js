import input from "analiza-sync";
import { TYPE_ACCOUNT } from "./config.js";

export function showMenu() {
  console.log("\n==== Menu ====");
  console.log("1. Create customer account");
  console.log("2. Show customers");
  console.log("3. Deposit money by ID");
  console.log("4. Withdraw money by ID");
  console.log("5. Search customer by ID/name");
  console.log("6. Close account by ID");
  console.log("7. Show Statistics");
  console.log("8. Exit\n");
}

export function inputMessage(message) {
  return input(`${message}\n`);
}

export function getCreateInput() {
  const fullName = inputMessage("please enter your name");
  const balance = Number(inputMessage("please enter your balance"));
  const accountType = inputMessage(`please enter type account - ${TYPE_ACCOUNT}`);
  console.log("DEBUG:", { fullName, balance, accountType }); // ← הוסף את זה

  return { fullName, balance, accountType };
}

export function getDepWithInput(depWith) {
  const customerID = inputMessage(`Please enter ID customer`);
  const amount = inputMessage(`Please enter amount of ${depWith}`);

  return { customerID, amount };
}

export function getCustomerNameID() {
  const nameID = inputMessage("Please enter ID/name customer");
  return nameID;
}

export function getCustomerIDInput() {
  const customerID = inputMessage("Please enter ID customer");
  return customerID;
}
