// Capturing control buttons
const buttonPlay = document.querySelector('.controls__play')
const buttonPause = document.querySelector('.controls__pause')
const buttonStop = document.querySelector('.controls__stop')
const buttonSet = document.querySelector('.controls__set')
const buttonSoundOn = document.querySelector('.sound--on')
const butttonSoundOff = document.querySelector('.sound--off')
let minutes
const minutesDisplay = document.querySelector('.timer__minutes')
const secondsDisplay = document.querySelector('.timer__seconds')

function countdown() {
  setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    // we don't want to change the original minutes, so we create the countdownMinutes inside the setTimeout
    let countdownMinutes = Number(minutesDisplay.textContent)

    secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')

    if (countdownMinutes <= 0) {
      buttonPlay.classList.remove('hide')
      buttonPause.classList.add('hide')
      buttonSet.classList.remove('hide')
      buttonStop.classList.add('hide')

      return
    }

    if (seconds <= 0) {
      seconds = 2

      minutesDisplay.textContent = String(countdownMinutes - 1).padStart(2, '0')
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')

    // Recursion making countdown work forever
    countdown()
  }, 1000)
}

buttonPlay.addEventListener('click', () => {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')

  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')

  // Where the timer actually happens (after you press play)
  countdown()
})

buttonPause.addEventListener('click', () => {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
})

buttonStop.addEventListener('click', () => {
  buttonStop.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
})

buttonSoundOn.addEventListener('click', () => {
  buttonSoundOn.classList.add('hide')
  butttonSoundOff.classList.remove('hide')
})

butttonSoundOff.addEventListener('click', () => {
  butttonSoundOff.classList.add('hide')
  buttonSoundOn.classList.remove('hide')
})

// Logic
buttonSet.addEventListener('click', () => {
  minutes = prompt('Quantos minutos?')
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
})
