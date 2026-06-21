const myArr = [1, 2, 3, 4];
console.log(myArr[2]);

myArr.pop();
console.log(myArr)
console.log(myArr[3])
console.log(myArr.length);
console.log(typeof (myArr));

const person = {
    name: 'mr. meow',
    age: 20,
    gender: 'male',
    isBangladeshi: true,
    address: {
        road: "2",
        house: '7',
        city: 'Dhaka',
        zip: 'Dhaka-16'
    },

    info: function () {
        console.log(`name:${this.name}, age: ${this.age}, gender: ${this.gender}`)
    },

    info2: () => {
        console.log(`name:${this.name}, age: ${this.age}, gender: ${this.gender}`)
    },

    info3: () => {
        const infor4=() => {
            console.log(`name:${this.name}, age: ${this.age}, gender: ${this.gender}`)
        }
        infor4();
    }
}

console.log(person.name);
console.log(person.city)  //undefined
console.log(person.address);
console.log(person.address.city);
console.log(person["name"]);

person.info();
person.info2();  //Arrow function dosen't work with "this" keyword
person.info3();


//for, while, do while, for each, for of, for in