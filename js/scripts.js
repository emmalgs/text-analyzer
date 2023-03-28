function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (!Number(element)) {
    wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (word.trim() === 0) {
    return 0;
  }
  const textArray = text.split(" ");
  let counter = 0
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      counter++
    }
  });
  return counter;
}

function checkOffensiveWords(text) {
  const offensiveWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
  const textArray = text.split(" ");
  offensiveWords.forEach(function(word) {
    textArray.forEach(function(element) {
      let index = textArray.indexOf(element);
      if (element === word) {
        textArray.splice(index, 1, "bleep");
      }
    });
  });
  return textArray.join(" ")
}

// UI Logic

function handleFormSubmission() {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const wordCount = wordCounter(passage);
  const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
  document.getElementById("total-count").innerText = wordCount;
  document.getElementById("selected-count").innerText = occurrencesOfWord;
}

window.addEventListener("load", function() {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});
