const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// events
// document.querySelector("#btnTry").addEventListener("click", handleClick)
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)

// callbacks
function handleTryClick(event) {
    event.preventDefault()

    const input = document.querySelector("#inputNumber")
    console.log(`handleClick called, gen=${randomNumber}`)
    console.log(input.value)

    if (Number(input.value) == randomNumber) {   
        screen1.classList.add("hide")
        screen2.classList.remove("hide")

        screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas!`

        console.log(`correct in ${xAttempts} atempts`)
    } 
    xAttempts++
    input.value = ""
}

function handleResetClick(event) {
    console.log('handleReset called')
}
