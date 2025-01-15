// npx ts-node src/example.ts
let penis = "pp";
console.log(penis);

type Person = { // typescript specific
    firstName: string; // required
    lastName?: string; // optional (?)
    age?: number       // optional (?)
}

const smallObj: Person = { // extends Person
    firstName: "John",
    lastName: "Penis" // removing this doesn't matter 
}

// code like its 1995
function addNumbers(numA, numB) {
    return numA + numB;
}

// arrow function
const addThings = (numA: number, numB: number): number => {
    return numA + numB;
};

// simple functions like this are faster
const addStuff = (numA, numB) => numA + numB

console.log(addNumbers(1,2));
console.log(addThings(1,2));
console.log(addStuff(1,2));
