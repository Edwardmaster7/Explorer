/* Expressões e Operadores
- Expressions
- Operators
Binary
Unary
Ternary
*/

let number = 1

console.log(++number)
console.log(--number)

console.log(true ? 'alo' : nada)

let one = 1
let two = 2
// === estritamente igual a 
// !== estritamente diferente de
console.log(one === "1") // false
console.log(one === 1) // true

// comparação simples
console.log(two == "2") // true
console.log(two == 2) // true

// condition ? value 1 : value 2
// condition então value 1 senão value 2
let pao = true
let queijo = true
const niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim'

console.log(niceBreakfast)

// concatenando e atribuindo
let alpha = 'alpha'
alpha += 'bet'
console.log(alpha)

/*
FALSY
Quando um valor é considerado false em contextos onde um booleano é obrigatório ( condicionais e loops )
false
0
-0
null
undefined
NaN
*/

console.log( true ? 'verdadeiro' : 'falso' )
console.log( 0 ? 'verdadeiro' : 'falso' )
console.log( -0 ? 'verdadeiro' : 'falso' )
console.log( "" ? 'verdadeiro' : 'falso' )

/*
TRUTHY
Quando um valor é considerado true em contextos onde um booleano é obrigatório ( condicionais e loops )
true
{}
[]
1
3.23
"0" "false"
-1
Infinity
-Infinity
*/

/*
// De cima para baixo, do mais importante ao menos importante.

* grouping                      ( )
* negação e incremento          ! ++ --
* multiplicação e divisão       * /
* adição e subtração            + -
* relacional                    < <= > >=
* igualdade                     == != === !==
* AND                           && 
* OR                            ||
* condicional                   ?:
* assignment (atribuição)       = += -= *= %= 
*/

function sayMyName(name = '') {
    if (name === '') {
        throw new Error('Nome é obrigatório')
    }

    console.log(name)
}

try {
    sayMyName()
} catch (e) {
    console.log(e)
}