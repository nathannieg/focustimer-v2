Layout: https://www.figma.com/file/GleG8iNFkv12pxRRRIVWUU/Explorer-Stage-05-Projeto-01-(Copy)-(Copy)

Notion: https://www.notion.so/GPS-Explorer-Stage-05-e3d65f94c0694f968a7502fc477c5cea?p=024ee1b2654348a2806e08aba284ff1f&pm=s

---

What's hapenning inside the setTimeout function
(up until the end of "Avançando na lógica em pequenos passos")

- 1. I create a variable inside that scope for the seconds.
- 2. I create a variable inside that scooe for the minutes. We're gonna have to change that value during the countdown and that's why we're not using the variable in the global scope (this variable is the one that stores the number of minutes the user set).
- 3. I'm setting the value of seconds to 00 in string format. I'm doing that because in every counter, the seconds in the beginning of the run is 00.
- 4. I'm creating a condition to end the application: when minutes is equal or less than zero. If minutes if zero or less, it means the countdown is over.
- 5. I take care of subtracting 1 from minutes every time seconds get to zero.
- 6. I take care of substracting 1 from the seconds.
- 7. I call the countdown function again so all the steps above happpen again until I finally reach the fourth step, the one that will end the application because minutes is now zero.

---

What's hapenning inside the setTimeout function
(up until the end of "Princípios de clean code e programação declarativa")

- 1. We want to stop repeating the same code over and over, so we create two new functions that will be used on various parts of the application: updateTimerDiplay (when we have to update the minutes and the seconds display) and resetControls (when the application stops).

- 2. We replace the repeated code with the new functions whenever they're needed.

- 3. We update the display in a few different situations:
  - I) When the user sets a time;
  - II) Right after the user sets a time and we have to show the value on the display (inside setTimeOut).
  - III) When we have to subtract 1 from the seconds display (when the setTimeout function runs for the first time and then again and again until minutes reaches 00 and the application ends).

Important to note: when we have to subtract one to update the minutes display inside the condition (when seconds <= 0), it's enough to just decrement countdownMinutes because right after that line, we have an updateTimerDisplay that will take that new decremented value and update the display.

---

Up until now, the stop button does not work. So we have to come up with a solution for that.

Solution: when minutes reaches zero, we're gonna stop the setTimeout function entirely.

Step by step

- 1. We'll create a new variable timerTimeOut and pass the setTimeout to it. setTimeout returns a number, that will be stored inside timerTimeOut. We'll need that number/id to pass as an argument to clearTimeOut() later. This function cancels a setTimeOut previously established.
- 2. We'll run the clearTimeOut(timerTimeOut) inside the buttonStop eventListener, but we'll find out it stops the application without resetting it. It means that what it really does is pause an application. So now we'll remove that line from the buttonStop eventListener and add it to buttonPause eventListener.
- 3. By now, we still have to figure out a way to stop the application and reset the display (if the user set it to 12:00, the stop button should update it back to 12:00). We'll create a resetTimer() function and:
  - I) Update the display with the value the user set in the beginning.
  - II) Then use clearTimeOut() inside that function to stop the application.
  - III) We'll then call resetTimer() inside the buttonStop eventListener.

IMPORTANT TO NOTE: when we update the display with the variable "minutes" inside the resetTimer() function, the initial value is not yet defined because we'd just initialized the variable like this: let minutes. What we'll do then is pass the minutesDisplay text content to the minutes variable like this: let minutes = Number(minutesDisplay.textContent).

By the end of "Resetando o cronômetro e entendendo escopos", the base of the application is finished. We'll now module it.

---

"Introdução ao ES6 Modules"

- We start by reorganizing our js code in three files: index.js, controls.js, and timer.js.
- That will generate a bunch of error because separating the code creates dependencies. We'll solve that by structuring our data in an factory object.

  Creating factory objects
  IMPORTANT: a factory is function that contains other functions and returns an object.

  - Step by step here: https://www.notion.so/GPS-Explorer-Stage-05-e3d65f94c0694f968a7502fc477c5cea?p=024ee1b2654348a2806e08aba284ff1f&pm=s

TBC: -7:50, quando o Mayk começa a falar do buttonSet: https://app.rocketseat.com.br/node/stage-05/group/avancando-na-programacao-web-com-java-script/lesson/refatorando-os-controles
