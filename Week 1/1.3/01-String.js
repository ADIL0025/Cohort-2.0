// function getLength(str) {
//     console.log("Original String:", str)
//     console.log("Length of String:", str.length)
// }
// getLength("Hello World")





// ----------- Index Of -----------
// function findIndexof(str, target){
//     console.log("Original String:", str)
//     // console.log("Index of String:", str.indexOf(target))
//     console.log("Index of String:", str.lastIndexOf(target))
// }
// findIndexof("Hello World World World", "World")




// ---------- Slice -----------
// function getSlice(str, start, end){
//     console.log("Original String:", str)
//     console.log("Slice of String:", str.slice(start, end))
// }
// getSlice("Hello World", 0, 5) // prints only from 0 - 4 index its no include the 5th index

// // other way of doing the same
// const value = "Adil Ahmad"
// let ans = value.slice(2, 6)
// let ans2 = value.substr(2, 6)
// console.log(ans)
// console.log(ans2)

// ------------ Replace -----------
// const str = "Hello World";
// console.log(str.replace("World", "JavaScript")); // If the world is not there it simply return the original string

// -------- OR--------
// function replaceString(str, target, replacement) {
//     console.log("Original String:", str);
//     console.log("Replaced String:", str.replace(target, replacement));
// }
// replaceString("Hello World", "World", "JavaScript");

// -------- Split -----------
// const value = "Hi,my,name,is,Adil";
// const words = value.split(",");

// console.log(words);

// function splitString(str, separator) {
//     console.log("Original String:", str);
//     console.log("After Split:", str.split(separator));
// }
// splitString("Hello World", " ");

// -------- Trim -----------   and it's only trim from starting and ending its not trim the space between the two string, values etc;
// const value = "    Hello World    ";
// console.log("Original String:", value);
// console.log("After Trim:", value.trim());

// function trimString(str){
//     console.log("Original String:", str);
//     console.log("After Trim:", str.trim());
// }
// trimString("    Hello    World    ");


// -----------------toUpperCase-----------------------------
// function toUpper(str){
//     console.log("Original String:", str);
//     console.log("Upper String:", str.toUpperCase());
// }
// toUpper("hello world");

// -----------------toLowerCase-----------------------------
// function toLower(str){
//     console.log("Original String:", str);
//     console.log("Lower String:", str.toLowerCase());
// }
// toLower("HELLO WORLD");
