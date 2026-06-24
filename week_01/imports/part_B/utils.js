import { sum, PI } from "./math.js";

export function useMath(name) {
  return {
    name,
    add: (a, b) => `${a} + ${b} = ${sum(a, b)}`,
    getPI: () => `PI = ${PI()}`,
  };
}
