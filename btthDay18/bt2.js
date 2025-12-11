/**
 * Bài 2 — Tìm phần tử gần nhất (không dùng Math.abs trực tiếp trong sort)
Cho mảng:

const numbers = [3, 10, 22, 25, 50, 60];
const x = 24;
Yêu cầu dùng reduce để tìm số gần nhất với x.

Kết quả: Gần nhất với 24 → 22 hoặc 25 (chọn số nhỏ hơn nếu khoảng cách bằng nhau → 22).
 */
const numbers = [3, 10, 22, 25, 50, 60];
const x = 24;
const distance = (a, b) => (a - b < 0 ? b - a : a - b);

//ý tưởng ban đầu
numbers.push(x);
const nb = numbers.sort((a, b) => a - b);
const xIndex = nb.indexOf(x);
const candidates = [];
if (xIndex > 0) candidates.push(nb[xIndex - 1]);
if (xIndex < nb.length - 1) candidates.push(nb[xIndex + 1]);

const nearest = candidates.reduce((acc, cur) => {
  const distAcc = distance(acc, x);
  const distCur = distance(cur, x);

  if (distCur < distAcc) return cur;
  if (distCur === distAcc && cur < acc) return cur;
  return acc;
}, candidates[0]);
console.log(nearest);

// * Cách làm nhanh hơn
// const nearest = numbers.reduce((acc, cur) => {
//   const disAcc = distance(acc, x);
//   const disCur = distance(cur, x);
//   if (disAcc > disCur) {
//     return cur;
//   }
//   if (disAcc == disCur && acc > cur) {
//     return cur;
//   }
//   return acc;
// }, numbers[0]);
// console.log(nearest);
