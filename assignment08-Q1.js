let student = {
    firstName: "",
    lastName: "",
    grades: [],

    inputNewGrade: function (newGrade) {
        this.grades.push(newGrade);
    },
    computeAverageGrade: function () {
        if (this.grades.length > 0) {
            let sum = 0;
            for (let i = 0; i < this.grades.length; i++) {
                sum += this.grades[i];
            }
            return sum / this.grades.length;
        }
        else {
            return "Grades are empty";
        }
    }
}

let students = [
    Object.create(student),
    Object.create(student)];
students[0].firstName = "John";
students[0].lastName = "Carter";
students[0].grades = [80, 83];
students[1].firstName = "Harry";
students[1].lastName = "Potter";
students[1].grades = [80, 85];

students[0].inputNewGrade(86);
students[1].inputNewGrade(90);
console.log(
    students[0].computeAverageGrade(),
    students[1].computeAverageGrade());