let turn = "player1"

document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll('.grid div')
    let result = document.querySelector('#result')
    let displayCurrentPlayer = document.querySelector('#current-player')
    let currentPlayer = 1

    for (let i = 0; i < squares.length; i++) {
        squares[i].onclick = function () {
            alert('hi')
            if (currentPlayer === 1) {
                currentPlayer = 2
                displayCurrentPlayer.innerHTML = currentPlayer
            } else {
                currentPlayer = 1
                displayCurrentPlayer.innerHTML = currentPlayer
            }




        }
    }


})

// Psuedocode
// Player 1 - clicks square
// onClick =
//     getID = player1Moves.push(id)
// turn.push()
// if player1 clicks, disable cursor / click
// evaluate if winCombos.includes(player1Moves)
// if so, won!, else continue game

// [repeat for player2]
// turn = [2]

// let player1Moves = [2, 6, 9, 5]
// let player2Moves = [4, 8, 15, 3]

// [2, 6, 9, 5] != [2, 6, 10, 14]

// loop through, evaluation each of the four.includes()

// win[9]

// player1Moves.sort().toString().concat()



// let winCombos = { [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], }
