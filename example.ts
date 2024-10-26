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
ages.push(true); // Error: Type 'boolean' is not assignable to type 'number'.

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
const myName11: "Bob" = "Bobby"; // Error

//==========================================
type UserRole = "guest" | "member" | "admin";

type User10 = {
  id: number;
  username: string;
  role: "member" | "admin" | "contributor" | "guest";
};

const users10: User10[] = [
  { id: 1, username: "john_doe", role: "member" },
  { id: 2, username: "jane_doe", role: "admin" },
  { id: 3, username: "guest_user", role: "guest" },
];

function fetchUserDetails(username: string): User {
  const user = users.find((user) => user.username === username);
  if (!user) {
    throw new Error(`User with username ${username} not found`);
  }
  return user;
}

// ===========================================
let value: any = 1;
value.toUpperCase();

//============================================
type User = {
  id: number;
  username: string;
  role: "member" | "contributor" | "admin";
};

type UpdatedUser = Partial<User>;

const users: User[] = [
  { id: 1, username: "john_doe", role: "member" },
  { id: 2, username: "jane_smith", role: "contributor" },
  { id: 3, username: "alice_jones", role: "admin" },
  { id: 4, username: "charlie_brown", role: "member" },
];

function updateUser(id: number, updates: UpdatedUser) {
  // Find the user in the array by the id
  const foundUser = users.find((user) => user.id === id);
  if (!foundUser) {
    console.error("User not found!");
    return;
  }
  // Use Object.assign to update the found user in place.
  Object.assign(foundUser, updates);
}

// Example updates:
updateUser(1, { username: "new_john_doe" });
updateUser(4, { role: "contributor" });

console.log(users);

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
