*** Discussion of let,var and const**
const accountID = 144553
let accountName = "John Doe"
var accountBalance = 1000
accountCity="Delhi"

****Here console.table is used to display data in tabular form*****
console.table({accountID,accountName,accountBalance,accountCity})

**Note** 
- Prefer not to use var, use let and const generally.
-Because of issue in block scope & functional scope. More precisely 
-if var is defined and value is not assigned then JS gives output as undefined.
-"use strict";if wriiten in js then it treats all JS codes as newer version.

*** Undefined and null***
-undefined means value is not defined.
-null is a standalone value.
-null is object
-typeof(undefined) = undefined
-typeof(null) = object

*** Datatype conversion****
#Primitive Datatype:1.String
                    2. Number
                    3. Boolean
                    4. null
                    5. undefined
                    6. Symbol
let score ="33";
let value = Number(score)
console.log(typeof score);
console.log(typeof value);

-means we can convert using this but sometimes like in below exmple we will get NaN means not a number.
"33"=33
"33abcz"=NaN

****Math.random()***

console.log(Math.random());
console.log(Math.random()*10 +1);
Note:- Math.random() generates random values but we have *plied by 10 and add 1 to get value>0.

Important: Now we have to get random value in a given range, so for this we will initialize two values let min & max.

const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1)) + min);


**Date and Time in JS**

let mydate = new Date();  // typeof(mydate)= Object

console.log(myDate); // this will give date but not be more readable

console.log(myDate.toString()); // this will give date in better way in string form.

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.to);

*****Time stamp****

***Array in JS****

let myArray=[0,1,2,3];
let secondArray=[0,1,2,3];

console.log(myArray.splice(0,1,2,5,8)); //myArray.slice(1,3);
console.log(myArray);

Note:- Here splice make changes in the real array.

 **Objects in JS**

 const Employee = {
    name:"Shobhit",

 }

 const Employee =  {
    name:"Shobhit",
    email:"shobhit@123",
    salary:10000000,
    age:22
}

console.log(Employee.name);
console.log(Employee["email"]);

// Object.freeze(Employee);
Employee.email="shobhit@1234";
console.log(Employee.email);

 Employee.greet = function(){
    console.log(`Hello ${this.name}`);
}

console.log(Employee.greet())
