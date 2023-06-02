class Cat {
    constructor(name, age, breed) {
        this.name = name;
        this.age = age;
        this.breed = breed;
    }
    speak(){
        console.log("...Meow");
    }
    scratch(){
        console.log(`${this.name} scratches the post...`);
    }
    info(){
        console.log(`*Upon inspecting the nametag* Name: ${this.name}, Age: ${this.age}, Breed: ${this.breed}`);
    }
}

class Pirate {
  constructor(name, age, rank) {
    this.name = name;
    this.age = age;
    this.rank = rank;
  }
  speak() {
    console.log("YARRRR!");
  }
  attack(otherPirates){
    console.log(`${this.name} fires the cannons at ${otherPirates}!`);
  }
  eat(food){
    console.log(`Yo ho ho! I've got ${food} to eat!`);
  }
}

const felix = new Cat('Felix', 3, 'tabby');
const lola = new Cat('Lola', 2, 'hairless');
console.log(felix);
console.log(lola);
felix.speak();
felix.scratch();
felix.info();
lola.speak();
lola.scratch();
lola.info();

let jollyRoger = [new Pirate('Jimmy', 20, 'Deckhand'), new Pirate('Daniel', 50, 'Captain'), new Pirate('Will', 15, 'Cook')];
let blackPearl = [new Pirate('David', 20, 'Deckhand'), new Pirate('Marcus', 55, 'Captain'), new Pirate('Tyler', 35, 'Chef')];

//this didn't need to be a function, I originally had it as just two for loops, but I wanted to try it out to make sure I could do it

function loopArray(array){
for (let i = 0; i < array.length; i++) {
    console.log(array[i].name, array[i].age, array[i].rank);
}
}

loopArray(jollyRoger);
loopArray(blackPearl);