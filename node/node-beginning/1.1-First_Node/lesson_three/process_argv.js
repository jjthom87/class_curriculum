//console.log(process.argv);
var argThree = process.argv[2];
var argFour = process.argv[3];
var argvFive = process.argv[4];

function addThese(one, two, three){
	return parseInt(one) + parseInt(two) + three;
}

console.log(addThese(argThree, argFour, argvFive));

console.log(process.argv)