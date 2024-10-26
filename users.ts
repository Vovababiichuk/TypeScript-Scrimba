type UserRole = "guest" | "member" | "admin" | "contributor";
type UpdatedUser = Partial<User>;

type User = {
  id: number;
  username: string;
  role: UserRole;
};

let nextUserId = 1;

const users: User[] = [
  { id: 1, username: "john_doe", role: "member" },
  { id: 2, username: "jane_smith", role: "contributor" },
  { id: 3, username: "alice_jones", role: "admin" },
  { id: 4, username: "charlie_brown", role: "member" },
];

function fetchUserDetails(userName: string): User {
  const user = users.find((user) => user.username === userName);
  if (!user) {
    throw new Error(`User with username ${userName} not found`);
  }
  return user;
}

function updateUser(id: number, updates: UpdatedUser) {
  const foundUser = users.find((user) => user.id === id);
  if (!foundUser) {
    console.error("User not found!");
    return;
  }
  Object.assign(foundUser, updates);
}

function addNewUser(newUser: Omit<User, "id">): User {
  if (!["guest", "member", "admin"].includes(newUser.role)) {
    throw new Error(
      "Invalid role provided. Allowed roles: guest, member, admin"
    );
  }

  const user: User = {
    id: nextUserId++,
    ...newUser,
  };
  users.push(user);
  return user;
}

// Add new user
const newUser = addNewUser({ username: "new_user", role: "member" });
console.log("New user:", newUser);

// Update existing user
updateUser(newUser.id, { role: "admin" });
console.log("Updated users:", users);

// Find user
const foundUser = fetchUserDetails("new_user");
console.log("Found user:", foundUser);
