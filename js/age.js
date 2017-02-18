var SolarSystem = (function(OldSolarSystem){
	var age = 0;

	OldSolarSystem.getSolarSystemAge = function(){
			return age;
		};
	OldSolarSystem.setSolarSystemAge = function(){
			age++;
		};

	return OldSolarSystem;
})(SolarSystem || {});