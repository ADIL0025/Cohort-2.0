//-------------------- Push---------------- Pushed at very last of the elements
function pushExample(arr, element){
    console.log("Original Array:", arr);
    arr.push(element);
    console.log("Updated Array:", arr);
}
pushExample([1,2,3], 4);


//-----------Pop------------- Poped the value at the very last
function popExample(arr){
    console.log("Original Array:", arr);
    arr.pop();
    console.log("Updated Array:", arr);
}
popExample([1,2,3,4,5]);

//-----------shift------------- poped the value at the very first
function shiftExample(arr){
    console.log("Original Array:", arr);
    arr.shift();
    console.log("Updated Array:", arr);
}
shiftExample([1,2,3,4,5]);

//-----------unshift------------- put something at the very first
function unshiftExample(arr, element){
    console.log("Original Array:", arr);
    arr.unshift(element);
    console.log("Updated Array:", arr);
}
unshiftExample([1,2,3,4,5], 0);

//-----------concat-------------
function concatExample(arr1, arr2){
    console.log("Original Array:", arr1);
    console.log("Original Array:", arr2);
    let arr3 = arr1.concat(arr2);
    console.log("Updated Array:", arr3);
}
concatExample([1,2,3,4,5], [6,7,8,9,10]);

//-----------ForEach-------------
function forEachExample(arr){
    console.log("Original Array:", arr);
    arr.forEach(function(item, index){
        console.log(item, index);
    });
}
forEachExample([1,2,3,4,5]);

//-----------Map-------------
function mapExample(arr){
    console.log("Original Array:", arr);
    let arr2 = arr.map(function(item){
        return item * 2;
    });
    console.log("After Map:", arr2);
}
mapExample([1,2,3,4,5]);

//-----------Filter-------------
function filterExample(arr){
    console.log("Original Array:", arr);
    let arr2 = arr.filter(function(item){
        return item > 3;
    });
    console.log("After Filter:", arr2);
}
filterExample([1,2,3,4,5]);

//-----------Find-------------
function findExample(arr){
    console.log("Original Array:", arr);
    let result = arr.find(function(item){
        return item > 3;
    });
    console.log("After Find:", result);
}
findExample([1,2,3,4,5]);

//-----------Sort-------------
function sortExample(arr){
    console.log("Original Array:", arr);
    
    arr.sort(function(a, b) {
        return a - b;
    });
    console.log("After Sort:", arr);
}
sortExample([5,2,3,4,1]);
