var a=10;
function sayHello(){
    console.log("Hello ")
}

const anycNature=()=>{       //asyncronous nature like setTimeout(), setInterval(), these are asyncronous function
    setTimeout(()=>{
        console.log('This tis a aync fucntion');
    },5000);  //blocking 5 second, will go to queue as it will need 5000 times
}
const anycNature2=()=>{       //asyncronous nature like setTimeout(), setInterval(), these are asyncronous function
    setTimeout(()=>{
        console.log('This tis a aync fucntion for 3 sec');
    },3000);  //blocking 5 second, will go to queue as it will need 5000 times
}

const saymeow=()=>{
    console.log("Meow");
}
const saymeow2=()=>{
    console.log("Meow");
}

sayHello();
anycNature();
anycNature2();
saymeow();
saymeow2();