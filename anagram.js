"use strict";
const anagram = function (str, arr) {
  let strArr = str.split("").sort().join("");
  let finalStr;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].split("").sort().join("") === strArr) {
      finalStr = `${arr[i]} is an anagram of ${str}`;
      return finalStr;
    }
  }
};
console.log(anagram("listen", ["enlists", "google", "inlets", "banana"]));
