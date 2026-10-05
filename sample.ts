console.log("Hello, TypeScript!");
//let const var
let username:string ="Chandan Kumar";
//let reassigned

let browser= "Chrome";
browser = "Firefox";
console.log(browser);

//const not reassigned
const url="https://gooogle.com";


//var is used in old version of js syntax
//var. is not recommended to use in modern js syntax due to type safety issues and scoping problems 
//type inference
let user:string = "user1";
let age1:any = 29;
let isloggedin:boolean = true;
//bigint
let bigIntValue:bigint = 1234567890123456789012345678901234567890n;

//null and undefined
let user2:string="";
console.log(user2); // 0
let nullValue:null = null;
let undefinedValue:undefined = undefined;// currently no value assigned to it
let errorMessage:string | null = null; // can be string or null
//40 minutes

//any
let anyValue:any = "Hello, TypeScript!";
//unknown type
let unknownValue:unknown = "Hello";
unknownValue = 42; // can be reassigned to any type
unknownValue = "test"; 
if (typeof unknownValue === "string") {
	console.log(unknownValue.toUpperCase());
}
console.log(5==5); // true
if(age1 == "29"){
    console.log("Loose check passed");
}
if(age1 === "29"){
    console.log("Strict equality check passed");
}
else{
    console.log("No match found");
}

// can be reassigned to any type
//array
let numbers:number[] = [1, 2, 3, 4, 5];
let strings:string[] = ["apple", "banana", "cherry"];
let browsers:Array<string>|string[] = ["Chrome", "Firefox", "Safari"];
console.log(browsers);
browsers.pop();
console.log(browsers);
browsers.push("Edge");// Add an element at the end
console.log(browsers);  
browsers.unshift("Edge");// Add an element at the beginning
console.log(browsers);
browsers.shift();// Remove the first element
console.log(browsers);      
browsers.splice(1, 1,"test");    // Remove the second element
console.log(browsers);  


console.log(browsers.length); // 3


//collections set and map
//let browser2= new Set(["Chrome", "Firefox", "Safari"]);
//let setInit: Set<string> = new Set<string>();
let browser3= new Set();
browser3.add("Chrome");
browser3.add("Firefox");
browser3.add("Safari");// Add an element
console.log(browser3);
browser3.delete("Firefox");// Remove an element
console.log(browser3);
console.log(browser3.has("Chrome"));


//map
let browserMap: Map<string, string> = new Map<string, string>();
browserMap.set("Chrome", "Google Chrome");
browserMap.set("Firefox", "Mozilla Firefox");
browserMap.set("Safari", "Apple Safari");       
let user4= new Map();
user4.set("admin", "Chandan");
user4.set("user", "John");
console.log(user4);
console.log(user4.get("admin"));    


//if
//if else
//if elseif else    

//loops
for (let i = 0; i < 5; i++) {
    console.log(i);
}
//for of loop
let fruits:string[] = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    console.log(fruit);
}

//for in loop
let person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
    const personKey = key as keyof typeof person;
    console.log(key + ": " + person[personKey]);
}

//while loop
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

//functions
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(5, 10));

function greet(): void {
    console.log("Hello!");
}

    greet();    

//arrow function
const multiply = (a: number, b: number): number => {
    return a * b;
};
console.log(multiply(5, 10));

//default parameters
function greetUser(name: string = "Guest"): void {
    console.log(`Hello, ${name}!`);
}
greetUser(); // Hello, Guest!
greetUser("Chandan"); // Hello, Chandan!

//rest parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15

//destructuring
let [first, second] = fruits;
console.log(first); // apple
console.log(second); // banana
        