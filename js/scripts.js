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
    if (element.toLowerCase() === word.toLowerCase()) {
      counter++
    }
  });
  return counter;
}