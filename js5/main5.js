// Функція 1

const getRandomArray = (length, min, max) => {
  let randomArray = [];
  for (let i = 0; i < length; i++) {
    randomArray.push(Math.floor(Math.random() * (max - min) + min));
  }
  return randomArray;
};
console.log(getRandomArray(20, 12, 58));

//  Функція 3
const getAverage = (...numbers) =>
  numbers
    .filter((number) => Number.isInteger(number))
    .reduce((sum, number) => (sum + number) / numbers.length);

console.log(getAverage(10, 23, 55, 67, 89, 12, 45, 90));

// Функція 5
const filterEvenNumbers = (...numbers) =>
  numbers.filter((number) => number % 2 !== 0);

console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Функція 6
const countPositiveNumbers = (...numbers) => {
  let sumNumber = numbers.reduce((result, number) => {
    if (number > 0) {
      result++;
    }
    return result;
  }, 0);
  return sumNumber;
};

console.log(countPositiveNumbers(1, -2, 3, 6, 0, 8, 9));

// Функція 7
const getDividedByFive = (...numbers) =>
  numbers.filter((number) => number % 5 === 0);

console.log(
  getDividedByFive(
    6,
    2,
    55,
    11,
    78,
    2,
    55,
    77,
    57,
    87,
    23,
    2,
    56,
    3,
    2,
    100,
    25
  )
);

// Функція 7
const replaceBadWords = (string) => {
  const badWord = ["shit", "fuck"];
  let badString = string;

  for (let word of badWord) {
    let length = word.length;
    let starHide = "*".repeat(length);
    if (string.toLowerCase().includes(word)) {
      badString = badString.toLowerCase().replaceAll(word.toLowerCase(), starHide);
    }
    badString = badString[0].toUpperCase() + badString.slice(1);
  }
  return badString;
};

const getReplaceBadWords = replaceBadWords("Are you fucking  kidding?");
console.log(getReplaceBadWords);
