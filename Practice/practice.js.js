class Animal {
    constructor(name,sound){
        this.name=name;
        this.sound=sound;
    }

    bark(){
        console.log(this.sound);
    }

    showDetails(){
        console.log(`name: ${this.name}`)
    }
}

class Panda extends Animal{
    constructor(name, sound, fabFood){
        super(name,sound)
        this.fabFood=fabFood;
    }
}