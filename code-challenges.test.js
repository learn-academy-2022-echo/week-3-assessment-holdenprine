// ASSESSMENT 3: Coding Practical Questions with Jest

// const { boolean } = require("yargs")



// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe("fibOutput",()=>{
    it("returns a new array of a given length containing numbers of the Fibonacci sequence",()=>{
        expect(fibOutput(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
        expect(fibOutput(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// b) Create the function that makes the test pass.

//PSUEDO CODE:
// 1. create a function called fibOutput that takes a number
// 2. set input value to the length of an array
// 3. populate said array with the fib algo

const fibOutput = (number) => {
   var fibArray = new Array()
   fibArray[0] = 1  
   
    let a = 0, b = 1, c = number
    for(let i = 1; i < number; i++) { 
      
        c = a + b
        
        a = b
        
        b = c

        fibArray.push(c)
    }
    return fibArray 

}



// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("lowToHighOddNums",()=>{
    it("returns a new array of only odd numbers ordered from lesat to greatest",()=>{
        expect(lowToHighOddNums(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(lowToHighOddNums(fullArr2)).toEqual([-823, 7, 23])
    })
})

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


// b) Create the function that makes the test pass.
//Pseudo Code
//1. Declare a function called lowToHighOddNums that takes the input of an array
//2. Iterate through the array and determine which values are numbers and odd
//3. use .sort method to take array and sort from lowest to highest for both arrays

const lowToHighOddNums = (array) => {
    // for(let i = 0; i < array.length; i++) {
    //     if(array[i] === typeof number) {
    //         if(array[i] % 2 === 0) {
    //             return array[i]
    //         }else{
    //             i++
    //         }
    //     } else if(array[i] !== typeof number){
    //         array.shift()
    //     }
    // }
    // var newArray = array.sort(function(a,b) {
    //     return a-b
    // })
    // return newArray

    //Another method
    // var newArray = array.filter((value)=>{
    //     if(value === typeof number) {
    //         return value
    //     }
    // })
    // return newArray.sort(function(a,b){
    //     return a-b
    // })
}
//BLOCKERS
// Ran out of time to find the solution on this one. Was able to sort numbers from lowest to highest but ran into issues filtering out numbers from the array.


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("sumArrayBuilder",()=>{
    it("returns a new array of incrementing sums of each element",()=>{
        expect(sumArrayBuilder(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(sumArrayBuilder(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(sumArrayBuilder(numbersToAdd3)).toEqual([])
    })
})

const numbersToAdd1 = [2, 4, 45, 9]
// Expected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []


// b) Create the function that makes the test pass.
//Pseudo Code
//1. Create a function called sumArrayBuilder that takes an array as an input
//2. use .map to iterate through the given array.
//3. take each indexes value and add it while adding that value into the new array
//4. return that new array

const sumArrayBuilder = (array) => {
    
  for(let i = 1; i < array.length; i++) {
    array[i] = array[i] + array[i - 1]
  }
  return array  
   
}
