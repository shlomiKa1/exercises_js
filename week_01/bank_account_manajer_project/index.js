import { MAX_CHOICES } from "./config.js";
import {
  showMenu,
  inputMessage,
  getCreateInput,
  getDepWithInput,
  getCustomerNameID,
  getCustomerIDInput,
} from "./utils.js";
import {
  factoryCreateCustomer,
  showCustomers,
  deposit,
  withdraw,
  searchCustomer,
  closeAccount,
  showStatistics,
} from "./bankAccount.js";

const createCustomer = factoryCreateCustomer();
const customers = [];
let choice = "";

do {
  showMenu();
  choice = Number(inputMessage(`Please enter your choise 1-${MAX_CHOICES}`));

  switch (choice) {
    case 1: {
      const { fullName, balance, accountType } = getCreateInput();
      const customer = createCustomer(fullName, balance, accountType);

      if (typeof customer === "string") {
        console.log("Error: ", customer);
      } else {
        customers.push(customer);
        console.log("Customer created: ", customer.fullName);
      }
      break;
    }

    case 2: {
      console.log("Show customers:");
      showCustomers(customers);
      break;
    }

    case 3: {
      const { customerID, amount } = getDepWithInput("deposit");
      console.log(`Depositing to customer ID ${customerID}`);
      console.log(deposit(customerID, amount, customers));
      break;
    }

    case 4: {
      const { customerID, amount } = getDepWithInput("withdraw");
      console.log(`Withdrawing from customer ID ${customerID}`);
      console.log(withdraw(customerID, amount, customers));
      break;
    }

    case 5: {
      const nameID = getCustomerNameID();
      if (typeof nameID === "string")
        console.log(`Finding user by name '${nameID}'`);
      else console.log(`Finding user by ID '${nameID}'`);
      console.log(searchCustomer(nameID, customers));
      break;
    }

    case 6: {
      const customerID = getCustomerIDInput();
      console.log(`Closing account by ID '${customerID}'`);
      console.log(closeAccount(customerID, customers));
      break;
    }

    case 7: {
      console.log(showStatistics(customers));
      break;
    }

    case 8: {
      console.log("Good bye");
      break;
    }

    default: {
      console.log("Invalid choice. Please enter a number between 1-8");
      choice = "";
    }
  }
} while (choice !== MAX_CHOICES);
