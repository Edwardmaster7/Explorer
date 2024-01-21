console.log('Aula sobre funções')

//Criar um aplicativo de frases motivacionais

// function statement
function createFrases() {
    console. log('Estudar é muito bom')
    console.log('Paciência e persistência')
    console. log('Revisão é mãe do aprendizado')
}

// call / invoke
createFrases();

console.log('Fim do programa')

// function anonymous

const sum = function(a, b) { //parameters
    // console.log(a + b)
    return total = a + b // DO NOT USE VARIABLE WITHOUT DECLARATION
}

let num1 = 34
let num2 = 25

console.log(`o número 1 é ${num1}`)
console.log(`o número 2 é ${num2}`)
console.log(`a soma é ${sum(num1, num2)}`)
console.log(total) // variable still exists after computation

// function hoisting

sayMyname()

function sayMyname() {
    console.log('Mayk')
}

// arrow function

const sayMyName = (name) => {
    console.log(name)
}

sayMyName('Eduardo')

// callback function

function sayMyName(name) {
    // console.log(name)
    name()
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)
// callback function

function sayMyName(name) {
    // console.log(name)
    name()
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)