export const isValidName = (name) => name.trim().length > 0;

export const isValidBalance = (balance) =>
  typeof balance === "number" && balance >= 0;
