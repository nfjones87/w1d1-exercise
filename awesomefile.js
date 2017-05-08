
function whoAmI (name, age) {
	const yearOf = function(age) {
		if (age <= 0) {
			throw new Error('Age cannot be negative.');
		} else {
			return 2016 - age;
		}
	}
	console.log(`My name is ${name} and I'm ${age} years old`);
	console.log("I was born in " + yearOf(age));
}

try {
	whoAmI ("Nick", -29);
}
catch (e) {
	console.error(e);
}