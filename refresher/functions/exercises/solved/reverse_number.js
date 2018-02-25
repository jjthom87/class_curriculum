/*
	Write a javascript arrow function that reverses a number
*/

var reverseNumber = (num) => {
	//without reverse function
	var split = num.toString().split("");
	var newNum = ""
	for(var i = split.length - 1; i > -1; i--){
		newNum += split[i]
	}
	return parseInt(newNum)

	//with reverse function
	//return parseInt(num.toString().split("").reverse().join(""));
}

console.log(reverseNumber(12345))

