/*var button = document.querySelector('button');
var box = document.getElementById('changeMe');

function changeColor() { 
    box.style.background = 'green';
}*/

// Single Line Comment

/*
    Double line comment
*/

/*console.log("Hello world next!");
console.log(10+10);*/

// Quotes and colons

/*console.log('Hello "world"');
console.log('Hello \nworld');
console.log('Hello \tworld');
console.log('Hello \rworld');
console.log('Hello \bworld');
console.log('Single quote')
console.log("Double quote")
console.log({name: "John"})*/

// Variable declaration

var myVar = "Hello,";
var age = 24;
var name = "John";
var dob = new Date(2000, 2, 22);
var empty = undefined;
var parent = true;
var balance = 22.34;
var person = {
    name: "John",
    age: 24,
    city: "New York",
    balance: 511.4,
    address: {
        street: "123 Main St",
        city: "Downing State",
        state: "NY"
    }
};

// Variable reassignment
/* console.log(myVar + " " + age + " " + name + " " + dob + " " + empty 
    + " " + parent  + " " + balance + " " + person
);

console.log(typeof myVar);
console.log(typeof age);
console.log(typeof name);
console.log(typeof dob);
console.log(typeof empty);
console.log(typeof person);
console.log(typeof balance);
console.log(typeof parent);
*/

// Naming Variables

/**
 * Cannot contain a space
 * must begin with a letter
 * and _ underscore or $ a dollar sign
 * names are case sensitive
 * cannot use reserved keywords such as const, let, case, and catch
 */

var _myVar = "Hello,";
var $age = 24;
var myName = "John";
var my_dob = new Date(2000, 2, 22);
var myEmpty = undefined;

/*console.log(_myVar + " " + $age + " " + myName + " " + my_dob + " " + myEmpty);*/

// Strings

var myString = "Hello, World!";
var myString2 = "Hello, " + "World!";

/*console.log(myString);
console.log(myString2);
console.log(myString.length);
console.log(myString.toUpperCase());*/

// String concatenation

var firstName = "John";
var lastName = "Doe";
var fullName = firstName + " " + lastName;

/*console.log(fullName);*/

// String methods

/* console.log(myString.charAt(0));
console.log(myString.indexOf("World"));
console.log(myString.slice(7, 12));*/

// Object methods

/* console.log(person.name);
person.name = "Jane";
console.log(person.name);
console.log(person.hasOwnProperty("name"));
console.log(person.hasOwnProperty("age"));
console.log(person.address.city); */

// Booleans

/*var isAdult = true;

console.log(isAdult);

if (isAdult) {
    console.log("You are an adult.");
    } else {
    console.log("You are not an adult.");
    }
*/

// Array functions

/*var names = [
    "John", 
    "Doe", 
    "Test", 
    "Tom"]

console.log(names);
console.log("Size = " + names.length);
console.log(names[0]);

//replacing index 0 with new key value of string 'Jane'
names[0] = "Jane";
//the following adds 'Jane' to the array and ignores 'John'
console.log(names);*/

/* Embedded Java Script */

//console.log("Embedded Java Script + " + `${person.name} ` + `${person.lastName} `);


/* Conditions */

var num = 7;

if (num > 5) {
    console.log("Number is greater than 5");
} else if (num < 5) {
    console.log("Number is less than 5");
}

if ( num > 10) {
    console.log("Number is not greater than 10");
} else if (num < 9)
    console.log("Number is less than 7");

// Functions     

function troubleshooting() {
        const a = 1;
        const b = 1;
    
        let result;
    
        result = "a" + "b";
    
        return result;
    }
    
// Call the function and print the result
console.log(troubleshooting());     