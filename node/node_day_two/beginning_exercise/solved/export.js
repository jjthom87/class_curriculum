module.exports = (argOne, argTwo) => {
	var intOne = parseInt(argOne);
	var intTwo = parseInt(argTwo);
	if(!isNaN(intOne) && !isNaN(intTwo)){
		if(intOne === intTwo){
			return intOne;
		} else if (intOne > intTwo) {
			return intOne * 1000;
		} else {
			return intTwo * 1000;
		}
	} else {
		return "Please Enter Numbers";
	}
}