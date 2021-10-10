const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

// Функція 1
const getSubjects = (subject) => {
  let subjects = [];
  for (let key in subject) {
    const subjectn = (key.substring(0, 1).toUpperCase() + key.substring(1).toLowerCase()).replace("_", " ");
    subjects.push(subjectn);
  }
  return subjects;
};

// let subjects = (getSubjects(students[2].subjects));
// console.log(subjects)
console.log(getSubjects(students[0].subjects));


// const getStudentsNames = (studentsNames) =>{
//   let names = [].sort((a, b) => a - b);
//   for (let key in studentsNames){
//     const studentsName = key;
//     names.push(studentsName);
//   }
//   return names
// }
// console.log(getStudentsNames(students.name))

// const getStudentsNames = (names) => students.sort((a, b) => {
//   if (a.name > b.name) {
//     return 1;
//   }
//   if (a.name < b.name) {
//     return -1;
//   }
//   return 0;
// });
// console.log(getStudentsNames(students.name))

// Функція 4
const getStudentsNames = (studentsNames) =>{
  const name = students.map(item => item.name).sort((a, b) => {
    if (a > b) {
          return 1;
        }
        if (a < b) {
          return -1;
        }
        return 0;
  })
  return name
}
console.log(getStudentsNames(students))

