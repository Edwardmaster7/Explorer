/*
    Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

    - nome;
    - nota da primeira prova;
    - nota da segunda prova.

    Depois de criada a lista:

    - [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
    - [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

    O resultado final desse desafio deve ser algo em torno de:

*/

// create an object Student

class Student {
    name
    gradeExam1
    gradeExam2
    mean
    passed

    Student(name, gradeExam1, gradeExam2) {
        this.name = name
        this.gradeExam1 = gradeExam1
        this.gradeExam2 = gradeExam2
    }
}

// student.Student('Eduardo', 9.0, 10)
// student.name = 'Eduardo'
// student.gradeExam1 = 9.0
// student.gradeExam2 = 10.0
// console.log(student)

let students = []

function setStudent(student, index) {
    let name = prompt(`Give the name of the student ${index}: `)
    let grade1 = Number(prompt(`Give the exam 1 grade for the student ${index}: `))
    let grade2 = Number(prompt(`Give the exam 2 grade for the student ${index}: `))

    student.Student(name, grade1, grade2)

    return student
}

// create a function gradeMean
function gradeMean(student) {
    student.mean = (Number(student.gradeExam1) + Number(student.gradeExam2))/2
}

// create a function to measure if the student passed or not, and return via alert message
function getStudentReport(student) {

    if  (student.passed === true)
        alert(`A média do(a) aluno(a) ${student.name} é: ${student.mean}.\nParabéns, ${student.name}! Você foi aprovado(a) no concurso!`)
    else
        alert(`A média do(a) aluno(a) ${student.name} é: ${student.mean}.\nNão foi dessa vez, ${student.name}! Não desista!`)
}

let stop = false

do {
    let value = Number(prompt("Bem-vindo ao Concurso!\nInforme a quantidade de alunos: "))
    for (let i = 0; i < value; i++) {
        student = new Student()
        students[i] = setStudent(student, (i + 1)) 
    
        gradeMean(students[i])
        students[i].passed = (students[i].mean >= 7 ? true : false)
        console.log(students[i])
    }
    
    for (i = 0; i < students.length; i++) {
        getStudentReport(students[i])
    }
    stop = ((prompt("Deseja executar o programa novamente? (0 = sim, 1 = não)") == 0 ? true : false))
    students = []
} while (stop !== false)
