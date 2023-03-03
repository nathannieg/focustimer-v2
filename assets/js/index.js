// Imports

// Import default
import Timer from './timer.js'
import Controls from './controls.js'
import {
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  secondsDisplay,
  minutesDisplay
} from './elements.js'
import Sound from './sounds.js'
import Events from './events.js'
// Named import
// import {Timer} from './timer.js'
// import { Controls } from './controls.js'

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

const sound = Sound()

Events({ controls, timer, sound })
