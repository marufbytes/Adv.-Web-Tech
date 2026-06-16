const people = [
  {
    name: "Maruf",
    age: 28,
    country: "Australia",
    profession: "Engineer"
  },
  {
    name: "Kamal",
    age: 25,
    country: "USA",
    profession: "Designer"
  },
  {
    name: "Jamal",
    age: 32,
    country: "Australia",
    profession: "Developer"
  },
  {
    name: "Anna",
    age: 30,
    country: "Canada",
    profession: "Teacher"
  }
];

const australians = people.filter(person => person.country == "Australia");
console.log(australians); 