const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const body = document.querySelector("body")


const inputNumber = document.querySelector("#inputNumber")

let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 0

//events
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", resetGame)
body.addEventListener("keydown", playButton)


// functions callbacks
function handleTryClick(event) {

    event.preventDefault()

    if (Number(inputNumber.value) == randomNumber) {
        screen1.classList.add("hide")
        screen2.classList.remove("hide")
    }

    
    if (inputNumber.value != "") {
        xAttempts++
    }
    
    document.querySelector(".screen2 h2").innerText = `Você adivinhou em ${xAttempts} tentativas`
    
    inputNumber.value = ""

}

function resetGame() {
    screen1.classList.remove("hide")
    screen2.classList.add("hide")

    randomNumber = Math.round(Math.random() * 10)

    xAttempts = 0

}

function playButton (e) {
    console.log(e.key)
    if (e.key == 'Enter' && screen1.classList.contains('hide')) {
        resetGame()
    }
}


