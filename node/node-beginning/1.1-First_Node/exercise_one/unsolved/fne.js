/*

Out of the animals array:
	1. console.log all of the animals and types in the array
	2. console.log all of the animals in the array
	3. console.log all of the animals that are mammals
	4. console.log all of the animals that are fish or arachnids
	5. console.log all of the animals that have an "o" and a "g" in their name
	6. console.log all of the animals with an "o" in their name
	7. create a new array that has only the mammals
*/

var animals = [
	{
		animal: "dog",
		type: "mammal"
	},
	{
		animal: "goldfish",
		type: "fish"
	},
	{
		animal: "spider",
		type: "arachnid"
	},
	{
		animal: "preying mantis",
		type: "insect"
	},
	{
		animal: "cat",
		type: "mammal"
	},
	{
		animal: "frog",
		type: "amphibian"
	}
]

var type = "blobbity bloo"

for(var i = 0; i < animals.length; i++){
	//console.log(type);
}

var mammals = [];
for(var i = 0; i < animals.length; i++){
	//console.log(animals[i].animal)
	// if(animals[i].type === "mammal"){
	// 	console.log(animals[i])
	// }
	// if(animals[i].type === "fish" || animals[i].type === "arachnid"){
	// 	console.log(animals[i])
	// }
	// if(animals[i].animal.indexOf("o") > -1 && animals[i].animal.indexOf("g") > -1){
	// 	console.log(animals[i])
	// }
	if(animals[i].type === "mammal"){
		mammals.push(animals[i])
	}
}
console.log(mammals)
//last item in array for pop
console.log(mammals.pop())

var mammalFilter = animals.filter((animal) => {
	return animal.type === "mammal"
});

console.log(mammalFilter)







