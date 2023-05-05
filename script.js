// Rock Paper Scissors 🚀🔥

const totalScore = {computerScore: 0, playerScore: 0}

function getComputerChoice() {
  const choices = ['Rock','Paper','Scissors']
  const computerChoice = Math.floor(Math.random() * 3)
  return choices[computerChoice]
} 

function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let score;
  if (playerChoice == computerChoice) {
    score = 0
  } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    score = 1
  } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    score = 1 
  } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
    score = 1
  } else {
    score = -1
  }
  return score
}

function showResult(score, playerChoice, computerChoice) {
  let result = document.getElementById('result')
  let hands = document.getElementById('hands')
  let playerScoreDiv = document.getElementById('player-score')

  playerScoreDiv.innerText = `${Number(playerScoreDiv.innerText) + score}`
  hands.innerText = `You Chose: ${playerChoice}\n Computer Chose:${computerChoice}`

  if (score == -1){
    result.innerText = 'You Lose!'
  } else if (score == 0){
    result.innerText = "It's a draw!"
  } else {
    result.innerText = 'You Won!'
  }
}

function onClickRPS(playerChoice) {
  // console.log({playerChoice})
  const computerChoice = getComputerChoice()
  // console.log({computerChoice})
  const score = getResult(playerChoice, computerChoice)
  totalScore['playerScore'] += score
  // console.log({score})
  // console.log(totalScore)
  showResult(score, playerChoice, computerChoice)
}

function playGame() {
  const rpsButtons = document.querySelectorAll('.rpsButton')
  // rpsButtons[0].onclick = () => console.log(rpsButtons[0].value)

  rpsButtons.forEach(button => {
    button.onclick = () => onClickRPS(button.value)
  })

  let clearDiv = document.getElementById('endGameButton')
  clearDiv.onclick = () => {
    endGame()
  }
}

function endGame() {
  let result = document.getElementById('result')
  let hands = document.getElementById('hands')
  let playerScoreDiv = document.getElementById('player-score')
  playerScoreDiv.innerText = ''
  hands.innerText = ''
  result.innerText = ''
}

playGame()