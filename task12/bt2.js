/**
 * Bài 2 – Lọc các số chẵn trong mảng (2d)
Mô tả: Viết hàm filterEvenNumbers(arr) để lọc và trả về một mảng mới chứa các số chẵn từ mảng đầu vào.

Yêu cầu:

Chỉ lấy các phần tử thuộc kiểu number và có giá trị chia hết cho 2.
Không làm thay đổi mảng gốc.
Trả về mảng mới chứa các số chẵn.
Nếu không có số chẵn, trả về mảng rỗng.
 */

function filterEvenNumbers(arr) {
  const newArr = arr.filter((num) => !Number.isNaN(num) && num % 2 === 0);
  console.log(newArr);
  return newArr;
}
filterEvenNumbers([1, 2, 3, 4, 5, 6]); // [2, 4, 6]
filterEvenNumbers([1, 3, 5, 7]); // []
filterEvenNumbers(["a", "b"]); // []
filterEvenNumbers([-2, -1, 0, 1, 2]); // [-2, 0, 2]
filterEvenNumbers([-2, -1, 0, 1, 2, "a"]); // [-2, 0, 2]
