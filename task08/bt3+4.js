//3
function sortNumber(a, b, c) {
  // Xử lý và in ra kết quả
  if (a > b) {
    a = a + b;
    b = a - b;
    a = a - b;
  }

  if (a > c) {
    a = a + c;
    c = a - c;
    a = a - c;
  }

  if (b > c) {
    b = b + c;
    c = b - c;
    b = b - c;
  }
}

// Output:
sortNumber(3, 2, 1); // 1 2 3

//4
function isTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) return false;

  return a + b > c && a + c > b && b + c > a;
}

let a = Number(window.prompt("Nhập cạnh a:"));
let b = Number(window.prompt("Nhập cạnh b:"));
let c = Number(window.prompt("Nhập cạnh c:"));

console.log(isTriangle(3, 4, 5)); // true
console.log(isTriangle(3, 4, 7)); // false
