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