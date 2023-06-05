class Hamster {
    constructor(name) {
        this.owner = '';
        this.name = name;
        this.price = 15;
    }
    wheelRun(){
        console.log("squeak squeak");
    }
    eatFood(){
        console.log("nibble nibble");
    }
    getPrice(){
        return this.price;
    }
}

class Person{
    constructor(name){
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getWeight(){
        return this.weight;
    }
    greet(otherPerson){
        console.log(`Hello there ${otherPerson.name}!`);
    }
    eat(){
        this.weight++;
        this.mood++;
        console.log(`${this.name} has eaten.`);
    }
    exercise(){
        this.weight--;
        console.log(`${this.name} has exercised.`);
    }
    ageUp(){
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount += 10;
        console.log(`${this.name} has aged up.`);
    }
    buyHamster(hamster){
        this.hamsters.push(hamster);
        this.mood += 10;
        this.bankAccount -= hamster.getPrice();
        hamster.owner = this.name;
        console.log(`${this.name} has bought a hamster for ${hamster.getPrice()}.`);
    }
}

const ham1 = new Hamster('larry');
const pers1 = new Person('dave')
const pers2 = new Person('dan')


console.log(ham1);
console.log(pers1);

pers1.getName();
pers1.greet(pers2)

pers1.eat();
pers1.eat();
pers1.exercise();
console.log(pers1.getWeight());
console.log(pers1.mood);
pers2.ageUp()
pers1.buyHamster(ham1);
console.log(pers1);
console.log(pers2);