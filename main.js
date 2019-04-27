var gameData = {
  words: 0,
  wordsPerClick: 1
  wordsPerClickCost: 10
}

function writeWords() {
  gameData.words += gameData.wordsPerClick
  document.getElementById("wordsWritten").innerHTML = gameData.words + " Words Written"
}

function buyWordsPerClick() {
  if (gameData.words >= gameData.wordsPerClickCost) {
    gameData.words -= gameData.wordsPerClickCost
    gameData.wordsPerClick += 1
    gameData.wordsPerClickCost *= 2
    document.getElementById("wordsWritten").innerHTML = gameData.words + " Words Written"
    document.getElementById("perClickUpgrade").innerHTML = "Get Motivated (Currently Level " + gameData.wordsPerClick + ") Cost: " + gameData.wordsPerClickCost + " Words"
  }
}

var mainGameLoop = window.setInterval(function() {
  writeWords()
}, 1000)

var saveGameLoop = window.setInterval(function() {
  localStorage.setItem('standupGameSave', JSON.stringify(gameData))
}, 15000)

var savegame = JSON.parse(localStorage.getItem("standupGameSave"))
if (savegame !== null) {
  gameData = savegame
}
