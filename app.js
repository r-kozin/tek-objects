// class Animal {
//   constructor(eyes, legs, isAwake, isMoving) {
//     this.eyes = eyes;
//     this.legs = legs;
//     this.isAwake = isAwake;
//     this.isMoving = isMoving;
//     // return is not needed because the new object is returned by default
//   }
//   sleep() {
//     this.isAwake = false;
//   }
//   wake() {
//     this.isAwake = true;
//   }
//   sit() {
//     this.isMoving = false;
//   }
//   walk() {
//     this.isMoving = true;
//   }
//   speak(sound) {
//     console.log(sound);
//   }
//   toString(animal = "Animal") {
//     return `This ${animal} has ${this.eyes} eyes and ${this.legs} legs. It ${
//       this.isAwake ? "is" : "is not"
//     } awake, and ${this.isMoving ? "is" : "is not"} moving.`;
//   }
// }

// class Cat extends Animal {
//   constructor(fur, isAwake, isMoving) {
//     super(2, 4, isAwake, isMoving);
//     this.fur = fur;
//   }
//   speak() {
//     super.speak("Meow...");
//   }
//   toString() {
//     return super.toString("Cat");
//   }
// }

// class Dog extends Animal {
//   constructor(fur, isAwake, isMoving) {
//     super(2, 4, isAwake, isMoving);
//     this.fur = fur;
//   }
//   speak() {
//     super.speak("Woof!");
//   }
//   toString() {
//     return super.toString("Dog");
//   }
// }

// class Cow extends Animal {
//   constructor(hair, isAwake, isMoving) {
//     super(2, 4, isAwake, isMoving);
//     this.hair = hair;
//   }
//   speak() {
//     super.speak("Moo.");
//   }
//   toString() {
//     return super.toString("Cow");
//   }
// }
// class Human extends Animal {
//   constructor(name, age, location, occupation) {
//     super(2, 2);
//     this.name = name;
//     this.age = age;
//     this.location = location;
//     this.occupation = occupation;
//   }
//   speak() {
//     super.speak("Hello there!");
//   }
//   toString() {
//     return super.toString("Human");
//   }
// }
// const Jared = new Human("Jared", 25, "New York", "Web Developer");

// console.log(Jared);
// Jared.speak();
// console.log(Jared.toString());

class Learner {
    #grades = [];
    #name = {
      first: "",
      last: ""
    };
    #age;

    constructor(firstName, lastName, age) {
      this.#name.first = firstName;
      this.#name.last = lastName;
      this.#age = age;
    }
    get name() {
      return this.#name.first + " " + this.#name.last;
    }
    get age() {
      return this.#age;
    }
    addGrades(...grades) {
      grades = grades.flat(2);
      console.log(grades);
      grades.forEach((grade) => {
        grade = Number(grade);

        if (grade >= 0 && grade <= 100) {
          this.#grades.push(grade);
        }
      });
    }
    get grades() {
      return this.#grades;
    }
    get average() {
      const arr = [...this.#grades];
      arr.sort((a, b) => a - b).shift();

      return arr.reduce((a, b) => a + b) / arr.length;
    }
  }

  const learner2 = new Learner("Jimmy", "Jammy", 18);
  console.log(learner2.name + " " + learner2.age);
  learner2.addGrades([[95, 87, 66], "98", "100", -60, 88, 89, [100, 76, 88], 105]);

  console.log(learner2.grades);
  console.log(learner2.average);