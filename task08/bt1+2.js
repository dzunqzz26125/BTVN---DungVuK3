//1
function calcBMI(weight, height) {
  // logic
  BMI = weight / height ** 2;
  if (BMI < 18.5) console.log("Thiếu cân");
  else if (18.5 < BMI && BMI < 23) console.log("Bình thường");
  else if (23 < BMI < 25) console.log("Thừa cân");
  else console.log("Béo phì");
  return BMI;
}
let weight = Number(window.prompt("Nhập weight:"));
let height = Number(window.prompt("Nhập height:"));

// Output:
calcBMI(weight, height); // "BMI = 20.76, Bình thường"

//2
function swapNumber(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;

  console.log(a, b);
}

// Output:
swapNumber(3, 5); // 5 3
