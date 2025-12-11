/**
 * Bài 8
Cho dữ liệu học sinh:

const list = [
  { name: "An", scores: [7, 8, 9] },
  { name: "Bình", scores: [5, 6] },
  { name: "Cường", scores: [10, 10, 9, 8] },
];
Yêu cầu:

Dùng map + reduce để tạo mảng mới:
[
  { name: "An", avg: 8 },
  { name: "Bình", avg: 5.5 },
  { name: "Cường", avg: 9.25 },
];
Sắp xếp theo điểm trung bình giảm dần.

Tìm ra student có avg cao nhất.
 */
const list = [
  { name: "An", scores: [7, 8, 9] },
  { name: "Bình", scores: [5, 6] },
  { name: "Cường", scores: [10, 10, 9, 8] },
];

const avgA = [];
const listStudent = list.map((student) => {
  const total = student.scores.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  const avg = total / student.scores.length;
  return {
    name: student.name,
    avg: avg,
  };
});
listStudent.sort((a, b) => b.avg - a.avg);
console.log(listStudent);
console.log("Học sinh có avg cao nhất là: ", listStudent[0]);
