const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Converting the object to a JSON string
const jsonString = JSON.stringify(person);

console.log("JSON String:", jsonString);

// Parsing the JSON string back into a JavaScript object
const jsonParsed= JSON.parse(jsonString);

console.log("JSON Parsed Object:", jsonParsed);