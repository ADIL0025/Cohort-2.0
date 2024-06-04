//var a = 1;
//let a = 1;
/* const a = 1;
a = 2;
console.log(a); */

//-------Data Types-------
/* let firstname = "Adil";
let age = 21;
let isMarried = true;

console.log("this person name is " + firstname + " and their age is " + age)
console.log("This person name is")
console.log(firstname); 

if (isMarried) {
    console.log(firstname + " is married")
} else {
    console.log(firstname + " is not married")
}
*/

//---------Loops--------
/* let answer = 0;
for(let i = 0; i<=1000; i++){
    answer = answer + i;
}
console.log(answer);

*/

//--------Arrays------

/* const personArray = ["Adil","Harkirat","Kirat"];

console.log(personArray[0])
console.log(personArray[1])
console.log(personArray[2])



const ages = [21,22,23,24,25,26];

for(let i =0; i < ages.length; i++){
    if (ages[i] % 2 == 0) {
        console.log(ages[i])
    }
}
*/
//---------Objects-------
/* const personArray = ["Harkirat", "Raman", "Priya"];
const genderArray = ["Male", "Male", "Female"];

for(let i = 0; i <personArray.length; i++){
    if(genderArray[i] == "Male"){
        console.log(personArray[i]);
    }
} 

const user1 = {
    firstname : "Adil",
    gender : "male"
}

console.log(user1["gender"])

const allusers = [{
    firstname:"Adil",
    gender:"male"
}, {
    firstname:"Pratik",
    gender:"male"
},{
    firstname:"Priya",
    gender:"female"    
}]

for(let i = 0; i<allusers.length;i++){
    if(allusers[i]["gender"]=="male"){
        console.log(allusers[i]["firstname"])
    }
}
*/

//------------Functions-----------
/*
function sum(a,b) {
    const sumValue = a + b;
    return sumValue;
}

const value = sum(1,2)
console.log(value);
*/

//-------Callbacks Function--------------
function calculateArithmetic(a,b,type) {
    if (type == "sum") {
        return a+b;
    }
    if (type == "minus") {
        return a-b;
    }
}

const value = calculateArithmetic(1,2,"sum");
console.log(value);