* TDD

Describe: wordCounter()

Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

Test: "It should return 0 for an empty string."
Code: wordCounter("");
Expected Output: 0

Test: "It should return 0 for a string that is only spaces."
Code: wordCounter("            ");
Expected Output: 0

Test: "It should not count numbers as words."
Code: wordCounter("hi there 77 19");
Expected Output: 2

Describe: numberOfOccurrencesInText()

Test: "It should return 0 occurrences of a word for an empty string."
Code:
const text = "";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return 1 occurrence of a word when the word and the text are the same."
Code:
const text = "red";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 1

Test: "It should return 0 occurrences of a word when the word and the text are different."
Code:
const text = "red";
const word = "blue";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return the number of occurrences of a word."
Code:
const text = "red blue red red red green";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 4

Test: "It should return a word match regardless of case."
Code:
const text = "red RED Red green Green GREEN";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test: "It should return a word match regardless of punctuation."
Code:
const text = "Red! Red. I like red, green, and yellow.";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Describe: checkOffensiveWords()

Test: "It should return input text with no offensive words."
Code:
const text = "This is just a little bit of nice, nonoffensive text.";
checkOffensiveWords(text);
Expected Output: "This is just a little bit of nice, nonoffensive text."

Test: "It should find and omit one of the four offensive words, starting with loopdaloop."
Code:
const text = "I would never in my loopdaloop life go skydiving."
checkOffensiveWords(text);
Expected Output: "I would never in my life go skydiving."

Test: "It should find and omit the same offensive word (loopdaloop) multiple times."
Code:
const text = "I would never in my loopdaloop life go loopdaloop skydiving for no amount of loopdaloop money."
checkOffensiveWords(text);
Expected Output: "I would never in my life go skydiving for no amount of money."

Test: "It should find and omit two different offensive words (loopdaloop and biffaroni)"
Code:
const text = "I took a biffaroni to the head when I walked into that loopdaloop bar."
checkOffesniveWords(text);
Expected Output: "I took a to the head when I walked into that bar."