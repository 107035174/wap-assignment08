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

Array.prototype.sort = function () {
    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if (this[i] > this[j]) {
                // Swap elements
                const temp = this[i];
                this[i] = this[j];
                this[j] = temp;
            }
        }
    }
};

let students = [
    Object.create(new Student("John", "Paul", [83, 80])),
    Object.create(new Student("Harry", "Potter", [85, 80]))];
students[0].inputNewGrade(86);
students[1].inputNewGrade(90);
students[0].grades.sort();
students[1].grades.sort();
console.log(students[0].grades, students[1].grades)