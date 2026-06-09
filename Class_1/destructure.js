const arr4=[1,2,3];
const[v1,,v3]=arr4;

// const v1=arr4[0];
// const v2=arr4[1];
// const v3=arr4[2];

console.log(v1,v3);

const Student={
    id:"23=54391-3",
    name:'Maruf',
    cgpa:'2.43',
    dept: 'Computer scicence',
    major:{
        mj1='se',
        mj2='is'
    }
}

// const{id,first_name, cgpa, dept}=Student;  //through undefined
// console.log(id,first_name,cgpa,dept);

const{id, name:first_name, cgpa, dept,major:{mj1,mj2}}=Student;
console.log(id,first_name,cgpa,dept,mj1,mj2);