var solarSystem = (function(){
	var planets = ["mercury", "uranus", "mars", "earth", "jupiter", "saturn", "neptune", "venus"];
	var numPlanetsPeopleLandedOn = 0;
	var spaceships = [];
	var stars = ["sun", "alpha centauri", "wolf 359"];
	var age = 0;
	return {
		getPlanets: function() {
			return planets;
		},
		getPlanetsPeopleLandedOn: function(){
			return numPlanetsPeopleLandedOn;
		},
		setPlanetsPeopleLandedOn: function(){
			numPlanetsPeopleLandedOn ++;
			return console.log("New num is ", numPlanetsPeopleLandedOn);
		},
		getSpaceships: function(){
			return spaceships;
		},
		setSpaceships: function(newSpaceship){
			spaceships.push(newSpaceship);
		},
		wreckSpaceships: function(){
			spaceships.pop();
		},
		getStars: function(){
			return stars;
		},
		setStars: function(newStar){
			stars.push(newStar);
		},
		getSolarSystemAge: function(){
			return age;
		},
		setSolarSystemAge: function(){
			age++;
		}
	}
})();