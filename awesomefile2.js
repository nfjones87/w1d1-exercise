
function whoAmI (name, age) {
		if (age === undefined || name === undefined || typeof name !== 'string' || typeof age !== 'number') {
			console.log('Arguments not valid.');
		} else if (age <= 0) {
			console.log('Age cannot be negative.');
		}
		else {
			console.log(`My name is ${name} and I'm ${age} years old`);
			console.log(`I was born in ${age}`)
		}
	}
	// const yearOf = function(age) {
	// 	return 2016 - age;

// try {
// 	whoAmI ('Nick', 25);
// }
// catch (e) {
// 	console.error(e);
// }

whoAmI ('Nick', 29);
