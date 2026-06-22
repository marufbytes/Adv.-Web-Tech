let sti1 = true;
function getUserList() {
    return new Promise((resolve, reject) => {
        if (sti1) {
            setTimeout(() => {
                resolve("user 1")
            }, 2000);
        }

        else {
            reject("something went wrong");
        }
    });
}
let sti2 = false;
function greetUser() {
    return new Promise((resolve, reject) => {
        if (sti2) {
            setTimeout(() => {
                resolve(
                    " welcome"
                );

            }, 3000)
        }
        else {
            reject("greet user went wrong")
        }
    });
}

const p = greetUser();
p.then((msg)=>{
    console
})