/**
 * @desc checkEndGame performs the logic to determine the issue of the ending game
 * Game Over: countdown has reached 0 and the played has not picked a card
 * Win: the player has picked the correct card within the limited time
 * Loose: the player has picked the wrong card within the limited time
 */

const checkEndGame = (playerCard, hatCard, playerInfo, endGame) => {
  const { name: playerCardName } = playerCard;
  const { name: hatCardName } = hatCard;
  const { name: playerName } = playerInfo;
  const { remainingTime } = endGame;

  const result = { success: null, heading: "", message: "" };

  if (remainingTime === 0 || !playerCardName) {
    result.success = false;
    result.heading = "Game Over";
    result.message = `Sorry ${playerName}... You've reached the time limit!`;
  } else if (playerCardName === hatCardName) {
    result.success = true;
    result.heading = "You win!";
    result.message = `Congratulations! You've defeated the sorting hat!`;
  } else {
    result.success = false;
    result.heading = "You loose!";
    result.message = `Sorry ${playerName}... You'll do better next time!`;
  }
  return result;
};

export default checkEndGame;
