let applePrice = 15.678;
let lemonPrice = 123.965;
let orangePrice = 90.2345;

// Завдання 1
console.log (Math.max(applePrice, lemonPrice, orangePrice));

// Завдання 2
console.log (Math.min(applePrice, lemonPrice, orangePrice));

// Завдання 3
let allSumGoods = applePrice + lemonPrice + orangePrice;
console.log(allSumGoods);

// Завдання 4
console.log(Math.floor(Math.trunc(applePrice) + Math.trunc(lemonPrice) + Math.trunc(orangePrice)));

// Завдання 5
console.log(Math.round(allSumGoods));

// Завдання 7
let sum = 500;
console.log(sum - allSumGoods);

// Завдання 8
console.log(+((allSumGoods / 3).toFixed(2)));

// Завдання 9
let randomSale = Math.trunc(Math.random() * 100);
// amountToPay = випадкова сума до оплати
let amountToPay = 500; 
let sale = (+((amountToPay * randomSale) / 100).toFixed(2));
let profit = (amountToPay / 2) - sale;
console.log(profit)
