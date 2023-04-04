const Teacher = require('./teacher');
const Student = require('./student');
const Human= require('./human');

let A = new Human('df',12, 'student')
let B = new Human('df',20, 'teacher')
let C = new Human('df',25, 'teacher')

A.add()
B.add()
C.add()
A.show()

console.log('------------------------------------------------------------');

A.delete()
A.show();

console.log('------------------------------------------------------------');

C.name='ểwre'
C.role='student'
C.show()







