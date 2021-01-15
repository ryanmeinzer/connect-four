// let's trying and build a 5x5 connect4 game

// build connect four board 5x5


// U P W T S R O - worst up

/*
Understand
    evaluate win scenarios
    multiplayer are both me
reword
    everything
inputs
    clicks
outputs
    win is returned to user with alert
examples
    win = four across or diagonal

Pseudocode
    first create to create semantic html structure for board grid
  styling - css grid
  defer to divs
  black borders

  logic
        https://thetechtrifecta.com/blog/dom-for-dommies
    Determine - which square is clicked by user(s)
    Observe - event listeners to mark div
    Manipulate - defer to array

    https://github.com/ryanmeinzer/tic-tac-toe-rb-ruby-intro-000

        https://github.com/ryanmeinzer/JS-Data-Practice/blob/master/graph/index.js

Write

test
skip

Refactor
from brute force for better Big 0

*/

/*

let turn = []

Player 1 - clicks square
onClick =
getID = player1Moves.push(id)
turn.push()
if player1 clicks, disable cursor/click
evaluate if winCombos.includes(player1Moves)
if so, won! , else continue game

[repeat for player2]
turn = [2]

let player1Moves = [2, 6, 9, 5]
let player2Moves = [4, 8, 15, 3]

[2, 6, 9, 5] != [2, 6, 10, 14]

loop through, evaluation each of the four .includes()

win[9]

player1Moves.sort().toString().concat()



let winCombos = {[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], }

/*
