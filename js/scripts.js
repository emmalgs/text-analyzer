function wordCounter(text) {
  let wordCount = 0;
  const textArray = text.split(" ");
  if (textArray.length > 0) {
  textArray.forEach(function(word) {
    wordCount++;
    });
  } else if (textArray.length === 0) {
    wordCount = 0;
  }
  return wordCount;
}