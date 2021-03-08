// Chapter 6 - Functional Programming

// Section 6.2 - FILTER 

let states = ["kansas", "Nebraskq", "North Dakota","South Dakota"];
let otherStates = ["Illinois", "Texas", "North Carolina","South Carolina"];

// urls: Imperative version
function imperativeUrls( elements ) {
	let urls = [];
	elements.forEach(function(element) {
		urls.push(element.toLowerCase().split(/\s+/).join("-"));
		});
		return urls;
}
console.log(imperativeUrls(states));

// urls: functional version
function functionalUrls(elements) {
	return elements.map(elements => elements.toLowerCase().split(/\s+/).join("-"));
}
console.log(functionalUrls(otherStates));
console.log(states);

// Returns a URL-friendly version of a string.
//  Example: "North Dakota" -> "north-dakota"
function urlify( string ) {
	return string.toLowerCase().split(/\s+/).join("-");
}

// rewrite the impeeritive and functional maps to use the new 
// urlify function.
function imperativeUrlify( elements ) {
	let urls = [];
	elements.forEach(function(element) {
		urls.push(urlify(element));
		});
		return urls;
}
console.log(imperativeUrlify(states));

function functionalUrlify(elements) {
	return elements.map(element => urlify(element));
}
console.log(functionalUrlify(states));

// Excercise 6.1.1
// return the states in the form https://example.com/<urlified form>

// Returns a URL-friendly version of a string.
//  Example: "North Dakota" -> "https://example.com/north-dakota"
function fullUrlify( string ) {
	return `https://example.com/${string.toLowerCase().split(/\s+/).join("-")}`;
}
function functionalFullUrlify(elements) {
	return elements.map(element => fullUrlify(element));
}
console.log(functionalFullUrlify(states));

// a little play with map
let nums = [1,2,3,4];

function squareArray( elements ) {
	return elements.map( n => n*n );
}
console.log(nums);
console.log(squareArray(nums));
console.log(`${nums} - ${squareArray(nums)}`);

// Section 6.2 - FILTER 

states = ["kansas", "Nebrask", "North Dakota","South Dakota"];

// singles: Imperative version
function imperativeSingles( elements ) {
	let singles = [];
	elements.forEach(function(element) {
		if (element.split(/\s+/).length === 1) {
			singles.push(element.toLowerCase());
		}
	})
	return singles;
}
console.log(imperativeSingles(states));

// singles: functional version
function functionalSingles(elements) {
	return elements.filter(element => element.split(/\s+/).length === 1 );
}
console.log(functionalSingles(states));

// 6.2.1 Exercises
function includesDakota( elements ) {
	return elements.filter(n => !!n.includes("Dakota"));
}
console.log(includesDakota(states));

function includesTwoWords( elements ) {
	return elements.filter(element => element.split(/\s+/).length === 2);
}
console.log(includesTwoWords(states));

// Section 6.3 - Reduce function

// Reduce example sum - section 6.3.1
let numbers = [1,2,3,4,5,6,7,8,9,10];

// sum: imperative solution
function imperativeSum( elements ) {
	let total = 0;
	elements.forEach(function (n) {
		total += n;
	});
	return total;
}
console.log(imperativeSum(numbers));

function functionalLongSum(elements) {
  return numbers.reduce((total, n) => {
    total +=n;
    return total;
  }, 0);
}
console.log(functionalLongSum(numbers));

function functionalSum(elements) {
  return numbers.reduce((total, n) => { return total += n });
}
console.log(functionalSum(numbers));

// 6.3.2 Reduce example 2
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach( function(element) {
  lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));

function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {
    lengths[element] = element.length;
    return lengths;
    }, {});
}
console.log(functionalLengths(states));

// PLAYTIME!
function playSum(elements) { return numbers.reduce((total, n) => { total.push(n*5); return total; }, []);}
console.log(playSum(numbers));