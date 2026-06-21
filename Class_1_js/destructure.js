const arr4 = [1, 2, 3];
const [v1, , v3] = arr4;

console.log(v1, v3); // 1 3

const Student = {
    id: "23-54391-3",
    name: 'Maruf',
    cgpa: '2.43',
    dept: 'Computer science',
    major: {
        mj1: 'se',
        mj2: 'is'
    }
};

const { id, name: first_name, cgpa, dept, major: { mj1, mj2 } } = Student;
console.log(id, first_name, cgpa, dept, mj1, mj2);
// 23-54391-3 Maruf 2.43 Computer science se is