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

const p1 = new Person('Timmy');
p1.ageUp();
p1.ageUp();
p1.ageUp();
p1.ageUp();
p1.ageUp();
p1.eat();
p1.eat();
p1.eat();
p1.eat();
p1.eat();
p1.exercise();
p1.exercise();
p1.exercise();
p1.exercise();
p1.exercise();
p1.ageUp();
p1.ageUp();
p1.ageUp();
p1.ageUp();
p1.ageUp();
p1.ageUp();
p1.ageUp();
p1.ageUp();
p1.ageUp();

const h1 = new Hamster('Gus');
p1.buyHamster(h1);

p1.ageUp();
p1.ageUp();
p1.ageUp();
p1.ageUp();
p1.ageUp();
p1.ageUp();
p1.ageUp();
p1.ageUp();
p1.ageUp();
p1.ageUp();
p1.ageUp();
p1.ageUp();
p1.ageUp();
p1.ageUp();
p1.ageUp();
p1.eat();
p1.eat();
p1.exercise();
p1.exercise();