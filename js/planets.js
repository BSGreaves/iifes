var SolarSystem = (function(OldSolarSystem){
	var planets = ["mercury", "uranus", "mars", "earth", "jupiter", "saturn", "neptune", "venus"];
	var numPlanetsPeopleLandedOn = 0;
	
		OldSolarSystem.getPlanets = function() {
			return planets;
		};
		OldSolarSystem.getPlanetsPeopleLandedOn = function(){
			return numPlanetsPeopleLandedOn;
		};
		OldSolarSystem.setPlanetsPeopleLandedOn = function(){
			numPlanetsPeopleLandedOn ++;
		};

		return OldSolarSystem;
})(SolarSystem || {});