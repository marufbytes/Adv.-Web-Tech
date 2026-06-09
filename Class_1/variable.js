//var -> function scope, can re-assign, can re-declare

var name="alice";
var name='John';
console.log(name);

if(true){   //Can declare outside block
    var num=10;
}
// console.log(num);

let a = 30;
// let a = 50;   //can't re-declare
a=50;   //can modify
console.log(a);

if(true){
    let b= 40;
    console.log(b);
}
// console.log(b);   // can't declare outside the block


let c;
var d;

const pi=3.1416;
console.log(pi);


const arr=[1,2,4];
// const arr=[1,2,4,5];  //can't do this
arr.push(5);
arr.forEach((num)=>{
    console.log(num);
})


function sum(a,b){
 console.log(a+b);
}

const sub=function(a,b){
 console.log(a-b);
}


const multiplication = (a,b)=>
{
    console.log(a*b);
}
const dividsion=(a,b)=>a/b;

const greet = name =>{
    console.log(`say ${name}`)
}

const greet2 = (name='Students') =>{
    console.log(`say ${name}`)
}

sum(100,200);
sub(400,200);
multiplication(10,10);
console.log(dividsion(10,100));
greet('Justin');
greet2();


var num1=10;
console.log(typeof(num1));

console.log(typeof(greet));

var num3 = null;
console.log(typeof(num3))   //null is object

console.log("123a"-123);

