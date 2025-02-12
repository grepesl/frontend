import Calculator from "./modules/Calculator.js";

/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

const calculator = new Calculator();
console.log(calculator.sum(4,5));
console.log(calculator.subtraction(4,5));
console.log(calculator.multiplication(4,5));
console.log(calculator.division(4,5));