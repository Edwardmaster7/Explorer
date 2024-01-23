/*
    prototype
    * prototype-based language
    * prototype chain
    * _proto_
*/

/*
    typecasting vs typecoersion 
    * Alteração de um tipo de dado para outro
*/
console.log(typeof('9' + 5))
console.log('9' + 5)

console.log(Number('9') + 5)
console.log(typeof(Number('9') + 5))

// Manipulando strings e números

//Transformar String <=> Número

let string  = "123"
console.log(Number(string))

let number = 321
console.log(String(number))

// Contar quantos caracteres tem uma palavra / dígitos em um número

let word = "Paralelepípedo"
console.log(word)
console.log(word.length)

number = 1234 // number não tem length
console.log(String(number).length)


// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
number = 435312345.33452345
console.log(number.toFixed())
console.log(number.toFixed(2))
console.log(number.toFixed(2).replace(".",",")) 
console.log(Number(number.toFixed(2).replace(".",","))) // não existe Number com vírgula

// Transformar letras minúsculas <=> maiúsculas
word = "Programar é muito bacana."
console.log(word.toUpperCase())
console.log(word.toUpperCase().toLowerCase())


// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. 
// Depois disso, transforme o array em um texto e onde eram espaços, coloque _

let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
console.log(myArray)

let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)

// Verificar se o texto contém a palavra Amor

console.log(phrase.includes("Amor")) // true
console.log(phrase.includes("amor")) // false

// Manipulando Arrays

// Criar Array com construtor
myArray = new Array(1,2,3)
console.log(myArray)

// Contar elementos de um array
console.log(["a", 
        {type:"array"}, 
        function() { return "alô"}
    ][1])

console.log(["a", 
        {type:"array"}, 
        function() { return "alô"}
    ][2])

console.log(["a", 
    {type:"array"}, 
    function() { return "alô"}
][2])

console.log(["a", 
    {type:"array"}, 
    function() { return ("alô brasil").split(" ")}
].length)

// Transformar uma cadeia de caracteres em elementos de um array

word = "manipulation"
console.log(Array.from(word))

let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("nodejs")
// adicionar no começo
techs.unshift("nodejs")
// remover do fim
techs.pop()
// remover do começo
techs.shift()
// pegar somente alguns elementos do array
techs.slice(1, 3)
// remover 1 ou mais items em qualquer posição do array
techs.splice(1, 1)
// encontrar a posição de um elemento no array
let index = techs.indexOf('css')
techs.splice(index, 1)

console.log(index)