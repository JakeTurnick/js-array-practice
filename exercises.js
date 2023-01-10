// ---------------------
// Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
// ---------------------

// Put your answer below -------------------------


(function() {
    let result = [];
    function triplets(str, int) {
        for (let i = 0; i < int; i++) {
            result.push(str);
        }
    }
    console.log('triplets', result);
    return result;
})();


// -----------------------------------------------

// ---------------------
// Define a function that takes an array and reverses all the values in an array
// The function should not mutate the original array
// ---------------------

// Put your answer below -------------------------


(function() {
    let backwards = [];
    function reverse(arr) {
        for (i = arr.length - 1; i >= 0; i--) {
            backwards.push(arr[i]);
        };
        console.log('backwards', backwards);
        return backwards;
    }
})();


// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes all falsy values from the array
// ---------------------

// Put your answer below -------------------------


(function() {
    function onlyTrue(arr) {
        let truther = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]) {
              truther.push(arr[i])
            };
        }
        console.log(truther);
        return truther;
    }
})();


// -----------------------------------------------

// ---------------------
// Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array
// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------


(function() {
    let nested = {};
    function toObj(arr) {
        for (let i = 0; i < arr.length; i++) {
            let currArr = arr[i];
            nested[currArr[0]] = currArr[1];
        }
    }
    console.log(nested)
    return nested;
})();


// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes duplicate values
// [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// ---------------------

// Put your answer below -------------------------


(function() {
    function removeDup(arr) {
        let copy = [];
        for (let i = 0; i < arr.length; i++) {
            if (copy.includes(arr[i])) {
                arr.splice(i, 1);
                i -= 1;
            } else {
                copy.push(arr[i]);
            };
        }
        console.log('arr', arr);
        return(arr)
    }
})();


// -----------------------------------------------

// ---------------------
// Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
// [1,2,3,4] and [1,2,3,4] should return true
// [1,2,3,4,5] and [1,2,3,4] should return false
// [1,2,3,4] and [1,2,3,4,4] should return false
// [1,2,3,4] and [1,4,3,2] should return true
// ---------------------

// Put your answer below -------------------------


(function() {
    function trueDups(arr1, arr2) {
        let check = true;
        for (let i = 0; i < arr1.length; i++) {
            if (!arr2.includes(arr1[i])) {
                check = false;
            }
        }
  		for (let i = 0; i < arr2.length; i++) {
            if (!arr2.includes(arr1[i])) {
                check = false;
            }
        }
        console.log(check);
        return check;
    }
})();


// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// ---------------------
// Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
// [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
// [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
// DO NOT USE Array.prototype.flat()
// ---------------------

// Put your answer below -------------------------


(function() {

})();






// -----------------------------------------------

// ---------------------
// Define a function that takes an array and splits it into parts of size i
// ([1, 2, 3, 4], 2) should return [[1, 2], [3, 4]]
// ([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]]
// ---------------------

// Put your answer below -------------------------










// -----------------------------------------------
