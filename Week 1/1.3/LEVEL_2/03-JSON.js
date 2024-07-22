// function jsonMethods(jsonString){
//     console.log("Original String:", jsonString);

//     // Parsing JSON string to JavaScript Object
//     let parsedObject = Json.parse(jsonString);
//     console.log("After JSON.parse:", parsedObject);

//     // Stringifying JavaScript Object to JSON string
//     let jsonStringified = JSON.stringify(parsedObject);
//     console.log("After JSON.stringify():", jsonStringified);
// }

// // Example Usage for JSON Methods
// const sampleJsonString = '{"Key": "Value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';

// jsonMethods(sampleJsonString)


// const users = '{"name": "John", "age": 30, "city": "New York"}';

// const user = JSON.parse(users);
// console.log(user["name"]);

const user1 = {
    name: "Adil",
    age: 21,
    gender: "male"
}

const finalString = JSON.stringify(user1);
console.log(finalString)