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
function countdown(number){
    if(number<0){
        return number;
         }
         console.log(number);
         

    setTimeout(()=>countdown(number-1),1000);

}
countdown(30);
*/

const startTime = Date.now();

setTimeout(()=>{
    const endTime = Date.now();

    const actual = endTime-startTime;

    console.log("expected time 2000");
    console.log(`actul time ${actual}`);
    
},2000)



