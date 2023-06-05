class Governor {
    name =  'name';
    age = 0;
    elected = 2023;
    veto(bill){
        console.log(`${this.name} has vetoed ${bill}`);
    }
}

class Person{
    constructor (name, age, hairColor, eyeColor, isAsleep = false) {
        this.name = name;
        this.age = age;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.isAsleep = isAsleep;
    }
    speak(){
        console.log("Hello!");
    }
    eat(){
        console.log(`${this.name} shovels the food into their mouth.`);
    }
    sleep(){
        this.isAsleep = true;
        console.log(`${this.name} has gone to sleep. Try not to wake them!`);
    }
    wake(){
        this.isAsleep = false;
        console.log(`${this.name} has awoken from their slumber. Let them drink coffee before you talk to them.`);
    }

}

class PostalWorker extends Person{
    constructor(name, age, hairColor, eyeColor, route, isAsleep = false){
        super(name, age, hairColor, eyeColor, isAsleep)
        this.route = route;
    }
    deliverMail(recipient){
        console.log(`${this.name} has delivered mail to ${recipient}`);
    }
}

class Chef extends Person{
    constructor(name, age, hairColor, eyeColor, isAsleep = false){
        super(name, age, hairColor, eyeColor, isAsleep)
    }
    cook(meal){
        console.log(`${this.name} has cooked ${meal} to perfection. Enjoy!`);
    }
}

const pw1 = new PostalWorker('Dave', 25, 'brown', 'blue', 6)
const pw2 = new PostalWorker('Dan', 27, 'black', 'green', 5)
const c1 = new Chef('Dak', 30, 'blue', 'brown', true)
const c2 = new Chef('Darrell', 35, 'green', 'brown', false)

console.log(pw1);
console.log(pw2);
console.log(c1);
console.log(c2);

pw1.deliverMail('Jack');
pw2.deliverMail('Jerome');
c1.cook("eggs");
pw2.sleep();
c1.wake();

console.log(pw2);
console.log(c1);

// ================================================================= Optional =================================================================

const accountsList = [];

class BankAccount {
    constructor(ownerName, balance){
        this.ownerName = ownerName;
        this.balance = balance;
        accountsList.push(this);
        this.acctNum = accountsList.length;
    }
    deposit(amount){
        this.balance += amount;
        console.log(`Deposit: ${amount}. New balance: ${this.balance}`);
    }
    withdraw(amount){
        this.balance -= amount;
        console.log(`Withdrawal: ${amount}. New balance: ${this.balance}`);
    }
}

class CheckingAccount extends BankAccount {
    constructor(ownerName, balance, overDraftEnabled){
        super(ownerName, balance);
        accountsList.push(this);
        this.acctNum = accountsList.length;
        this.overDraftEnabled = overDraftEnabled;
    }
    withdraw(amount){
        if ((this.overDraftEnabled == true) && (this.balance - amount <= 0)){
            console.log("Overdraft protection is enabled - Transaction cannot be completed.");
        }
        else{
            this.balance -= amount;
            console.log(`Withdrawal: ${amount}. New balance: ${this.balance}`);
        }
    }
}

class SavingsAccount extends BankAccount {
    constructor(ownerName, balance){
        super(ownerName, balance);
        accountsList.push(this);
        this.acctNum = accountsList.length;
    }
    withdraw(){
        console.log("Unfortunately, withdraws are not allowed from a Savings Account");
    }
}

const chase = new BankAccount('chase', 500000000);
const jpm = new BankAccount('jpm', 213791263);

console.log(jpm);
console.log(chase);

const checking = new CheckingAccount('checking', 134, true);
const savings = new SavingsAccount('savings', 50000);

savings.deposit(20000);
checking.deposit(20000);
checking.withdraw(50000000);
checking.withdraw(500);