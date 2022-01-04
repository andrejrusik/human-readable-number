module.exports = function toReadable(number) {
    let getResult = (result) =>
    result.substring(0, 1) === " "
      ? result.substring(1, result.length)
      : result;
  // function getResult(result) {
  //   if (result.substring(0, 1) === " ") {
  //     return result.substring(1, result.length); //! refactor
  //   }
  //   return result;
  // }

  let result = "";
  let strNum = number.toString();
  let arrNum = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let arrDec = [
    "ten",
    "eleven",
    "twe",
    "thir",
    "for",
    "fif",
    "six",
    "seven",
    "eigh",
    "nine",
  ];
  if (+number === 0) {
    return getResult("zero");
  }
  for (let i = 0; i < strNum.length; ) {
    if (strNum.length === 3) {
      result += `${arrNum[strNum[i] - 1]} hundred`;
    } else if (strNum.length === 2) {
      if (+strNum[i] !== 0) {
        switch (+strNum) {
          case 10:
          case 11:
            result += ` ${arrDec[strNum.substring(strNum.length - 1)]}`;
            return getResult(result);
          case 12:
            result += ` ${arrDec[strNum.substring(strNum.length - 1)]}lve`;
            return getResult(result);
          case 14:
            console.log(arrNum[strNum.substring(strNum.length - 1) - 1]);
            result += ` ${
              arrNum[strNum.substring(strNum.length - 1) - 1]
            }teen`;
            return getResult(result);
        }
        if (+strNum >= 13 && +strNum < 20) {
          result += ` ${arrDec[strNum.substring(strNum.length - 1)]}teen`;
          return getResult(result);
        } else if (+strNum >= 20 && +strNum < 30) {
          result += ` ${arrDec[strNum.substring(0, 1)]}nty`;
        } else {
          result += ` ${arrDec[strNum.substring(0, 1)]}ty`;
        }
      }
    } else if (strNum.length === 1) {
      if (+strNum > 0) {
        result += ` ${arrNum[strNum[i] - 1]}`;
        return getResult(result);
      } else {
        return getResult(result);
      }
    }
    strNum = strNum.substring(1);
  }
};
