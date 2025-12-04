/**
 *Bài 3 – Lọc chuỗi có độ dài lớn hơn 5 ký tự (2.5d)
Mô tả: Viết hàm filterLongStrings(arr) để trả về một mảng gồm các chuỗi có độ dài lớn hơn 5 ký tự.

Yêu cầu:

Chỉ xét các phần tử thuộc kiểu string.
Trả về mảng mới chứa các chuỗi có độ dài > 5.
Nếu không có chuỗi nào phù hợp, trả về mảng rỗng.
Mẫu hàm:

function filterLongStrings(arr) {
  // Xử lý và trả về kết quả
}
Ví dụ:

filterLongStrings(["hello", "world", "javascript", "nodejs"]); 
// ["javascript", "nodejs"]

filterLongStrings(["hi", "hello world", "a b c", "goodbye!!"]); 
// ["hello world", "goodbye!!"]

filterLongStrings(["hi", "bye", "yes"]); 
// []
 */

function filterLongStrings(arr) {
  const newArr = arr.filter((string) => string.length > 5);
  console.log(newArr);
  return newArr;
}

filterLongStrings(["hello", "world", "javascript", "nodejs"]);
// ["javascript", "nodejs"]

filterLongStrings(["hi", "hello world", "a b c", "goodbye!!"]);
// ["hello world", "goodbye!!"]

filterLongStrings(["hi", "bye", "yes"]);
// []
