"use strict";

const removeFromAString = function (mainStr, secondStr) {
  const finalStr = mainStr.replaceAll(secondStr, "");
  return finalStr;
};

console.log(removeFromAString("This is some text.", "is"));
