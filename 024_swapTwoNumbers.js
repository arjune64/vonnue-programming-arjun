// 24. Write a program to Swap two numbers without third variable
const swap = (firstNumber, secondNumber) => {
  firstNumber = firstNumber + secondNumber;
  secondNumber = firstNumber - secondNumber;
  firstNumber = firstNumber - secondNumber;
  console.log('Firstnumber', firstNumber);
  console.log('Secondnumber', secondNumber);
}

swap(5, 10);