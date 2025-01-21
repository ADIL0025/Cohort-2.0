// function findSum(n){
//     let ans = 0;
//     for(let i = 0; i< n; i++){
//         ans = ans + i;
//     }
//     return ans;
// }

// function findSumTill100(){
//     console.log(findSum(100));
// }

// setTimeout(findSumTill100, 1000) // calling a async function
// console.log("Hello World");

/* 
--------------------------->Common async functions are

 ----- (i) setTimeout() , fsreadFile(), fetch()
*/

const fs = require("fs");
// fileSystem module

fs.readFile("a.txt", "utf-8", function(err, data){  // running in replit
    console.log(data); //3rd run
})

console.log("Hello World"); // 1st run
let a = 0;
for(let i = 0; i < 10000000; i++){
    a = a + i;
}

console.log("Hi there 2"); // 2nd run