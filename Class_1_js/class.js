class Animal{
    constructor(name, sound){
        this.name=name;
        this.sound=sound;
    }
    bark(){
        console.log(this.sound);
    }
    showDetails(){
        console.log(`name: ${this.name}, sound: ${this.sound}`);
    }

    testAbstract()              //Bujhi nai
    {
        throw console.error;
    }
}

class Panda extends Animal{
    constructor(name,sound,fabFoord){
        super(name,sound);
        this.fabFoord=fabFoord;
    }
    showDetails(){
        super.showDetails();
        console.log(`fab foor: ${this.fabFoord}`)
    }
    getFabFood(){
        return this.fabFoord;
    }
}

const animal = new Animal("Tiger","meow meow");
animal.showDetails();

animal.bark();
// animal.testAbstract();

console.log("Directly accessing", animal.name);

const panda = new Panda("panda",'he he he','bamboo');
panda.showDetails();
panda.bark();
console.log(panda.getFabFood());