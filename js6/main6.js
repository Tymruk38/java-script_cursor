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
    const subjectn = (
      key.substring(0, 1).toUpperCase() + key.substring(1).toLowerCase()
    ).replace("_", " ");
    subjects.push(subjectn);
  }
  return subjects;
};

console.log(getSubjects(students[0].subjects));

// Функція 2
const getAverageMark = (students) => {
  const markSubject = Object.values(students.subjects);
  const allMarkSubject = markSubject[0].concat(markSubject[1], markSubject[2]);
  const averageMark = allMarkSubject.reduce((n1, n2) => n1 + n2);
  return +(averageMark / allMarkSubject.length).toFixed(2);
};
console.log(getAverageMark(students[1]));

// Функція 3

const getStudentInfo = (students) => {
  const studentInfo = {
    course: students.course,
    name: students.name,
    averageMark: getAverageMark(students),
  };
  return studentInfo;
};
console.log(getStudentInfo(students[1]));

// Функція 4
const getStudentsNames = (studentsNames) => {
  const name = students
    .map((item) => item.name)
    .sort((a, b) => {
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0;
    });
  return name;
};
console.log(getStudentsNames(students));

// Функція 5

const getBestStudent = (students) => {
  let bestStudent = students.reduce((a, b) =>
    getAverageMark(a) > getAverageMark(b) ? a : b
  ).name;
  return bestStudent;
};
console.log(getBestStudent(students));

// Функція 6

const calculateWordLetters = (word) => {
  const lowerCaseLetters = word.toLowerCase().split("");
  const objWord = {};

  lowerCaseLetters.map((letter) =>
    !objWord[letter] ? (objWord[letter] = 1) : objWord[letter]++
  );

  return objWord;
};

console.log(calculateWordLetters("курсор"));
