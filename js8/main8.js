class Student {
  marks = [5, 4, 4, 5];
  deletedMarks = [];

  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
  }
  get getInfo() {
    return `Студент ${this.course} курсу ${this.university}, ${this.fullName}`;
  }

  get getMarks() {
    return this.marks;
  }
  set setMarks(mark) {
    // this.marks = typeof mark === 'array' ? [...this.marks, ...mark] : [...this.marks, mark];
    if (this.marks !== null) {
      this.marks.push(mark);
    }
  }
  getAverageMark() {
    if (this.marks !== null && this.marks.length >= 1) {
      return +(
        this.marks.reduce((sum, mark) => sum + mark) / this.marks.length
      ).toFixed(1);
    } else {
      return 0;
    }
  }
  dismiss() {
    this.deletedMarks = this.marks;
    this.marks = null;
  }
  recover() {
    this.marks = this.deletedMarks;
  }
}

const yurii = new Student(
  "університету імені І.Франка",
  "1го",
  "Тимрук Юрій Романович"
);
// Інформація про студента
console.log(yurii.getInfo);
// Оцінка студента
yurii.setMarks = 5;
console.log(yurii.getMarks);
// Середня оцінка студента
console.log(yurii.getAverageMark());
// Відрахувати студента
yurii.dismiss();
yurii.setMarks = 5;
console.log(`${yurii.getMarks}`);
// Поновлюю студента
yurii.recover();
yurii.setMarks = 5;
console.log(`${yurii.getMarks}`);
