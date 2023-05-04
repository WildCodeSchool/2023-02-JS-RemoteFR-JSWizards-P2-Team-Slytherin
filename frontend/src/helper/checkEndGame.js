/**
 * @desc checkEndGame performs the logic to determine the issue of the ending game:
 * Game Over: countdown has reached 0 and the played has not picked a card
 * Win: the player has picked the correct card within the limited time
 * Loose: the player has picked the wrong card within the limited time
 */

const checkEndGame = (playerCardName, hatCardName, playerName, timeLeft) => {
  const result = { status: null, heading: "", message: "" };

  if (timeLeft === 0 || !playerCardName) {
    result.status = false;
    result.heading = "Game Over";
    result.message = `Sorry ${playerName}... You've reached the time limit!`;
  } else if (playerCardName === hatCardName) {
    result.status = true;
    result.heading = "You win!";
    result.message = `Congratulations! You've defeated the sorting hat!`;
  } else {
    result.status = true;
    result.heading = "You loose!";
    result.message = `Sorry ${playerName}... You'll do better next time!`;
  }
  return result;
};

export default checkEndGame;
