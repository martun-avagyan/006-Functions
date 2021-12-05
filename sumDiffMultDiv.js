"use strict";

const sumDiffMultDiv = function (arr, operator) {
  let initialValue = arr[0];

  if (operator === "+") {
    for (let i = 1; i < arr.length; i++) {
      initialValue += arr[i];
    }
    return initialValue;
  } else if (operator === "-") {
    for (let i = 1; i < arr.length; i++) {
      initialValue -= arr[i];
    }
    return initialValue;
  } else if (operator === "*") {
    for (let i = 1; i < arr.length; i++) {
      initialValue *= arr[i];
    }
    return initialValue;
  } else if (operator === "/") {
    for (let i = 1; i < arr.length; i++) {
      initialValue /= arr[i];
    }
    return initialValue;
  }
  return initialValue;
};

console.log(sumDiffMultDiv([1, 2, 3, 4], "-"));
console.log(sumDiffMultDiv([1, 2, 3, 4], "+"));
console.log(sumDiffMultDiv([1, 2, 3, 4], "*"));
console.log(sumDiffMultDiv([1, 2, 3, 4], "/"));
