var SolarSystem = (function(OldSolarSystem){
	var stars = ["sun", "alpha centauri", "wolf 359"];

	OldSolarSystem.getStars =  function(){
			return stars;
		};
	OldSolarSystem.setStars = function(newStar){
			stars.push(newStar);
		};

	return OldSolarSystem;
})(SolarSystem || {});