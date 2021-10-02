// Функція №1
const getMaxDigit = (number) => {
  if (number === 0) {
    return 0;
  } else {
    return Math.floor(Math.max(number % 10, getMaxDigit(number / 10)));
  }
};

// Функція 2

const getPow = (a, b) => {
  let result = a;
  for (let i = 1; i <= b; i++) {
    result *= a;
  }
  return result;
};

// Функція 3

const capitalFirstLetter = (str) =>
  str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();

// Функція 4

const getPureSum = (sum) => {
  let tax = (18 + 1.5) / 100;
  if (sum === 0) {
    return 0;
  }
  return sum - sum * tax;
};

// Функція 5

const getRandomNumber = (n, m) => Math.floor(Math.random() * (m - n + 1)) + n;

console.log(getRandomNumber(10, 6));

// Функція 6
const countLetter = (letter, str) => {
  const newLetter = letter.toLowerCase();
  const newStr = str.toLowerCase();
  let sum = 0;

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === newLetter) {
      sum += 1;
    }
  }

  return sum;
};

// Функція 7

const convertCurrency = (exchangeMoney) => {
  if (exchangeMoney.toUpperCase().includes("UAH")) {
    return (parseInt(exchangeMoney) / 25).toFixed(2) + "$";
  } else if (exchangeMoney.includes("$")) {
    return (parseInt(exchangeMoney) * 25).toFixed(2) + "UAH";
  }
};
console.log(convertCurrency("1250$"));

//  Функція 8
const getRandomPassword = (number = 8) => {
  let result = "";
  for (let i = 0; i <= number; i++) {
    result += Math.round(Math.random() * 10);
  }
  return result;
};

// Функція 9

const deleteLetters = (letter, str) => str.replaceAll(letter, "");

// Функція 11

const deleteDuplicateLetter = (string) => {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (
      string.toLowerCase().replaceAll(string[i], "").length ===
      string.length - 1
    ) {
      result += string[i];
    }
  }
  return result;
};

document.writeln(`
  Функція 1: ${getMaxDigit(14597)}<br>
  Функція 2: ${getPow(7, 4)}<br>
  Функція 3: ${capitalFirstLetter("cursor")}<br>
  Функція 4: ${getPureSum(10000)}<br>
  Функція 5: ${getRandomNumber(4, 10)} <br>
  Функція 6: ${countLetter("а", "Асталавіста")}<br>
  Функція 7: ${convertCurrency("1250$")}<br>
  Функція 8: ${getRandomPassword(7)}<br>
  Функція 9: ${deleteLetters("a", "blablabla")}<br>
  Функція 11: ${deleteDuplicateLetter(
    "Курсор команда професіоналів в іт навчанні"
  )}</b>
`);
