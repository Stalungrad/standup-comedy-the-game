var gameData = {
  words: 0,
  wordsPerClick: 1
}

function writeWords() {
  gameData.words += gameData.wordsPerClick
  document.getElementById("wordsWritten").innerHTML = gameData.words + " Words Written"
}
