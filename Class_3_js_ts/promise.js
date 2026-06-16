let sti1 = true;

function getUserList(){
    return new Promise((resolve, reject)=>{
        if(sti1){
            setTimeout(() => {
                resolve([{id:1,name:"mr. tom"}, {id:2,name:"mr. jerry"}])
            }, (2000));
        }
        else{
            reject("Something wrong")
        }
    })
}

let sti=true;
function greetUseer(){
    return new Promise((resolve,reject)=>{
        resolve
    })
}