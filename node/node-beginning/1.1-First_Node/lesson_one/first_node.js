/*

type node -v to check if your node download is working
type nodemon first_node.js to run this file, after you ran the nodemon command

*/

console.log('sup')

//variables
var jared = "Jared";
var jacob = "Jacob";
var thomas = "Thomas";

console.log(jared + " " + jacob + " " + thomas);

//arrays
var people = [
	{
		name: 'Jared',
		gender: 'male'
	},
	{
		name: 'Jasmaine',
		gender: 'female'
	},{
		name: 'David',
		gender: 'male'
	},{
		name: 'Mikael',
		gender: 'female'
	}
]

var males = [];
var females = [];

for(var i = 0; i < people.length; i++){
	if(people[i].gender === "female"){
		females.push(people[i])
	} else {
		males.push(people[i])
	}
}

console.log(males);
console.log(females);

for(var i = 0; i < males.length; i++){
	males[i] = males[i].name.toUpperCase();
}
console.log(males)

//while loops
var num = 0;
while(num < 10){
	console.log(num)
	num++
}

var numTwo = 0;
while(people[numTwo].name !== "David"){
	console.log(people[numTwo]);
	numTwo++;
}

//array functions
console.log(males.indexOf("JARED"))
console.log(males.indexOf("JOEY"))
console.log(males.join(" & "))

//string manipulation
console.log(jared.split("r"))
for(var i = 0; i < people.length; i++){
	if(people[i].name.charAt(0) === "J"){
		console.log(people[i])
	}
}



