/*

1. Create an array with all of the similarities between both arrays
2. Create an array with all of the differences between both arrays
3. just for fun, at the end, concatanate both arrays

*/

var names_one = ["Joe", "Jane", "Bob", "Beatrice", "Jack"];
var names_two = ["Jim", "Jamie", "Bill", "Bonnie", "Jack"];

var inBoth = [];
var notInBoth = []
for(var i = 0; i < names_one.length; i++){
	for(var j = 0; j < names_two.length; j++){
		if(names_one[i] === names_two[j]){
			inBoth.push(names_one[i])
		} else {
			notInBoth.push(names_one[i])
			notInBoth.push(names_two[j])
		}
	}
}
console.log(inBoth)

let dup = [...new Set(notInBoth)];

for(var i = 0; i < dup.length; i++){
	for(var j = 0; j < inBoth.length; j++){
		if(dup[i] == inBoth[j]){
			dup.splice(i,1)
		}
	}
}
console.log(dup)