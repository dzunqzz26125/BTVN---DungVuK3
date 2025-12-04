/**
Bài 4 – Tìm giá trị lớn nhất, nhỏ nhất và trung bình cộng các số nguyên tố (2.5d)
Mô tả: Cho mảng số nguyên bất kỳ, hãy viết hàm findMinMaxAverage(arr) để tìm:

Số lớn nhất và vị trí của nó (lấy vị trí đầu tiên nếu có nhiều giá trị bằng nhau).
Số nhỏ nhất và vị trí của nó (lấy vị trí đầu tiên nếu có nhiều giá trị bằng nhau).
Trung bình cộng của các số nguyên tố trong mảng. Nếu không có số nguyên tố nào, trả về null.
Mẫu hàm:

function findMinMaxAverage(arr) {
  // Xử lý và trả về kết quả
}
Ví dụ:

findMinMaxAverage([3, 1, 4, 1, 5, 9, 2, 6]);  
// {max: 9, maxIndex: 5, min: 1, minIndex: 1, primeAverage: 3.33 }

findMinMaxAverage([5, 5, 2, 2, 1]);  
// {max: 5, maxIndex: 0, min: 1, minIndex: 4, primeAverage: 3.5 }

findMinMaxAverage([-3, 7, -8, 11, 0]);  
// {max: 11, maxIndex: 3, min: -8, minIndex: 2, primeAverage: 9 }
 */

function findMinMaxAverage(arr) {
  const max = Math.max(...arr);
  const maxIndex = arr.findIndex((value) => value === max);
  const min = Math.min(...arr);
  const minIndex = arr.findIndex((value) => value === min);
  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  let sum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      sum += arr[i];
      count++;
    }
  }
  let primeAverage = count > 0 ? sum / count : null;

  // * reduce
  // const primeAverage =
  //   primes.length > 0
  //*     ? primes.reduce((sum, num) => sum + num) / primes.length
  //     : null;
  return { max, maxIndex, min, minIndex, primeAverage };
}
console.log(findMinMaxAverage([3, 1, 4, 1, 5, 9, 2, 6]));
// {max: 9, maxIndex: 5, min: 1, minIndex: 1, primeAverage: 3.33 }

findMinMaxAverage([5, 5, 2, 2, 1]);
// {max: 5, maxIndex: 0, min: 1, minIndex: 4, primeAverage: 3.5 }

findMinMaxAverage([-3, 7, -8, 11, 0]);
// {max: 11, maxIndex: 3, min: -8, minIndex: 2, primeAverage: 9 }
