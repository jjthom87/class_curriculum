var arr_one = [1,2,3,4,5,6,7,8];
var arr_two = [7,8,9,10,11,12];

var inBoth = [];
var notInBoth = []
for(var i = 0; i < arr_one.length; i++){
	for(var j = 0; j < arr_two.length; j++){
		if(arr_one[i] === arr_two[j]){
			inBoth.push(arr_one[i])
		} else {
			notInBoth.push(arr_one[i])
			notInBoth.push(arr_two[j])
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