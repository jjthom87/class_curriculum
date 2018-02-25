/*

Create a function that:
	1. starts off with an export
	2. takes 2 arguments
	3. make sure both arguments are numbers
		- use parseInt https://www.w3schools.com/jsref/jsref_parseint.asp
		- use isNaN https://www.w3schools.com/jsref/jsref_isnan.asp
	4. if the first argument equals the second argument, return the first argument
	5. if the first argument is greater than the second argument, return the first argument times 1000
	6. if the second argument is greater than the first argument, return the second argument times 1000
	7. if both arguments aren't numbers, return "please enter numbers for both arguments"

*/

module.exports = function(argOne, argTwo){
	var numOne = parseInt(argOne);
	var numTwo = parseInt(argTwo);

	if(!isNaN(numOne) && !isNaN(numTwo)){
		if(numOne === numTwo){
			return numOne;
		} else if (numOne < numTwo){
			return numTwo * 1000;
		} else if (numOne > numTwo){
			return numOne * 1000;
		}
	} else {
		return "Please enter numbers for the arguments";
	}
}