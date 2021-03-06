/************************************************************************
Iterate Through an Array with a For Loop
===============================================
Summing the elements in an array
===============================================

const myArr = [2, 3, 4, 5, 6];
let total = 0;

for (let num = 0; num <= myArr.length - 1; num++){
    total += myArr[num];
}
console.log(total);

************************************************************************/


/************************************************************************
Nesting For Loops
===============================================
Find the product of all the numbers in the sub-arrays of arr
===============================================

function multiplyAll(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j]
        }
    }
    return product;
}
console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));

************************************************************************/


/************************************************************************
Iterate with JavaScript Do...While Loops
===============================================
push only the number 10 to myArray, and i will be equal to 11 when your code has finished running.
===============================================

const myArray = [];
let i = 10;

do {
    myArray.push(i);
    i++;
} while (i < 10)
console.log(myArray);

************************************************************************/


/************************************************************************
Generate Random Whole Numbers within a Range
===============================================
returns a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.
===============================================

function randomRange(myMin, myMax) {
    let randomNum = Math.random() * (myMax - myMin + 1)
    return Math.floor(randomNum) + myMin;
}
console.log(randomRange(10, 40))

************************************************************************/


/************************************************************************
Generate Random Whole Numbers within a Range
===============================================
returns a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.
===============================================


const persons = [
    {
        username: "shubham",
        age: 22,
        comments: ["Good", "Awesome"]
    },
    {
        username: "Ankit",
        age: 24,
        comments: ["Fine", "Decent"]
    },
    {
        username: "Arvind",
        age: 26,
        comments: ["Awesome", "Handsome"]
    },
    {
        username: "Ashwani",
        age: 28,
        comments: ["Very Good", "Lovely"]
    }
];

function checkProfile(personname,theprops)
{
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === personname) {
            if (prop in contacts[i]) {
                return contacts[i][theprops];
            } else {
                return "No such property";
            }
        }
    }
    return "No such contact";
}

// let p = checkProfile(
//     "Kristian", "lastName",
//     "Sherlock", "likes")
console.log(
    "Sherlock", "likes"
);
************************************************************************ */

const arrKeyFunc = () => {
    const arr = [1, 2, , 4, 5]

    const arrkeys = arr.keys()

    for (const arrkey of arrkeys) {
        console.log(arrkey);
    }
}
// arrKeyFunc()

const lastIndexOfFunc = () => {

    const array = ['a', 'b', 'b', 'c', 'a', 'd'];
    const Searchelement = 'd';

    console.log(array.lastIndexOf(Searchelement));
}
lastIndexOfFunc()

