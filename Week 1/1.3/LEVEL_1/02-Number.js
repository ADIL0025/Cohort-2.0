function explainParseInt(value){
    console.log("Original Value:", value);
    let result = parseInt(value);
    console.log("Result:", result);
 }
// Example Usage for parseInt
explainParseInt("10");
explainParseInt("105px");
explainParseInt("3.14");

function explainParseFloat(value){
    console.log("Original Value:", value);
    let result = parseFloat(value);
    console.log("After parseFloat:", result);
}
// Example Usage for parseFloat
explainParseFloat("10");
explainParseFloat("105px");
explainParseFloat("3.14");