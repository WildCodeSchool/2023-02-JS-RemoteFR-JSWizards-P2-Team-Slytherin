 export default function Test () {

 const previousScoreBoard = JSON.parse(localStorage.getItem("scoresBoard"));
    console.log(previousScoreBoard)
    if(previousScoreBoard !== null){
      const playerScore = {
        "playerName": localStorage.currentUsername,
        "currentScore": score,
      };
      previousScoreBoard.push(playerScore)
    }

    localStorage.setItem("scoresBoard", JSON.stringify([previousScoreBoard]));
return null ;

 };