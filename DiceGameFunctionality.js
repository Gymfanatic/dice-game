function rollDice() {
  let player1 = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6 for player 1
  let player2 = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6 for player 2
  
  document.getElementById("player1Score").textContent = player1;
  document.getElementById("player2Score").textContent = player2;
  
  determineWinner(player1, player2);
}

function determineWinner(score1, score2) {
  let message = "";
  
  if (score1 > score2) {
    message = "Player 1 wins!";
  } else if (score1 < score2) {
    message = "Player 2 wins!";
  } else {
    message = "It's a tie!";
  }
  
  alert(message);
}
