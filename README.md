# TriviaGame


[--PSEUDOCODE--]
1.) When page loads, all elements are hidden (questions, radio buttons, timer, submit).
    a.) The only thing visible:
        i.) “Game Rules” text
        ii.) “Ready” button to click on to begin the game
2.) When player clicks on button:
    a.) “Game Rules” text and “Ready” button are hidden
    b.) Function shows:
        i.) Timer starts countdown from 60 seconds
        ii.) Questions, radio buttons (multiple choice answers), and submit button
    c.) Function to win/lose game:
        i.) If timer runs out, 
            1.) alert pops up and says “times up”
            2.) Add count to “losses”
            3.) Reset game
        ii.) If finished in time
            1.) If 7/10 or more correct
                a.) Alert “you win”
                b.) Add count to “wins”
                c.) Reset game
            2.) If 6/10 correct or less correct
                a.) Alert “you lose”
                b.) Add count to “losses”
                c.) Reset game

