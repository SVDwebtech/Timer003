# Notes

## master branch 

## developApp branch
    * 2021/01/21 4:48pm - INITIAL SETUP
        - created boilerplate for index.html
        - created notes.md file for general notes and planning
        - wrote up architecture of app
        - updated README.md file with what app does
    
    * 2021/01/22 2:45pm - TIMER CLASS with some functionality
        - created timer class index.html
        - created duration input and buttons in index.html
        - added eventlistener to start button

    * 2021/01/26 6:23pm - STARTING AND PAUSING the timer
        - changed start method to arrow function
        - added pause and tick methods
        - added setInterval and clearInterval to methods
        - added eventListener to pause button
    
    * 2021/01/28 3:15pm - DURATION DISPLAY functionality
        - set up getter and setter to update duration display
        - stop the timer when it reaches 0

    
    * 2021/01/28 5:12pm - EXTRACTING TIMER CODE 
        - set up onStart, onTick and onComplete methods
        - make sure that if class Timer does not receive callbacks it still works

##   THINGS OUR PROGRAM DOES
    *   Displays a timer --- (T)
    *   Shows an animated border around the timer --- (B)


##   POSSIBLE IMPLEMENTATION ---- EVENTED STYLE APPROACH

    *   Event listener to watch for a click on "start" button --------------- (T)

        **  Emit an event stating that the timer has started ---------------- (B)  Watch for this event.  When it occurs, draw a full border around the timer.

        **  Start counting down the timer ----------------------------------- (T)

        **  Emit an event that the timer has 'ticked' ----------------------- (B)  Watch for this event.  Each time the timer counts down, update the border.

        **  Each time the timer counts down, update the text ---------------- (T)

        **  If we counted down and timer reaches 0 -------------------------- (T)

            *** Emit an event that the timer is done ------------------------ (B)  Watch for this event.  When it occurs, reset the border.

            *** Reset internal timer to get ready for another run ----------- (T)

##   class Timer 
    *   constructor(durationInput, startButton, pauseButton)
    *   start() ----------------------  click start btn
    *   pause() ----------------------  click pause btn
    *   onDurationChange() -----------  change number display
    *   tick() -----------------------  every single second run code to update number display 

    **  class Timer
        *** Knows only about the start btn, pause btn and number display.
        *** Knows nothing about the border display
    
    ** Timer class will listen for a durationInput, click of startButton or click of pauseButton
    ** When an event happens our Timer class will run the relevant method defined inside of it  