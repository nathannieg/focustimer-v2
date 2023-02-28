// Imports

// Import default
import Timer from './timer.js'
import Controls from './controls.js'

// Named import
// import {Timer} from './timer.js'
// import { Controls } from './controls.js'

// Capturing control buttons
const buttonPlay = document.querySelector('.controls__play')
const buttonPause = document.querySelector('.controls__pause')
const buttonStop = document.querySelector('.controls__stop')
const buttonSet = document.querySelector('.controls__set')
const buttonSoundOn = document.querySelector('.sound--on')
const butttonSoundOff = document.querySelector('.sound--off')
const secondsDisplay = document.querySelector('.timer__seconds')
const minutesDisplay = document.querySelector('.timer__minutes')

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

buttonPlay.addEventListener('click', () => {
  controls.play()

  // Where the timer actually happens (after you press play)
  timer.countdown()
})

buttonPause.addEventListener('click', () => {
  controls.pause()
  timer.hold()
})

buttonStop.addEventListener('click', () => {
  controls.reset()
  timer.reset()
})

buttonSoundOn.addEventListener('click', () => {
  buttonSoundOn.classList.add('hide')
  butttonSoundOff.classList.remove('hide')
})

butttonSoundOff.addEventListener('click', () => {
  butttonSoundOff.classList.add('hide')
  buttonSoundOn.classList.remove('hide')
})

// Getting value of minutes from the user and showing it on the display
buttonSet.addEventListener('click', () => {
  // Gets minutes from getMinutes
  let newMinutes = controls.getMinutes()

  // if newMinutes is null - meaning the user cancelled - we'll reset the timer and stop the application
  if (!newMinutes) {
    timer.reset()
    return
  }

  // if newMinutes is not null, we'll pass it to minutes and update the display
  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)
})
