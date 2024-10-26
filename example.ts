// =========================================
let myName: string = "Bob";

let numberOfWheels: number = 4;
let isStudent: boolean = false;

// =========================================
type Food = string;

let favoriteFood: Food = "pizza";

// =========================================
type Address = {
  street: string;
  city: string;
  country: string;
};

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address?: Address;
};

let person1: Person = {
  name: "Joe",
  age: 42,
  isStudent: true,
  address: {
    street: "123 Main",
    city: "Anytown",
    country: "USA",
  },
};

let person2: Person = {
  name: "Jill",
  age: 66,
  isStudent: false,
  address: {
    street: "123 Main",
    city: "Anytown",
    country: "USA",
  },
};

function displayInfo(person) {
  console.log(`${person.name} lives at ${person.address?.street}`);
}

displayInfo(person1);

// =========================================
let ages: number[] = [100, 101];
// ages.push(true); // Error: Type 'boolean' is not assignable to type 'number'.

// =========================================

type Person2 = {
  name: string;
  age: number;
  isStudent: boolean;
};

let person3: Person2 = {
  name: "Joe",
  age: 42,
  isStudent: true,
};

let person4: Person2 = {
  name: "Jill",
  age: 66,
  isStudent: false,
};

let people: Person[] = [person1, person2];
let people2: Array<Person> = [person1, person2];

//==========================================
let myName10: "Bob" = "Bob";
// const myName11: "Bob" = "Bobby"; // Error

// ===========================================
let value: any = 1;
value.toUpperCase();

//============================================
const gameScores = [14, 21, 33, 42, 59];
const favoriteThings = [
  "raindrops on roses",
  "whiskers on kittens",
  "bright copper kettles",
  "warm woolen mittens",
];
const voters = [
  { name: "Alice", age: 42 },
  { name: "Bob", age: 77 },
];

function getLastItem<Type>(array: Type[]): Type | undefined {
  return array[array.length - 1];
}

console.log(getLastItem(gameScores));
console.log(getLastItem(favoriteThings));
console.log(getLastItem(voters));
