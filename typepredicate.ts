// user-defined type guard
declare function getSmallPet(): Fish | Bird;

// function isFish(pet: Fish | Bird): pet is Fish {
// 	return (pet as Fish).swim !== undefined;
// }

let pet = getSmallPet();

pet.swim();
pet.fly();

// if (isFish(pet)) {
// 	pet.swim();
// } else {
// 	pet.fly();
// }
