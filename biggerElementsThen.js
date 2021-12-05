"use strict";

const biggerElementsThen = function (arr, num) {
  const finalArr = arr.filter(function (secondNum) {
    return secondNum > num;
  });
  if (finalArr.length > 0) {
    return finalArr;
  } else {
    return "There is no such value.";
  }
};

console.log(biggerElementsThen([10, 25, 16, -5, 30, 15, 24], 16));
