const numbers = [2, 15, 30, 55, 60, 77, 90];

// duyệt các phần tử của mảng
// so sánh với x
// tạo 1 biến gán các phần tử đó trừ cho x
// phần tử nào trừ cho x số nhỏ nhất sẽ gần x nhất
console.log("các phần tử của mảng: " + numbers);
function findNearest(numbers, x) {
  let temp = numbers[0];
  let min = Math.abs([0] - x);
  for (let j = 1; j <= numbers.length; j++) {
    let bd = Math.abs(numbers[j] - x);
    if (bd < min) {
      min = bd;
      temp = numbers[j];
    }
  }
  console.log("x là: " + x);
  console.log("min là: " + temp);
}
findNearest(numbers, 61);
