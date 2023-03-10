import Sound from './sounds.js'

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls
}) {
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent) // user will provide value through prompt

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function reset() {
    updateDisplay(minutes, 0) // it's the minutes in the global scope
    clearTimeout(timerTimeOut)
  }

  function countdown() {
    // setTimeout runs a function every 1000 milliseconds / 1 seconds
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      // we don't want to change the original minutes, so we create the countdownMinutes inside the setTimeout
      let countdownMinutes = Number(minutesDisplay.textContent)
      let isFinished = countdownMinutes <= 0 && seconds <= 0

      updateDisplay(countdownMinutes, 0)

      if (isFinished) {
        resetControls()
        updateDisplay()
        Sound().timeEnd()

        return
      }

      if (seconds <= 0) {
        seconds = 60

        countdownMinutes = countdownMinutes - 1 // same as: --minutes
        // wrong: updateDisplay(String(countdownMinutes - 1), seconds)
      }

      updateDisplay(countdownMinutes, String(seconds - 1))

      // Recursion making countdown work forever
      countdown()
    }, 1000)
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  function hold() {
    clearTimeout(timerTimeOut)
    // clearTimeout needs an id, which is stored inside the variable timerTimeOut
  }

  return {
    countdown,
    reset,
    updateDisplay,
    updateMinutes,
    hold
  }
}

// default export (only allows one per file)
// export default countdown

// named export
// export {resetTimer, countdown}
