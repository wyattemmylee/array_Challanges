function alwaysHungry (arr1){
    var x = 0;
    for (i=0; i<arr1.length; i++){
        if (arr1[i]=="food"){
            console.log("yummy")
            x ++;
        }
        else if(i==arr1.length-1 && x==0){
            console.log("im hungey")
        }
    }
}
// alwaysHungry([3.14, "food", "pie", true, "food"]);
// alwaysHungry([4, 1, 5, 7, 2]);


function highPass(arr, cutoff) {
    var filteredArr = [];
    for (i=0; i<arr.length; i++){
        if(arr[i]>cutoff){
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
//console.log(result); // we expect back [6, 8, 10, 9]

function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    var count = 0
    // count how many values are greated than the average
    return count;
}

function betterThanAverage(arr) {
    var sum = 0;
    for (i=0;i<arr.length;i++){
        sum = sum + arr[i]
    }
    sum = sum/arr.length
    var count = 0
    for (i=0;i<arr.length;i++){
        if (arr[i]>sum){
            count ++
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
//console.log(result); // we expect back 4

function reverse(arr) {
    for (i=0; i<arr.length/2; i++){
        var temp = arr[i];
        arr[i] = arr[-i];
        arr[-i] = temp;
    }
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]




