/**
Bài 16 – Loại bỏ phần tử trùng lặp (không sử dụng Set hoặc reduce) (2d)
Mô tả: Cho một mảng bất kỳ, hãy viết hàm removeDuplicates(arr) để loại bỏ toàn bộ phần tử trùng lặp và trả về một mảng mới chỉ chứa các phần tử duy nhất.

Yêu cầu:

Không sử dụng Set.
Không sử dụng reduce.
Có thể sử dụng: filter, indexOf, findIndex hoặc vòng lặp.
Không làm thay đổi mảng gốc.
Chỉ giữ lại lần xuất hiện đầu tiên của mỗi phần tử.
Mẫu hàm:

function removeDuplicates(arr) {
  // Xử lý và trả về kết quả
}
Ví dụ:

removeDuplicates([1, 2, 2, 3, 3, 3, 4]);  
// [1, 2, 3, 4]

removeDuplicates(["a", "b", "a", "c", "b"]);  
// ["a", "b", "c"]

removeDuplicates([]);  
// []
 */

function removeDuplicates(arr) {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4]));
// [1, 2, 3, 4]

console.log(removeDuplicates(["a", "b", "a", "c", "b"]));
// ["a", "b", "c"]

console.log(removeDuplicates([]));
// []
