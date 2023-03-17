import { add,subtract,divide,multiply } from "./functions/calFunctions.js";
const operation = process.argv[2];

const args = process.argv.slice(3);


function calculate() {
  switch (operation) {
    case "add":
      console.log(add(args));

      break;
    case "multiply":
      console.log(multiply(args));
      break;
    case "subtract":
      console.log(subtract(args));
      break;
    case "divide":
      console.log(divide(args));
      break;
    default:
      throw new Error(`not an operator ${operation} `);
  }
}
calculate();
