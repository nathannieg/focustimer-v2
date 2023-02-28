export default function Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop
}) {
  function reset() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')
  }

  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')
  }

  function pause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  // Gets minutes from user or returns false, if minutes are not passed
  function getMinutes() {
    // verify if user set a value
    let newMinutes = prompt('Quantos minutos?')

    // if newMinutes is null - meaning the user cancelled - we'll reset the timer and stop the application
    if (!newMinutes) {
      return false
    }

    return newMinutes
  }

  return {
    reset,
    play,
    pause,
    getMinutes
  }
}
