const spArr = [10,20,30,40];

function spreadTest(a,b,c,d){
    return a+b+c+d;
}
console.log(spreadTest(...spArr))