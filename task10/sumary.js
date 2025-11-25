function sumary() {
  const objSumary = {
    sum: 0,
    mean: null,
    median: null,
    medianDetail: null,
  };

  let length = arguments.length;
  let numbers = [];
  console.log(arguments);

  for (let i = 0; i < length; i++) {
    let number = +arguments[i];
    if (!Number.isNaN(number)) {
      objSumary.sum += number;
      numbers.push(number);
    }
  }
  console.log("tổng: " + objSumary.sum);

  if (numbers.length === 0) {
    return objSumary;
  }

  objSumary.mean = objSumary.sum / length;
  console.log("trung bình cộng: " + objSumary.mean);
  let validLength = numbers.length;

  // *buble sort
  for (let i = 0; i < validLength - 1; i++) {
    for (let j = 0; j < validLength - 1 - i; j++) {
      if (numbers[j] > numbers[j + 1]) {
        const temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }
  console.log(numbers);

  // *.sort()
  //   numbers.sort((a, b) => a - b);

  let tv1, tv2;
  if (validLength % 2 === 0) {
    tv1 = numbers[validLength / 2 - 1];
    tv2 = numbers[validLength / 2];
    objSumary.median = tv1;
    objSumary.medianDetail = tv2;
    // console.log(tv1, tv2);
    console.log(
      "Trung vị: " + objSumary.median + " và " + objSumary.medianDetail
    );
  } else {
    objSumary.median = numbers[(validLength - 1) / 2];
    // console.log(objSumary.median);
    console.log("Trung vị: " + objSumary.median);
  }
}
sumary(10, 3, 5, 19, 20, 90, 21, 80, "abdc");
