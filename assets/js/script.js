// Capturing control buttons
const buttonPlay = document.querySelector('.controls__play')
const buttonPause = document.querySelector('.controls__pause')
const buttonStop = document.querySelector('.controls__stop')
const buttonSet = document.querySelector('.controls__set')

// Play e pause
buttonPlay.addEventListener('click', () => {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
})

buttonPause.addEventListener('click', () => {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
})
