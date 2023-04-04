const Human= require('./human');
class Student extends Human{
    constructor(id, name, age, position, classRoom){
        super(id, name, age, position);
        this.classRoom = classRoom;
    }

}

module.exports = Student;