/**
 * BÀI TẬP 3 — Chèn số vào mảng đã được chuẩn hoá và sắp xếp tăng dần
Mô tả yêu cầu
Viết hàm insertNumber(arr, num) với các yêu cầu sau:

Chuẩn hoá mảng đầu vào:

Loại bỏ toàn bộ giá trị không phải là số.
Loại bỏ các giá trị kiểu số nhưng không hợp lệ (NaN).
Sắp xếp mảng theo thứ tự tăng dần. Có thể sử dụng hoặc không sử dụng sort(), tuỳ lựa chọn của học viên.

Chèn giá trị num vào mảng sao cho thứ tự tăng dần không bị thay đổi.

Nếu num không phải số hợp lệ (NaN hoặc giá trị không phải number), không chèn.
Nếu mảng ban đầu rỗng, trả về mảng chỉ chứa num.
Trả về mảng mới sau khi đã chèn.
 */

function insertNumber(arr, num) {
  console.log("BAN ĐẦU arr:", arr);
  console.log("BAN ĐẦU num:", num);
  if (typeof num !== "number" || Number.isNaN(num)) {
    console.log("num KHÔNG hợp lệ, chỉ chuẩn hóa arr");

    let cleanArr = [];

    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "number" && !Number.isNaN(arr[i])) {
        cleanArr.push(arr[i]);
      }
    }

    console.log("Sau khi clean:", cleanArr);

    sortAscending(cleanArr);

    console.log("Sau khi sort:", cleanArr);
    return cleanArr;
  }

  if (arr.length === 0) {
    console.log("Mảng rỗng");
    return [num];
  }

  let cleanArr = [];

  console.log("Bắt đầu làm sạch mảng");
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && !Number.isNaN(arr[i])) {
      cleanArr.push(arr[i]);
    }
  }
  console.log("Sau khi clean:", cleanArr);

  console.log("Bắt đầu sort tăng dần");
  sortAscending(cleanArr);
  console.log("Sau khi sort:", cleanArr);

  console.log("Bắt đầu chèn num:", num);

  let inserted = false;
  for (let i = 0; i < cleanArr.length; i++) {
    if (num < cleanArr[i]) {
      cleanArr.splice(i, 0, num);
      inserted = true;
      console.log(`Chèn ${num} vào vị trí ${i}`);
      break;
    }
  }

  if (!inserted) {
    cleanArr.push(num);
    console.log(`${num} lớn nhất, push cuối mảng`);
  }

  console.log("Mảng cuối cùng:", cleanArr);

  return cleanArr;
}

function sortAscending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

console.log("---------------------");
insertNumber([1, 3, 5, 7, 9], 6);
console.log("---------------------");
insertNumber([3, "hello", 1, NaN, 4, null], 2);
console.log("---------------------");
insertNumber([], 5);
console.log("---------------------");
insertNumber([-1, 10, -5, "abc"], -3);
console.log("---------------------");
insertNumber([5, 2, 8], NaN);
console.log("---------------------");

/**
 * * Kết quả mong muốn
insertNumber([1, 3, 5, 7, 9], 6);
// Output: [1, 3, 5, 6, 7, 9]

insertNumber([3, "hello", 1, NaN, 4, null], 2);
// Output: [1, 2, 3, 4]

insertNumber([], 5);
// Output: [5]

insertNumber([-1, 10, -5, "abc"], -3);
// Output: [-5, -3, -1, 10]

insertNumber([5, 2, 8], NaN);
// Output: [2, 5, 8]
 */
