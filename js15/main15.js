function* idGenerator() {
    let i = 1;
    while (true) {
        yield i++;
    }
}
const id = idGenerator();
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);