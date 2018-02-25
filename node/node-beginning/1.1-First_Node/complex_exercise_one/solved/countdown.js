var stars = [];
for(var j = 10; j > -1; j--){
	var str = "";
	for(var i = 0; i <= j; i++){
		str += "*";
	}
	stars.push(str)
}

var num = 0;
var int = setInterval(function(){
	if(num < stars.length){
		console.log(stars[num])
		num++;
	} else {
		clearInterval(int)
	}
}, 10000)