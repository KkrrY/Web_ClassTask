
let user = { //Object (creating USER object 2.3.1)
    name: '',
    surname: ''

};

let student = new Object( {//Object (new Object to make a possibility to extend it)(creating STUDENT object 2.3.2)
    specialization: '',
    group: '',
    __proto__: user //prototype objects inheritance
});

    student.addData = function (specialization, group) { //object method 2.3.2
        this.specialization = specialization;
        this.group = group;
    };
    student.editData = function (specialization, group) { //object method 2.3.2
        this.specialization = specialization;
        this.group = group;
        alert("Student: " + student.name + "'s Data was changed");
        console.log("Student: " + student.name + "'s Data was changed");
    };
    student.removeData = function () { //object method 2.3.2
        this.specialization = '';
        this.group = '';
    };

function copyObjectProps (objToCopy) {
    return Object.assign({}, objToCopy); //copy using object.assign() method 2.3.3
}

//All JavaScript objects inherit properties and methods from a prototype.
Object.prototype.showData = function () { //ShowData method 2.3.4
    alert("Student specialization is: " + student.specialization);
    alert("Student group is: " + student.group);
    console.log("Student specialization is: " + student.specialization);
    console.log("Student group is: " +student.group);
}

let academicPerformance = { //deprecated version
    test: 'JS test',
    attempt: 'attempt1',
    grades: [2,4,5],
    __proto__: student, //inheriting from student 2.3.5
    showData() {//overriding showData method 2.3.5
        alert("Student specialization is: " + academicPerformance.specialization);
        alert("Student group is: " + academicPerformance.group);
        console.log("Student specialization is: " + academicPerformance.specialization);
        console.log("Student group is: " +academicPerformance.group);
        academicPerformance.calculateAverageMark();
    }
}

academicPerformance.calculateAverageMark = function (){
    let allGrades = 0;
    for (let i = 0; i < academicPerformance.grades.length; i++) {
        allGrades += academicPerformance.grades[i];
    }
    let avg = allGrades/academicPerformance.grades.length;
    alert("Average " + academicPerformance.name +"'s grade for the test is: " + avg);
    console.log("Average " + academicPerformance.name +"'s grade for the test is: " + avg);
}

// 2.3.6

class Student {
    _name;
    _surname;
    _specialization;
    _group;
    get name () { //JS getters
        return this._name;
    }
    set name (name) {
        this._name = name;
    }
    get surname () {
        return this._surname;
    }
    set surname (surname) {
        this._surname = surname;
    }
    get specialization() {
        return this._specialization;
    }

    set specialization(value) {
        this._specialization = value;
    }

    get group() {
        return this._group;
    }

    set group(value) {
        this._group = value;
    }


    addData (specialization, group) {
        this._specialization = specialization;
        this._group = group;
    }
    editData (specialization, group) {
        this._specialization = specialization;
        this._group = group;
        alert("Student: " + this.name + "'s Data was changed");
        console.log("Student: " + this.name + "'s Data was changed");
    };
    removeData () {
        this.specialization = '';
        this.group = '';
    };

    showData () {
        alert("Student specialization is: " + this.specialization);
        alert("Student group is: " + this.group);
        console.log("Student specialization is: " + this.specialization);
        console.log("Student group is: " + this.group);
    }
}
class AcademicPerformance extends Student{
    test = 'JS test';
    attempt = "Attempt1";
    grades = [3,5,6];

    showData() {
        alert("Student specialization is: " + this.specialization);
        alert("Student group is: " + this.group);
        console.log("Student specialization is: " + this.specialization);
        console.log("Student group is: " +this.group);
        this.calculateAverageMark();
    }

    calculateAverageMark () {
        let allGrades = 0;
        for (let i = 0; i < this.grades.length; i++) {
            allGrades += this.grades[i];
        }
        let avg = allGrades / this.grades.length;
        alert("Average " + this.name + "'s grade for the test is: " + avg);
        console.log("Average " + this.name + "'s grade for the test is: " + avg);
    }
}

//2.3.7

student.name = "Joey";
alert("Info about " + student.name);
student.addData("programmer", "LR-12");
student.surname = "Drew";
student.editData("artist", "FT-13");
student.showData();

academicPerformance.name = "Andrew";
alert("Info about " + academicPerformance.name);
academicPerformance.addData("programmer2", "LR-13");
academicPerformance.surname = "Johnson";
academicPerformance.showData();

student1 = new Student();
student1.name = "Alan";
alert("Info about " + student1.name);
student1.surname = "Walker";
student1.addData("musician", "ML-11");
student1.editData("musician", "ML-15");
student1.showData();

student2 = new AcademicPerformance();
student2.name = "Jack";
alert("Info about " + student2.name);
student2.surname = "Jackson";
student2.addData("designer", "DR-21");
student2.showData();

