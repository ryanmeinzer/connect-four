let turn = "player1"

document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll('.grid div')
    let result = document.querySelector('#result')
    let displayCurrentPlayer = document.querySelector('#current-player')
    let currentPlayer = 1
    let displayPlayer1Moves = document.querySelector('#player-1-moves')
    let displayPlayer2Moves = document.querySelector('#player-2-moves')
    let player1Array = []
    let player2Array = []

    for (let i = 0; i < squares.length; i++) {
        squares[i].onclick = function (e) {
            // alert('hi')
            if (currentPlayer === 1) {
                player1Array.push(e.target.id)
                displayPlayer1Moves.innerHTML = player1Array
                currentPlayer = 2
                displayCurrentPlayer.innerHTML = currentPlayer
            } else {
                player2Array.push(e.target.id)
                displayPlayer2Moves.innerHTML = player2Array
                currentPlayer = 1
                displayCurrentPlayer.innerHTML = currentPlayer
            }




        }
    }


})

function checkWin() {
    let wins = [
        [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16], [1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15], [4, 8, 12, 16], [1, 6, 11, 16], [4, 7, 10, 13]
    ]
}