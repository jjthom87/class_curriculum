/*
	Write a JavaScript function that checks whether a passed string is palindrome or not?
*/

function palindrome(str){
	//without reverse function
	var split = str.split("");
	var reversedStr = ""
	for(var i = split.length - 1; i > -1; i--){
		reversedStr += split[i]
	};
	return str === reversedStr

	//with reverse function
	//return str === str.split("").reverse().join("")

}

console.log(palindrome("radar"))
console.log(palindrome("caddyshack"))