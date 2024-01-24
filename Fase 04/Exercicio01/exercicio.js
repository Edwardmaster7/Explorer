// create template prompts

// let templatePrompt1 = 'CALCULATOR:\nEnter the first value:'
// let templatePrompt2 = 'Operation: (+, -, *, / or %)'
// let templatePrompt3 = 'Enter the second value:'

let templatePrompt = {
    firstValue: 'CALCULATOR:\nEnter the first value:',
    operation: 'Operation: (+, -, *, / or %)',
    secondValue: 'Enter the second value:',
    newCalculation: 'Want to calculate more? (0 = yes, 1 = false)'
}

let num1 = 0
let op = ""
let num2 = 0
let result = 0
let newCalc = true75

do {
    num1 = Number(prompt(templatePrompt.firstValue))
    op = prompt(templatePrompt.operation)
    num2 = Number(prompt(templatePrompt.secondValue))

    alert(`${num1} ${op} ${num2} = ${calculator(num1, num2, op)}`)
    newCalc = (prompt(templatePrompt.newCalculation) == '0' ? true : false)
    console.log(newCalc)
} while (newCalc != false)


// let sum = num1 + num2
// let sub = num1 - num2
// let mult = num1 * num2
// let div = (num1 / num2).toFixed(2)
// let remainder = num1 % num2


//alert(`Sum: ${sum}\nSub: ${sub}\nMult: ${mult}\nDiv: ${div}\nRemainder: ${remainder}`)
// console.log(num1 + num2)
// console.log(num2 - num1)
// console.log(num2 * num2)
// console.log(num1 / num2)
// console.log(num1 % num2)

function calculator(num1, num2, op) {
    // create switch statement for operations
    switch (op) {
        case '+':
            result = num1 + num2
            break
        case '-':
            result = num1 - num2
            break
        case '*':
            result = num1 * num2
            break
        case '/':
            result = (num1 / num2).toFixed(2)
            break
        case '%':
            result = num1 % num2
            break
        default: 
            result = "INVALID OPERAND"
            break
    }
    return result
}