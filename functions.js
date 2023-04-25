// Write a function that takes a string as an 
// argument and returns the length of the string.
function word(sentence){

    return sentence.length

}
let sentence="School"
console.log(word(sentence));

// Write a function that takes an array of 
// numbers as an argument and returns the sum 
// of all the numbers in the array.
function numerals(digits){
    let sum=0;
    for(let i=0;i< digits.length; i++){
        sum+=digits[i]

    }
    return sum

}
let digits =[71,17,90,79,60]
console.log(numerals(digits));
//using for each

// function numetics(numbers){
//     let add =0;
//     numbers.forEach(x => {
//        add+=numbers[x] 
//     });
//     return add




// }
// let numbers =[65,33,45,90]
// console.log(numetics(numbers))


// Write a function that takes an array of strings
//  as an argument and returns a new array with all 
//  the strings converted to uppercase.

function text(arr){

    return arr.map((word=> word.toUpperCase()))

    }
let arr =["Philis","Melvin","Glenah","Darlene"]
console.log(text(arr));

//using for loop 
// function doIt(array5){
//     let t=[]
//     for(let i=0;i<array5.length; i++){
//         t.push(array5[i].toUpperCase());

//     }
//     return t

// }
// let array5=["ann","serah","annet"]
// console.log(doIt(array5));

// Write a function that takes a number as
//  an argument and returns true if the 
//  number is even and false if it is odd.
function num(arrs){

    for(let i=0;i<arrs.length; i++){
        if (arrs[i]%2==0){

            return "true"
        }
        else{
            return "false"
        }
    }

}
let arrs=[4,23,17,26,3,50,76]
console.log(num(arrs))

// Write a function that takes an array of numbers as an
// argument and returns a new array with all the even 
// numbers from the original array.

let numz =[1,2,3,4,5,6,7,8]
let r=numz.filter(even);
 function even(results){
    return results%2==0

 }
 console.log(r)

 //Without in built method
//  function rewards(numx){
//     let r =[]
//     for(let i=0;i<rewards.length; i++){
//         if(numx[i]%2==0){
//            r.push(numx[i])

//         }

//     }
//     return r

//  }
//  let numx=[4,6,73,23,15,7,91]
//  console.log(rewards(numx))
