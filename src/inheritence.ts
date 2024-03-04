class SchoolMember {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  public getName() {
    return this.name;
  }
  public getAge() {
    return this.age;
  }
}
class Student extends SchoolMember {
  grade: number;
  constructor(name: string, age: number, grade: number) {
    super(name, age);
    this.grade = grade;
  }
  public getGrade() {
    return this.grade;
  }
  public getStudentInfo() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

class Teacher extends SchoolMember {
  designation: string;
  constructor(name: string, age: number, designation: string) {
    super(name, age);
    this.designation = designation;
  }
  public getDesignation() {
    return this.designation;
  }
}

const teacherHamid = new Teacher("Hamid", 35, "Math Teacher");
// console.log("teacher Hamid name", teacherHamid.getName());
// console.log("teacher Hamid age", teacherHamid.getAge());
// console.log("teacher Hamid designation", teacherHamid.getDesignation());

const studentTanvir = new Student("Tanvir", 15, 10);
// console.log("tanvir", studentTanvir.getStudentInfo());