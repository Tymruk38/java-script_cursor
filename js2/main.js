// let N = parseInt(prompt("Hi, enter a number N"));
// console.log(N);

// let M = parseInt(prompt("Hi, enter a number M"));
// console.log(M);

// let evenNumbers = confirm("Skip even numbers? ");
// console.log(evenNumbers);

// let sum = 0;

// for (let i = N; i <= M; i++){
//     if (evenNumbers && !(i % 2)) {
//         continue;
//     }
//     sum += i;
// }
// alert(`Result: ${sum}`);
let n;

do {
    n = parseInt(prompt("Hi, enter a number N"));
} while (Number.isNaN(n));

console.log(n);

let m = parseInt(prompt("Hi, enter a number M"));
do {
    m = parseInt(prompt("Hi, enter a number M"));
} while (Number.isNaN(m));

console.log(m);

let evenNumbers = confirm("Skip even numbers? ");
console.log(evenNumbers);

let sum = 0;

for (let i = n; i <= m; i++) {
    if (evenNumbers && !(i % 2)) {
        continue;
    }
    sum += i;
}
alert(`Result: ${sum}`);