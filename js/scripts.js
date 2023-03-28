// Utility Logic
function isEmpty(testString) {
  return (testString.trim().length === 0)
}

// Business Logic

function wordCounter(text) {
  if (isEmpty(text)) {
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
  if (isEmpty(word)) {
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
    textArray.forEach(function(element, index) {
      if (element === word) {
        textArray.splice(index, 1, "bleep");
      }
    });
  });
  return textArray.join(" ")
}

function mostCommonWords(text) {
  if (isEmpty(text)) {
    return 0;
  }
  const textArray = text.toLowerCase().trim().split(" ");
  const wordCount = {}
  textArray.forEach(function(word) {
    if (!Number(word)) {
    wordCount[word] = numberOfOccurrencesInText(word, text);
    }
  }) 
  return wordCount
}

// UI Logic

function handleFormSubmission() {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const wordCount = wordCounter(passage);
  const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
  const commonWords = mostCommonWords(passage);
  document.getElementById("total-count").innerText = wordCount;
  document.getElementById("selected-count").innerText = occurrencesOfWord;
  document.getElementById("common-words").append(displayObject(commonWords));
  let boldedPassage = boldPassage(word, passage);
  if (boldedPassage) {
    document.querySelector("div#bolded-passage").append(boldedPassage);
  } else {
    document.querySelector("div#bolded-passage").innerText = null;
  }
}

function displayObject(object) {
  const p = document.createElement("p");
  for (let key in object) {
    const br = document.createElement("br")
    p.append(`${key}: ${object[key]}`, br);
  }
  return p
}

function boldPassage(word, text) {
  if (isEmpty(word) || isEmpty(text)) {
    return null;
  }
  const p = document.createElement("p");
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (word === element) {
      const bold = document.createElement("strong");
      bold.append(element);
      p.append(bold);
    } else {
      p.append(element);
    }
    if (index !== (textArray.length - 1)) {
      p.append(" ");
    }
  });
  return p;
}

window.addEventListener("load", function() {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});
