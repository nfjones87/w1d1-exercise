function beyond(num) {
	if (num === Infinity) {
		console.log("And beyond");
	} else if (num > 0) {
		console.log("To infinity");
	} else if (num < 0) {
		console.log("To negative infinity");
	} else if (num === 0) {
		console.log("Staying home.");
	}
}

beyond(8);
beyond(0);
beyond(Infinity);
beyond(-8);