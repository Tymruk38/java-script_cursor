let N = parseInt(prompt("Hi, enter a number N"));
console.log(N);

let M = parseInt(prompt("Hi, enter a number M"));
console.log(M);

let evenNumbers = confirm("Skip even numbers? ");
console.log(evenNumbers);

let sum = 0;

for (let i = N; i <= M; i++){
    if (evenNumbers && !(i % 2)) {
        continue;
    }
    sum += i;
}
alert(`Result: ${sum}`);

  
// let N = parseInt(prompt('Enter the number N:'));

// let M = parseInt(prompt('Enter the number M:'));

// let skipEvenNumber = confirm('Should I skip even numbers?');

// let result = 0;

// for (let i = N; i <= M; i++) {
//     if (skipEvenNumber && !(i % 2)) {
//         continue;
//     }
//     result += i;
// }

// alert(`Result: ${result}`);