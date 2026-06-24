import { useMath } from "./utils.js";

export function app(a = 0, b = 0) {
  console.log(useMath("Shlomi").name);
  console.log(useMath("Shlomi").add(a, b));
  console.log(useMath("Shlomi").getPI());
}
