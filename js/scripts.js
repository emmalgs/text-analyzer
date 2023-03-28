function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.length > 0
  textArray.forEach(function(word) {
    wordCount++;
    });
  return wordCount;
}