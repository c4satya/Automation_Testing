//template literal  
export{};
const name = "Alice";//sample.ts contains a template literal that uses the variable name to create a greeting message. The template literal is enclosed in backticks (`) and allows for embedding expressions using the ${} syntax. In this case, it creates a string that says "Hello, Alice!" by inserting the value of the name variable into the string.    
//to redeclare the variable name, you can use the let or var keyword instead of const. For example, you can write let name = "Alice"; or var name = "Alice"; to declare the variable name. However, keep in mind that using let or var allows for reassignment of the variable, while const does not.
//or isolate using export{}
const greeting = `Hello, ${name}!`; 
// what is advantage of using template literals over traditional string concatenation in JavaScript?
// Template literals provide a more readable and concise way to create strings with embedded expressions. They allow for multi-line strings and make it easier to include variables and expressions within the string without needing to use the + operator for concatenation.

//tuples
const tuple: [string, number] = ["Alice", 30];
console.log(tuple);
//read only tuple
const readOnlyTuple: readonly [string, number] = ["Bob", 25];
//readOnlyTuple.push("Charlie", 35); // Error: Property 'push' does not exist on type 'readonly [string, number]'.    

console.log(readOnlyTuple);

// opttioonal tuple
const optionalTuple: [string, number?] = ["Charlie"];
console.log(optionalTuple);

//rest tuple ?  

const restTuple: [string, ...number[]] = ["David", 1, 2, 3];
console.log(restTuple);


//what is rest tuple in typescript?
// A rest tuple in TypeScript is a tuple type that allows for an arbitrary number of elements of a specific type to be included after a fixed set of elements. It is defined using the spread operator (...) followed by the type of the elements that can be repeated. In the example above, the restTuple variable is defined as a tuple that starts with a string and can have any number of numbers following it. This allows for flexibility in the number of elements while still maintaining type safety for the specified types.

//objects
const person = {
    name: "Alice",  
    age: 30,
    isStudent: false
};
console.log(person.name); // Accessing object property using dot notation
console.log(person["age"]); // Accessing object property using bracket notation

//object. decleare a type for the object
let student15: {
    name: string;
    age: number;
    isStudent: boolean;
    id:number;
};
student15 = {
    name: "Bob",
    age: 25,
    isStudent: true,
    id:1234
};
console.log(student15.name); // Accessing object property using dot notation
console.log(student15["age"]); // Accessing object property using bracket notation 


//json object creation
/*
{
"key1": "value1",
"key2": "value2",
"key3": "value3"    
}

*/
//stringify and parse json object       
const car = {
    name: "Toyota",
    model: "Camry",
    year: 2020
};
const jsonObj = JSON.stringify(car);
console.log(jsonObj); // {"name":"Toyota","model":"Camry","year":2020}
const data=
`{
"name":"Pizza",
"size":"Large",
"price":12.99
}`;
const jsObj = JSON.parse(data);
console.log(jsObj); // { name: 'Pizza', size: 'Large', price: 12.99

// what is destructuring variables?
// Destructuring variables in TypeScript allows you to extract values from arrays or objects and assign them to individual variables in a more concise way. 
let numbers: number[] = [10, 20, 30];
let [first, second, third] = numbers;
console.log(first); // 10
console.log(second); // 20
console.log(third); // 30       
let employee = {
    name: "John",
    age: 30,
    position: "Developer"
};
let { name: employeeName1, age: employeeAge, position: employeePosition } = employee;
//let { employeeName, employeeAge, employeePosition } = employee; // Destructuring with the same variable names
console.log(employeeName1); // John
console.log(employeeAge); // 30
console.log(employeePosition); // Developer 