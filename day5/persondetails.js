class Person {
    constructor(id, name, age, gender) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.gender = gender;
    }


    display() {
        console.log(this.id);
        console.log(this.name);
        console.log(this.age);
        console.log(this.gender);
    }
}

let pe = [];

pe.push(new Person(1, 'John', 12, 'male'));
pe.push(new Person(2, 'Mary', 23, 'female'));
pe.push(new Person(3, 'test', 12, 'male'));
pe.push(new Person(4, 'testress', 15, 'female'));

// Problem: Print all the cars
for (let index = 0; index < pe.length; index++){
    pe[index].display();
}