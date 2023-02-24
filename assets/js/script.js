// Capturing control buttons
const buttonPlay = document.querySelector('.controls__play')
const buttonPause = document.querySelector('.controls__pause')
const buttonStop = document.querySelector('.controls__stop')
const buttonSet = document.querySelector('.controls__set')
const buttonSoundOn = document.querySelector('.sound--on')
const butttonSoundOff = document.querySelector('.sound--off')

buttonPlay.addEventListener('click', () => {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')

  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')
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
