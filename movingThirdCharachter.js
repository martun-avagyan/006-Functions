"use strict";

const movingThirdCharacter = function (str) {
  let thirdCharacter;
  let finalString = "";
  for (let i = 0; i < str.length - 2; i = i + 3) {
    thirdCharacter = str[i];
    finalString += str[i + 1] + str[i + 2] + str[i];
  }
  let strDiff = str.length - finalString.length;

  if (strDiff > 0) {
    let strLeft = str.slice(finalString.length, str.length);
    finalString = finalString + strLeft;
  }
  return finalString;
};

console.log(movingThirdCharacter("dfgjkloyp"));
console.log(movingThirdCharacter("aweyoolp"));
