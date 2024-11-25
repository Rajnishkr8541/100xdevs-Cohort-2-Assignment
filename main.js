// scripting vs compiled langiage
// strict vs dynamic languages
// single threaded nature of JS
// simple primitive in JS (number, booleans, string)
// complex primitives in JS (arrays, object)
// function in javascript
// practise problem solving
// callback function, event loop, callback queue
// callback hell and promises
// synchronous and Asynchronous
// DOM






// let firstName = "Rajnish";
// let age=19;
// let married = true;

// console.log("My Name is "+firstName+ "age is "+age +" and married "+married);

//CONDITIONAL OPERATOR

// if(married== true){
//     console.log(firstName+ " is Married");
// }else{
//     console.log(firstName+ " is not married");
    
// }

//LOOPS


/*let number = 0;

for(let i =0; i<1000; i++){
    number = number+i;
     
}
console.log(number);*/



// write a program to greet a person given their first and last name.
// also greets based on their gender

// let firstName = "Rajnish";
// let lastname = "Kumar";
// let gender = "male";

// console.log("Hii, Welcome "+firstName+lastname);

/*if(gender === "male"){
     console.log("Hii, Welcome "+firstName+lastname);

}else{
   console.log("Hii, Welcome "+firstName);

}*/

// Write a program that count from 0-1000 and prints (for loop)

/*let count =1000;

for(let i=0; i<=count; i++){
    console.log(i);
    
}*/


//ARRAYS

/*let age = [12,13,14,15,16,17,18,19,20]

for(let i=0; i<age.length; i++){
    if(age[i] % 2 ==0){
        console.log(age[i]);
    }
}*/


//OBJECTS

/*const user ={
    firstName: "Rajnish",
    gender : "male"
}
console.log(user["firstName"]);
*/


//FUNCTION

/*function sum(a, b){
    return a+b;
}
const value = sum(2,3);

console.log(value);*/



//FUNCTIONS

/*function sum (a, b, fntocall){
    let result =a+b;
    fntocall(result);
}

function displayResult(data){
    console.log("sum of the result is: "+data);
    
}

function displayResultPassive(data){
    console.log("Result of the sum is: "+data);
    
} 


// you are only allowed to call one function after this
// How will you displayResult of a sum

const ans = sum(1,2,displayResult);

this is callback function (displayResult)
callback Parameter:
    1. sum : 3 parameter a,b,fntocall

using callback for display the result */


// setTimeout Function

/*
function greet(){
    console.log("hii everyone!");
}
setTimeout(greet, 3000)
*/

// setInteval function

/*function greet(){
    console.log("hii");
}
setInterval(greet, 2000);*/



//Assignment

// 1. Create a counter in javascript (counts down from 30 to 0)
// 2. Calculate the time it takes between a setTimeout call and the inner function actually running
// 3. create a terminal clock(HH:MM:SS)


//1
/*
function countDown(number){
    if(number<0){
        return number;
    }
    console.log(number);

    setTimeout(()=>countDown(number-1),1000)
    
}
countDown(30);
*/

// STRING

// Length
/*
function getLength(str){
    console.log(str.length);
    
}
getLength("Rajnish Kumar");*/

// indexOf
/*
function findIndexOf(str, target){
    console.log(str.indexOf(target));
    
}
findIndexOf("Rajnish Kumar", "Kumar")
*/

//lastIndexOf
/*
function findLastIndexOf(str, target){
    console.log(str.lastIndexOf(target));
    
}
findLastIndexOf("Rajnish Kumar Bhagat", "Bhagat")
*/

//slice
/*
function getSlice(str, start, end){
    console.log(str.slice(start, end));
    
}
getSlice("Hello World", 0,7)
*/

//replace
/*
const str = "Rajnish Kumar";
console.log(str.replace("Kumar", "Bhagat"));
*/

//split = split your string an array through given your delimiter
/*
const str="My name is Rajnish Kumar";
const value=str.split(",")
console.log(value);
*/

//trim (its cut the start and end of space)
/*
const str = "   Rajnish kumar    "
console.log(str.trim());
*/

//toUpperCase
/*
const str = "Rajnish Kumar";
console.log(str.toUpperCase());
*/

//toLowerCase
/*
const str = "Rajnish Kumar";
console.log(str.toLowerCase());
*/



//NUMBERS


//parseInt

/*
function newParseInt(value){
    let result = parseInt(value);
    console.log(result)
}
newParseInt("4.5");*/


//parseFloat

/*
console.log(parseFloat("45"))
console.log(parseFloat("45px"))
console.log(parseFloat("4.5"))
*/


//ARRAY

    //push = it is use for add a value end of the array

    /*
    const initialArray = [1, 2, 3];
    initialArray.push(4)
    console.log(initialArray)
    */

    //pop = it is use for remove last value of the array

    /*
    const initialArray = [1, 2, 3];
    initialArray.pop()
    console.log(initialArray)
    */


    //shift = it is use for remove the front value of the array

    /*
    
    const initialArray = [1, 2, 3];
    initialArray.shift()
    console.log(initialArray)
*/


//unshift = it is use for add the front value of the array

    /*                  
    const initialArray = [1, 2, 3];
    initialArray.unshift(0);
    console.log(initialArray)
    */

//concat = it is use to merge the two array 

    /*const firstArray = [1, 2, 3];
    const secondArray = [4, 5, 6];

    console.log(firstArray.concat( secondArray))
*/
