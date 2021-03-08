let Phrase = require("jdharper-palindrome");

let string = prompt("Please enter a string for palindrome testing:");
let phrase = new Phrase(string);

if (phrase.palindrome()) {
  alert(`"${phrase.content}" is a paliindrome!`);
} else {
  alert(`"${phrase.content}" is not a paliindrome.`);
}