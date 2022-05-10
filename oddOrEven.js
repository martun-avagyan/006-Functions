"use strict";

const oddOrEven = function (arr) {
  const arrOdd = [];
  const arrEven = [];
  const finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      arrEven.push(arr[i]);
    } else {
      arrOdd.push(arr[i]);
    }
  }
  finalArr.push(arrEven, arrOdd);
  return finalArr;
};

console.log(oddOrEven([45, 12, 3, 6, 17, 0]));

// Random comment