console.log("Print array using 'function' notation");
let a = ["ant", "bat", "cat", 42];
a.forEach(function(element) {
	console.log(element)
});

console.log("Now print array using 'fat arrown' notation");
a.forEach( (element) => {
	console.log(element);
});

/* 
let soliloquy = "To be, or not to be, that is the question:";
Array.from(soliloquy).forEach(function(character) {
	console.log(character)
});
 */

// Exercise from chapter 5
console.log('\narray sorting')
let b = [8,17,42,99];
b.sort(function(a,b) {return a-b; });
b.forEach( (element) => {
	console.log(element);
});

// console.log("Now try with \n b.sort(function(a,b) {return a-b; }).forEach( (element) => {console.log(element);});"); 
console.log("");
b.sort(function(a,b) {return a-b; }).forEach(function(element) {console.log(element);});

// Written another way with fat arrow (=>) notation
console.log("\n");
b.sort((a,b) => {return a-b; }).forEach( (element) => {console.log(element);});

// Create sort functions two ways; regular and fat arrow
let normalSort = (a,b) => { return a-b };
function reverseSort(a,b) { return b-a };

console.log("Normal Sort:");
b.sort(normalSort).forEach( (element)=>{console.log(element);});
console.log("Reverse Sort");
b.sort(reverseSort).forEach( (element)=>{console.log(element);});

