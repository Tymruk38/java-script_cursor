const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
console.log(students);

const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
console.log(themes);

const marks = [4, 5, 5, 3, 4, 5];
console.log(marks);

// 1 Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];
const getPairs = (students) => {
  const pairs = [];
  pairs.push([students[0]].concat(students[2]));
  pairs.push([students[1]].concat(students[3]));
  pairs.push([students[4]].concat(students[5]));
  return pairs;
};
const pairs = getPairs(students);
console.log(pairs);
// document.writeln(`1. ${pairs}`)

// 2 Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]

const getPairsAndThems = (pairs, themes) => {
  const arrPairs = pairs.map((pair) => pair.join(" і "));
  const pairsAndTemes = arrPairs.map((pair, i) => [pair, themes[i]]);

  return pairsAndTemes;
};

const pairsAndThems = getPairsAndThems(pairs, themes);
console.log(pairsAndThems);
//   document.writeln(`2. ${pairsAndThems}`)

//   3. Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]

const getStudentMark = (students, marks) =>
  students.map((student, i) => [student, marks[i]]);
const studentMark = getStudentMark(students, marks);
console.log(getStudentMark(students, marks));

// 4. Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив): [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]
const getPairsAndRandom = (pairs) =>
  pairs.map((pair, i) => [...pairs[i], Math.floor(Math.random() * 5 + 0.9)]);

console.log(getPairsAndRandom(pairs));
const pairsRandom = getPairsAndRandom(pairs);

document.writeln(`1. ${pairs}<br>
2. ${pairsAndThems}<br>
3. ${studentMark} <br>
4. ${pairsRandom}`);
