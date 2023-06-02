// const adventurer = {
// 	name: "Timothy",
// 	hitpoints: 10,
// 	belongings: ["sword", "potion", "Tums"]
// }

// console.log(adventurer.belongings)
// console.log(adventurer.belongings[0])

// for (let i=0; i < adventurer.belongings.length; i++) {
// 	console.log(adventurer.belongings[i]);
// }

// const adventurer = {
// 	name: "Timothy",
// 	hitpoints: 10,
// 	belongings: ["sword", "potion", "Tums"],
// 	companion: {
// 		name: "Velma",
// 		type: "Bat"
// 	}
// }
// console.log(adventurer.companion)
// console.log(adventurer.companion.name)
// console.log(adventurer.companion.type)

// const adventurer = {
// 	name: "Timothy",
// 	hitpoints: 10,
// 	belongings: ["sword", "potion", "Tums"],
// 	companion: {
// 		name: "Velma",
// 		type: "Bat",
// 		companion: {
// 			name: "Tim",
// 			type: "Parasite"
// 		}
// 	}
// }

// console.log(adventurer.companion.companion.type);

// const adventurer = {
// 	name: 'Timothy',
// 	hitpoints: 10,
// 	belongings: ["sword", "potion", "Tums"],
// 	companion: {
// 		name: "Velma",
// 		type: "Bat",
// 		companion: {
// 			name: "Tim",
// 			type: "Parasite",
// 			belongings: ["SCUBA tank", "Rogan josh", "health insurance"]
// 		}
// 	}
// }

// console.log(adventurer.companion.companion.belongings[2]);

// const movies = [
//   { title: "Tokyo Story" },
//   { title: "Paul Blart: Mall Cop" },
//   { title: "L'Avventura" },
// ];
// console.log(movies[0]);
// console.log(movies[0].title);
// for (let i = 0; i < movies.length; i++) {
//   console.log(movies[i].title);
// }

// const foo = {
//   someArray: [1, 2, 3],
// };
// foo.someArray[0]; // 1

// const foo = {
//     someObject: {
//         someProperty: 'oh hai!'
//     }
// };
// foo.someObject.someProperty; // oh hai!

// const foo = {
//     someMethod:()=>{
//         console.log('oh hai');
//     }
// };

// foo.someMethod();// logs 'oh hai!'

// const foo = [{someProperty:'weee'}, 2, 3];

// console.log(foo[0].someProperty);

// const foo = [
//     ["0,0", "0,1", "0,2"],
//     ["1,0", "1,1", "1,2"],
//     ["2,0", "2,1", "2,2"]
// ];

// foo[1][2]; //1,2

// const foo = [
//     1,
//     "hi",
//     ()=>{
//         console.log('fun');
//     }
// ];

// foo[2]();

// class Character {
//   // going on an adventure
//   greet () {
//     console.log('Hi!');
//   }
// }

// const me = new Character();
// const you = new Character();

// me.greet();
// you.greet();

// class Character {
//     greet (otherCharacter) {
//       console.log('Hi ' + otherCharacter + '!');
//     }
//   }
//   const me = new Character();
//   const you = new Character();
//   me.greet('you');
//   you.greet('me');

// class Character {
//     greet (otherCharacter) {
//       console.log('Hi ' + otherCharacter + '!');
//     }
//     smite () {
//       console.log('I smite thee you vile person!');
//     }
//   }

//   const me = new Character();
//   const you = new Character();

//   me.greet('bob');
//   me.smite();
//   you.greet('bob');
//   you.smite();

// class Character {
//     greet (otherCharacter) {
//       console.log('Hi ' + otherCharacter + '!');
//     }
//     smite () {
//       console.log('I smite thee you vile person!');
//     }
//   }

//   const me = new Character();
//   const you = new Character();
//   console.log(me);
//   console.log(you);

// class Character {
//     constructor () {
//       this.legs = 2;
//       this.arms = 2;
//       this.eyes = 'hazel';
//       this.hair = 'gray';
//     }
//     greet (otherCharacter) {
//       console.log('Hi ' + otherCharacter + '!');
//     }
//     smite () {
//       console.log('I smite thee you vile person!');
//     }
//   }
//   const me = new Character();
//   console.log(me);

// class Character {
//   constructor(name, age, eyes, hair) {
//     this.legs = 2;
//     this.arms = 2;
//     this.name = name;
//     this.age = age;
//     this.eyes = eyes;
//     this.hair = hair;
//   }
//   greet(otherCharacter) {
//     console.log("Hi " + otherCharacter + "!");
//   }
//   smite() {
//     console.log("I smite thee you vile person!");
//   }
// }

// const me = new Character(
//   "Cathy the Miraculous",
//   29,
//   "brown",
//   "locs of dark brown"
// );
// console.log(me);


// class Character {
//     constructor (name, age, eyes, hair, lovesCats = false, lovesDogs) {
//       this.legs = 2;
//       this.arms = 2;
//       this.name = name;
//       this.age = age;
//       this.eyes = eyes;
//       this.hair = hair;
//       this.lovesCats = lovesCats;
//       this.lovesDogs = lovesDogs || false;
//     }
//     greet (otherCharacter) {
//       console.log('Hi ' + otherCharacter + '!');
//     }
//     smite () {
//       console.log('I smite thee you vile person!');
//     }
//   }
//   const you = new Character('Cathy the Miraculous', 29, 'brown', 'locs of dark brown', true, true);
//   const me = new Character('Wendel the Wavy', 32, 'brown', 'wavy blonde');
//   console.log(me);
//   console.log(you);

// me.hair = 'supernova red';
// console.log(me);

// class Character {
//     constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
//       this.legs = 2;
//       this.arms = 2;
//       this.name = name;
//       this.age = age;
//       this.eyes = eyes;
//       this.hair = hair;
//       this.lovesCats = lovesCats;
//       this.lovesDogs = lovesDogs || true;
//     }
//     greet (otherCharacter) {
//       console.log('Hi ' + otherCharacter + '!');
//     }
//     setHair (hairColor) {
//       this.hair = hairColor;
//     }
//     smite () {
//       console.log('I smite thee you vile person!');
//     }
//   }
//   const you = new Character('Cathy the Miraculous', 29, 'brown', 'locs of dark brown', true, true);
//   const me = new Character('Wendel the Wavy', 32, 'brown', 'wavy blonde');
//   console.log(you);
//   you.setHair('red');
//   console.log(you);

// class Character {
//     constructor (name, age, eyes, hair, lovesCats = false, lovesDogs) {
//       this.legs = 2;
//       this.arms = 2;
//       this.name = name;
//       this.age = age;
//       this.eyes = eyes;
//       this.hair = hair;
//       this.lovesCats = lovesCats;
//       this.lovesDogs = lovesDogs || false;
//     }
//     greet (otherCharacter) {
//       console.log('Hi ' + otherCharacter + '!');
//     }
//     classyGreeting (otherClassyCharacter) {
//       console.log('Greetings ' + otherClassyCharacter.name + '!');
//     }
//     setHair (hairColor) {
//       this.hair = hairColor;
//     }
//     smite () {
//       console.log('I smite thee you vile person!');
//     }
//   }
//   const you = new Character('Cathy the Miraculous', 29, 'brown', 'locs of dark brown', true, true);
//   const me = new Character('Wendel the Wavy', 32, 'brown', 'wavy blonde');
  
//   me.classyGreeting(you);
//   you.classyGreeting(me);

class Character {
    constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
      this.legs = 2;
      this.arms = 2;
      this.name = name;
      this.age = age;
      this.eyes = eyes;
      this.hair = hair;
      this.lovesCats = lovesCats;
      this.lovesDogs = lovesDogs || true;
    }
    greet (otherCharacter) {
      console.log('Hi ' + otherCharacter + '!');
    }
    classyGreeting (otherClassyCharacter) {
      console.log('Greetings ' + otherClassyCharacter.name + '!');
    }
    setHair (hairColor) {
      this.hair = hairColor;
    }
    smite () {
      console.log('I smite thee you vile person!');
    }
  
  }
  
//   const hobbit = new Character('Mr Baggins', 33, 'brown', 'black')
//   console.log(hobbit);

//   class Hobbit extends Character {
//     steal () {
//       console.log("Let's get away!");
//     }
//     greet (otherCharacter) {
//       console.log(`Hello ${otherCharacter}.`);
//     }
//     smite () {
//       super.smite();
//       this.steal();
//     }
//   }
  
//   const frodo = new Hobbit('Frodo', 30, 'brown', 'black')
//   frodo.smite();

class Hobbit extends Character {
    constructor (name, age, eyes, hair) {
      super(name, age, eyes, hair);
      this.skills = ["thievery", "speed", "willpower"];
    }
    steal () {
      console.log("Let's get away!");
    }
    greet (otherCharacter) {
      console.log(`Hello ${otherCharacter}.`);
    }
    smite () {
      super.smite();
      this.steal();
    }
  }
  
  const frodo = new Hobbit('Frodo', 30, 'brown', 'black')
  console.log(frodo);

  class Wizard extends Character {
    constructor(name,age, eyes, hair, powers, stamina, potions) {
        super(name, age, eyes, hair);
        this.powers = powers;
        this.stamina = stamina;
        this.potions = potions;
    }
    attack(otherCharacter) {
        console.log(`${this.name} the Wizard attacked ${otherCharacter}.`);
    }
    usePotion(potionName){
        console.log(`${this.name} the Wizard uses a potion of ${potionName}... It is extremly effective!`);
    }
}

const wizguy = new Wizard('Merlin', 107, 'blue', 'white', ['fire', 'freeze', 'fly'], 100, ['invisibility', 'strength', 'speed']);

console.log(wizguy);
wizguy.attack(frodo.name);
wizguy.usePotion(wizguy.potions[0]);

class Tome {
    constructor (maker, spellType, serialNum) {
      this.maker = maker;
      this.spellType = spellType;
      this.serialNum = serialNum;
    }
    cast () {
      console.log('Casting a spell!');
    }
  }
  
  const fireTome = new Tome('Merlin', 'Fire', 1);
  console.log(fireTome);

  class Factory {
    constructor (maker) {
      this.maker = maker;
      this.tomes = [];
    }
    generateTome (spellType) {
      const newTome = new Tome(this.maker, spellType, this.tomes.length);
      this.tomes.push(newTome);
    }
    findTome (index) {
      return this.tomes[index];
    }
  }
  
  const merlin = new Factory('Merlin');
  merlin.generateTome('Fire');
  merlin.generateTome('Water');
  merlin.generateTome('Earth');
  merlin.generateTome('Air');
  console.log(merlin);
  console.log(merlin.findTome(0));

  const gandalf = new Factory('Gandalf');
gandalf.generateTome('Light');
gandalf.generateTome('Dark');
console.log(gandalf);
console.log(gandalf.findTome(0));