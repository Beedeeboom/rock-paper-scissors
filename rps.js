const rps = (player1, player2) => {

    player1.toLowerCase()
    player2.toLowerCase()

    if (player1.toLowerCase() === 'paper' && player2.toLowerCase() === 'rock') {
        return 'The winner is Player1' 
    } else if (player1.toLowerCase() === 'rock' && player2.toLowerCase() === 'scissors' ) {
        return 'The winner is Player1'
    } else if (player1.toLowerCase() === 'scissors' && player2.toLowerCase() === 'paper') {
        return 'The winner is Player1'
    } else if (player1.toLowerCase() === player2.toLowerCase()) {
        return "It's a draw"
    } else {
        return 'The winner is Player2'
    }
}


console.log(rps('paper', 'Rock'))