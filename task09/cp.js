//số chính phương
function printSquareNumber(n) {
  let result = "";

  for (let i = 2; i <= n; i++) {
    let sqrt = Math.sqrt(i);
    if (Number.isInteger(sqrt)) {
      result += i + " ";
    }
  }

  console.log("Số chính phương: " + result.trim());
}
printSquareNumber(10); // 4 9
printSquareNumber(20); // 4 9 16

//số nguyên tố
function printPrimeNumber(n) {
  let result = "";

  for (let i = 2; i <= n; i++) {
    let isPrime = true;

    //check số nguyên tố
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      result += i + " ";
    }
  }

  console.log("Số nguyên tố: " + result.trim());
}
printPrimeNumber(10); // 2 3 5 7

//bcc
function printMultiplicationTable() {
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(i + " x " + j + " = " + i * j);
    }
  }
}
printMultiplicationTable();

//Chrismas Tree
function printChristmasTree(n, character) {
  if (!Number.isInteger(n) || n <= 0 || n >= 100) {
    console.log("n phải là số nguyên dương nhỏ hơn 100");
    return;
  }
  if (typeof character !== "string" || character.length !== 1) {
    console.log("character phải là một ký tự");
    return;
  }

  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let chars = character.repeat(2 * i - 1);
    console.log(spaces + chars);
  }

  let trunkSpaces = " ".repeat(n - 1);
  console.log(trunkSpaces + character);
}
printChristmasTree(5, "*");
printChristmasTree(4, "o");
