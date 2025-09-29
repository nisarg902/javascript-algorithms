 let arr = [-10, -20, -30, -40, -50];
let value = -Infinity;

function largevalue(arr) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > value) {
            value = arr[i];
           }
    }
    return value;
}

let result = largevalue(arr);
console.log(result);


//  let arr = [-10, -20, -30, -40, -50];
// let value = -Infinity;

// function largevalue(arr) {
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > value) {
//             value = arr[i];
//            }
//     }
//     return value;
// }

// let result = largevalue(arr);
// console.log(result);