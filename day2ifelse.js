function printHelloWorld(name) {

    console.log("hello world, " + name);
}


let y = "shubham GILL";


printHelloWorld(y)
printHelloWorld("kumar")

printHelloWorld("Abbbhishek")

printHelloWorld("RAJA")



function adnum(num1,num2) {

    console.log(`sum: ${num1 + num2}`);
}
let a = 2;
let b = 3;

adnum(a, b);


function square(n) {

 let  result = n * n;
    // console.log(`${result}`);

    return result;
}
let Value = square(2);
console.log(Value); 

let u = square(9);

console.log(u);



let person;
function voter(person) {
    if (person < 0) {
        console.log("invalid input")
    }

   else if (person >= 18) {
        console.log(" eligible");
    } else {
        console, log("not eligible");
    }
}
voter(19);
voter(18);
voter(-1);

let number;
function findeven(n) {

    if (n % 2 === 0) {
        console.log("even");

    } else {
        console.log("not even");
    }
}

findeven(4);