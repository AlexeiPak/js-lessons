// let array = [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

// for (i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0) {
//         console.log(array[i])
//     }
// }


// -------2---------
// let summ = 0
// let num = 1
// for (i = 0; i < 100; i++){
//     summ +=num++
//     }
// console.log(summ)



// let array = [-2, -1, 0, 1, 2, 3, 4, 5]
// let arr1 = []
// let arr2 = []

// for (i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0) {
//         arr1.push(array[i])
//     } else {
//         arr2.push(array[i])
//     }
// }
// console.log(arr1);
// console.log(arr2);


// -----------3-----------

// function cube(number){
//     console.log(number ** 3)
// }
// console.log(cube(3))


// ----------------4------------

// function parityСheck(number1) {
//     if (number1 > 0) {
//         console.log('+++')
//     } else { console.log('---') }

// }
// parityСheck(-3)


// ---------------5----------------

let arr = ['a', 'b', 'c', 'd']
let summ = ''
for (i = 0; i < arr.length; i++){
    summ = summ + '+' + arr[i]
}

console.log(summ)