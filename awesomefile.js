
function whoAmI (name=undefined, age=undefined) {
	const ageInput = function(age) {
		if (age <= 0) {
			throw new Error('Age cannot be negative.');
		} else if (age === undefined || name === undefined) {
			console.log('Arguments not valid.');
		} else {
			return age;
		}
	}
	const yearOf = function(age) {
		// if (age <= 0) {
		// 	throw new Error('Age cannot be negative.');
		// } else {
		// 	return 2016 - age;
		// }
		return 2016 - age;
	}
	console.log(`My name is ${name} and I'm ${ageInput(age)} years old`);
	console.log(`I was born in ${yearOf(age)}`);
}

try {
	whoAmI ('Nick');
}
catch (e) {
	console.error(e);
}
