class Parent {

    constructor (name, age) {
        this.name = name;
        this.age = age;
        this.lastName = "Proshyn";

    }

    greeting() {
        console.log('Hi')
    }

    tellName(){
        console.log(`My name is ${this.name}`)
    }

    tellAge(){
        console.log(`I'm  ${this.age} this year old`)
    }

    tellJobTitle(){
        console.log(`My job title is ${this.jobTitle}`)
    }
}

class Child extends Parent {

    greeting (){
        console.log('Hey')
    }

    goToSchool(){
        console.log('I like go to school')
    }

}

const parent = new Parent ('Igor', 29);
const child = new Child ('Maria', 8);

parent.greeting()
parent.tellName()
parent.tellAge() 
parent.tellJobTitle()  
console.log('\n')
child.greeting()
child.tellName()
child.tellAge() 
child.tellJobTitle()  