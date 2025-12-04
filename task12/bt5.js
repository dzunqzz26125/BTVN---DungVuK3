/**
 * Bài 5 – Nén mảng theo nhóm (Run Length Encoding) (1d)
Mô tả: Cho một mảng đã được nhóm sẵn theo từng cụm phần tử giống nhau đứng liên tiếp, hãy viết hàm compressArray(arr) để chuyển mảng này sang dạng nén: mỗi phần tử được biểu diễn bởi một cặp [giá trị, số lần xuất hiện liên tiếp].

Yêu cầu:

Không sử dụng map.
Không sử dụng reduce.
Chỉ sử dụng: for, push, splice (nếu cần).
Phải xử lý đúng nhóm cuối cùng trong mảng.
Mảng có thể rỗng hoặc chỉ có một phần tử.
Mẫu hàm:

function compressArray(arr) {
  // Xử lý và trả về kết quả
}
Ví dụ:

compressArray(["a", "a", "b", "b", "b", "c"]);  
// [["a",2], ["b",3], ["c",1]]

compressArray([1, 1, 1, 2, 2, 3]);  
// [[1,3], [2,2], [3,1]]

compressArray(["x"]);  
// [["x",1]]

compressArray([]);  
// []
 */

function compressArray(arr) {
  const result = [];

  if (arr.length === 0) return result;

  let current = arr[0];
  let count = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === current) {
      count++;
    } else {
      result.push([current, count]);

      current = arr[i];
      count = 1;
    }
  }

  result.push([current, count]);

  return result;
}

console.log(compressArray(["a", "a", "b", "b", "b", "c"]));
// [["a",2], ["b",3], ["c",1]]

console.log(compressArray([1, 1, 1, 2, 2, 3]));
// [[1,3], [2,2], [3,1]]

console.log(compressArray(["x"]));
// [["x",1]]

console.log(compressArray([]));
// []
