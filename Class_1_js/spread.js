const spArr=[10,20,30,40];

function spreadTest(a,b,c,d){
    return a+b+c+d;
}
console.log(spreadTest(...spArr));

//rest
let r1=10;
let r2=20;
let r3=30;
let r4=40;

function restTest(num1, ...num){
    console.log(typeof(num));
    let result =0;
    num.forEach(val=>
    {
        result+=val;
    }
    )
    console.log(num1);
    console.log(result);
}

restTest(r1,r2,r3,r4);


let arr5=[10,20,30,4,50];
const [val1,val2, ...rest]=arr5;
console.log(val1,val2,rest);

