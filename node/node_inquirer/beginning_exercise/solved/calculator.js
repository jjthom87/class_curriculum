var operator = process.argv[2];
var numOne = parseInt(process.argv[3]);
var numTwo = parseInt(process.argv[4]);

if(!isNaN(numOne) && !isNaN(numTwo)){
	switch(operator){
		case 'add':
			console.log(numOne + numTwo);
			break;
		case 'subtract':
			console.log(numOne - numTwo);
			break;
		case 'multiply':
			console.log(numOne * numTwo);
			break;
		case 'divide':
			console.log(numOne/numTwo);
			break;
		default:
			console.log("Please enter add, subtract, multiply, or divide")
	}
} else {
	console.log("Please enter numbers for the 4th and 5th arguments")
}