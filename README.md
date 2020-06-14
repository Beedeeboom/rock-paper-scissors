# Rock Paper Scissors

Complete the function rps(player1, player2) . The inputs player1 and player2 will both be strings representing a move in the game rock, paper, scissors. The input could contain words with any case but will always be a valid string and option. Your function should return a string telling the user who the winner was or if it was a draw. 

Rules of the game

Rock beats Scissor
Paper beats Rock
Scissor beats Paper
In the case that both players choose the same option it is a draw

Examples

rps('rock', 'paper') => 'The winner is player 2'
rps('Sissors', 'paper') => 'The winner is player 1'
rps('paper', 'Paper') => 'It's a draw'

Note that capital letters shouldn't make a difference to the output.