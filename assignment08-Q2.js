function Student(firstName, lastName, grades) {
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grades = grades;
    }
}


Student.prototype.inputNewGrade = function (newGrade) {
    this.grades.push(newGrade);
}

Student.prototype.computeAverageGrade = function () {
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

let students = [
    Object.create(new Student("John", "Paul", [80, 83])),
    Object.create(new Student("Harry", "Potter", [80, 85]))];
students[0].inputNewGrade(86);
students[1].inputNewGrade(90);
console.log(
    students[0].computeAverageGrade(),
    students[1].computeAverageGrade());