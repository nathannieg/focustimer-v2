import {buttonPlay, buttonPause, buttonStop, buttonSet, buttonSoundOn, butttonSoundOff} from './elements.js'

export default function({
    controls,
    timer,
    sound
}) {

    buttonPlay.addEventListener('click', () => {
        controls.play()
      
        // Where the timer actually happens (after you press play)
        timer.countdown()
        sound.pressButton()
    })
      
    buttonPause.addEventListener('click', () => {
        controls.pause()
        timer.hold()
        sound.pressButton()
    })
      
    buttonStop.addEventListener('click', () => {
        controls.reset()
        timer.reset()
        sound.pressButton()
    })
      
    buttonSoundOn.addEventListener('click', () => {
        buttonSoundOn.classList.add('hide')
        butttonSoundOff.classList.remove('hide')
        sound.bgAudio.pause()
    })
    
    butttonSoundOff.addEventListener('click', () => {
        butttonSoundOff.classList.add('hide')
        buttonSoundOn.classList.remove('hide')
        sound.bgAudio.play()
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


    return {

    }
}