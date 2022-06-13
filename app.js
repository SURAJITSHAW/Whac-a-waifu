const squares = document.querySelectorAll('.grid .square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null

function randomSquare() {
    squares.forEach( (square) => {
        square.classList.remove('mole')
    })

    let randomSquarePosition = squares[Math.floor(Math.random() * 9)]
    randomSquarePosition.classList.add('mole')

    hitPosition = randomSquarePosition.id
}

squares.forEach( square => {
    square.addEventListener('click', () => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

function moveMole() {
    
    timerId = setInterval(randomSquare, 500)
}

moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent=currentTime

    if (currentTime==0) {
        clearInterval(counterTimerId)
        clearInterval(timerId)
        alert('GAME OVER!!! Your final score is ' + result)
    }
}

let counterTimerId = setInterval(countDown, 1000)

