// var outside = "global";

// function scopeStuff() {
// 	inside = "local";
// 	console.log("outside from inside the function", outside); //will run
// 	console.log("inside from inside the function", inside); //will run
// }

// scopeStuff();

// console.log("outside from outside the function", outside); //global, will run
// console.log("inside from outside the function", inside); //local, will run

// scopeStuff();

// var global_base = 500;
// function throwAway(){
// 	global_base += 500;
// 	console.log(global_base);
// }

//building an iife



//var cat = ()()
//var cat = (function(){});
//var cat = (function(){});


// var cat = {
// 	var color = "black";
// };

// console.log(cat.color);

// var cat = (function(){
// 	var color = "black";
// 	var type = "tiger";
// 	return color;
// }()

// console.log(cat);

var cat = (function(){
	var color = "black";
	var type = "tiger";
	return {
		getColor : function(){
			return color;
		},
		getType : function(){
			return type;
		},
		setColor : function(newColor){
			color = newColor;
		}
	};
})();

console.log(cat.getColor());
cat.setColor("pink");
console.log(cat.getColor());

