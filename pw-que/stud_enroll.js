//A Create a student enrollment system using *avaScript classes. Implement two classes, Student and Admission, to manage student enrollments, course admission, and enrollment tracking. The Student class should have methods for enrolling in courses and displaying enrolled courses, while the Admission class should handle student enrollments, course admission, and the display of enrolled students. Your task is to implement these classes with clear and organized code, adhering to the specified reBuirements provided.

class Student {
    constructor(name,email){
        this.name = name
        this.email = email
        this.courses = []
    }

    enroll(course){
        this.courses.push(course);
        console.log(`${this.name} has Enrolled in ${course}`);
    }
    showcourse(){
        console.log(`${this.name} Enrolled Courses : ${this.courses.join(', ')}`)
    }
}

class Admission{
    constructor(){
        this.students = []
    }

    enrollStudent(student){
        this.students.push(student);
        console.log(`${student.name} has been enrolled`)
    }
    assignCourse(student, course){
        if(student instanceof Student && student.email && course){
            student.enroll(course);
        }else{
            console.log("Invalid student or Course information")
        }
    }

    showEnrolledStud(){
        console.log("Enrolled students :");
        this.students.forEach(student => {
            console.log(`- ${student.name} (${student.email})`);
        });
    }
}

const admissionOffice = new Admission();
const student1 = new Student('Ashish','ashishbale@gmail');
const student2 = new Student('Rebel' , 'rebel@gmail')

admissionOffice.enrollStudent(student1);
admissionOffice.enrollStudent(student2);
admissionOffice.assignCourse(student1, 'Full Stack Web Developer');
admissionOffice.assignCourse(student2 ,'Data Science');

student1.showcourse();
student2.showcourse();
admissionOffice.showEnrolledStud();