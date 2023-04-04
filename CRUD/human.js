const { v4: uuidv4 } = require('uuid');

class Human{
    static humanList = [];
    // static index = 0;
    constructor( name, age, role){
        this._name = name;
        this._age = age;
        this._role = role;
        // this.id = ++Human.index;
        this.id = uuidv4();
    }

    // create
    add(){
        Human.humanList.push(this);
    }

    // read
    show(){
        // console.log(`id: ${this.id}, , name: ${this.name}, age: ${this.age}, role: ${this.role}`);
        console.log(Human.humanList);
    }

    // update
    get name(){
        return this._name;
    }
    set name(newName){
        this._name = newName;
    }

    get age(){
        return this._age;
    }
    set age(newAge){
        this._age = newAge;
    }

    get role(){
        return this._role;
    }
    set role(newRole){
        this._role = newRole;
    }

    // delete
    delete(){
        const indexHuman = Human.humanList.findIndex(human=>{
            return human.id === this.id;
        })
        Human.humanList.splice(indexHuman, 1);
    }
}

module.exports = Human;
