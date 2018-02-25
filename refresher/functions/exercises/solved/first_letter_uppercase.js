/*

	Write a JavaScript arrow function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

*/

var firstLetterUpper = (str) => {
	var split = str.split(" ");
	for(var i = 0; i < split.length; i++){
		split[i] = split[i].charAt(0).toUpperCase() + split[i].substring(1, split[i].length)
	}
	return split.join(" ")
}

console.log(firstLetterUpper("hello it's me"));