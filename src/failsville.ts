// This file intentionally has TS errors in it

// wrongType is declared to be a string, then we assign a number to it. Bad!
const wrongType: string = 4;
console.log("wrongType: ", wrongType);

type Person = {
  firstName: string;
  lastName?: string; // question mark means it is optional
  email: string;
  isStudent?: boolean;
};

// rufus is OK, because it an object literal, no type annotation given.
const rufus = {
  firstName: "Rufus",
};

// betty has a type annotation, so the value _must_ conform to the Person type
// definition. It doesn't because it is missing something. Roll over it with
// your mouse to see what. Or look in your editor's "Problems" output, it shows
// it there as well.
const betty: Person = {
  firstName: "Betty",
};

// Try running this file as it is (with errors). See what happens.
