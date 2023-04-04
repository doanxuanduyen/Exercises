const Human= require('./human');
class Teacher extends Human{
    
    constructor(name, age, position, major){
        super(name, age, position);
        this.major = major;
    }

    show(){
        
    }
}

module.exports = Teacher;