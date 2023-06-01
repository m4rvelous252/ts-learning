function printId(id: number | string) {
	console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
printId({ myID: 22342 });

function printId(id: number | string) {
	console.log(id.toUpperCase());
}

// Return type is inferred as number[] | string
function getFirstThree(x: number[] | string) {
	return x.slice(0, 3);
}
