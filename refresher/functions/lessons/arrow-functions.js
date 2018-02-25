/*
	No arguments	
*/

//es5
function oldFunc(){
	return "This is the old stuff"
}
//console.log(oldFunc());

//es6
//you can write it without the brackets if you have a small simple return as such
var newFunc = () => "This is the new stuff";
//console.log(newFunc())

/*
	With arguments
*/

function oldFuncTwo(name, age, bald){
	if(typeof bald === "boolean"){
		if(bald){
			return `Hello, I'm ${name}, I'm ${age} and I'm bald` 
		} else {
			return `Hello, I'm ${name}, I'm ${age} and I have a beautiful head of hair`
		}
	} else {
		return "Please enter either true or false for bald"
	}
}
//console.log(oldFuncTwo("Jared", 30, false))

var newFuncTwo = (name, age, bald) => {
	if(typeof bald === "boolean"){
		if(bald){
			return `Hello, I'm ${name}, I'm ${age} and I'm bald` 
		} else {
			return `Hello, I'm ${name}, I'm ${age} and I have a beautiful head of hair`
		}
	} else {
		return "Please enter either true or false for bald"
	}	
}
//console.log(newFuncTwo("Jared", 30, false))

