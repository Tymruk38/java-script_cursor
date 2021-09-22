let applePrice = 15.678;
let lemonPrice = 123.965;
let orangePrice = 90.2345;

// Завдання 1
console.log(Math.max(applePrice, lemonPrice, orangePrice));

// Завдання 2
console.log(Math.min(applePrice, lemonPrice, orangePrice));

// Завдання 3
let allSumGoods = applePrice + lemonPrice + orangePrice;
console.log(allSumGoods);

// Завдання 4
console.log(Math.floor(Math.trunc(applePrice) + Math.trunc(lemonPrice) + Math.trunc(orangePrice)));

// Завдання 5
console.log(Math.round(allSumGoods / 100) * 100);

console.log(Math.round(Math.floor(allSumGoods) % 2 === 0));

// Завдання 7
let sum = 500;
console.log(sum - allSumGoods);

// Завдання 8
const averagePrice = allSumGoods / 3;
console.log(Math.round(averagePrice * 100) / 100);

// Завдання 9
let randomSale = Math.floor(Math.random() * 100);
console.log(randomSale);
console.log(Math.round((allSumGoods / 2 - (allSumGoods * randomSale) / 100) * 100) / 100);
