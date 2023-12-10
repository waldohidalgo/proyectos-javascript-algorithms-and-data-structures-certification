// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  let isName = false;
  let isProperty = false;
  let value;
  for (let contact of contacts) {
    if (contact.firstName == name) {
      isName = true;
      if (contact[prop]) {
        isProperty = true;
        value = contact[prop];
      }
      break;
    }
  }
  if (!isName) {
    return "No such contact";
  } else {
    if (!isProperty) {
      return "No such property";
    } else {
      return value;
    }
  }

  // Only change code above this line
}

console.log(lookUpProfile("Akira", "likes"));
