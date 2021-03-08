#!/usr/local/bin/node

// JavaScript to count the number of unique words in a piece of text

const sonnet = `Let me not to the marriage of true minds Admit impediments. Love is not love Which alters when it alteration finds, Or bends with the remover to remove. O no, it is an ever-fixed mark That looks on tempests and is never shaken; It is the star to every wand'ring bark, Whose worth's unknown, although his height be taken. Love's not time's fool, though rosy lips and cheeks Within his bending sickle's compass come: Love alters not with his brief hours and weeks, But bears it out even to the edge of doom. If this be error and upon me proved, I never writ, nor no man ever loved.`;

const sonnetNum =`one two three four three two three.`;

console.log(sonnet + "\n");


/* 
// This section uses the native object approach to creating an object

let unique = {};
let words = sonnet.split(/[\s:.,;!\?]+/g); // splits on whitespace and punctuation
// let words = sonnet.match(/\w+/g); // matches words and words with apostrophe

for (i=0; i<words.length; i++) {
	if (unique[words[i]]){
		unique[words[i]]++;
	} else {
		unique[words[i]] = 1;
	}
}

let uniqueWords = Object.keys(unique);

for (i=0; i<uniqueWords.length; i++) {
	console.log(`${i}:  ${uniqueWords[i]} --> ${unique[uniqueWords[i]]}`)
}

console.log(`The total number of unique words is ${uniqueWords.length}`);
 */
 
 
// This section uses the Map object approach to creating an object

let uniques = new Map();
let words = sonnetNum.split(/[\s:.,;!\?]+/g); // splits on whitespace and punctuation
let wordCount = 1;

for (i=0; i<words.length; i++) {
	console.log(wordCount++ +": Words is = " + words[i]);
	if (uniques.get(words[i])) {
		uniques.set(words[i], uniques.get(words[i]) + 1);
	} else {
		uniques.set(words[i], 1);
	}
}

console.log(uniques);