// ✅ Developer Log
console.log("JavaScript Developer");
console.log("JavaScript Developer");
console.log("JavaScript Developer");

// ✅ Math Operations
const num1 = 10;
const num2 = 20;

const total = num1 + num2;
const product = num1 * num2;

console.log("Sum:", total);
console.log("Multiply:", product);

// ✅ Add Function (Reusable)
function addNumbers(a, b) {
    console.log(`Sum: ${a + b}`);
}

addNumbers(num1, num2);
addNumbers(2, 3); // also reused below

// ✅ Variable Update
let x = 10;
x = 20;
console.log("Updated x:", x);

// ✅ Full Name
let firstName = "nisarg";
let lastName = 1;
let fullName = firstName + " " + lastName;
console.log("Full Name:", fullName);

// ✅ Array Practice
let arr = [2, 3, 4, 5, 6, 7, [8, 9, 0]];
console.log("Array:", arr);
console.log("Sum of arr[0] + arr[1]:", arr[0] + arr[1]);
console.log("Nested Value arr[6][1]:", arr[6][1]);

// ✅ Deep Array Access
let brr = ["akshay", 7, [5, 10, [2, 10]]];
console.log("Deep Nested Value:", brr[2][2][1]);

// ✅ Object Practice
let obj = {
    a: 8,
    name: "Nisarg",
    arr: [1, 2, 3, 4]
};

console.log("obj.a:", obj.a);
console.log("obj.name:", obj.name);
console.log("obj.arr:", obj.arr);



// ✅ Square Function
function square(n) {
    return n * n;
}

console.log("Square of 2:", square(2));
console.log("Square of 9:", square(9));

// ✅ Voter Eligibility Function
function voter(age) {
    if (age < 0) {
        console.log("Invalid input");
    } else if (age >= 18) {
        console.log("Eligible");
    } else {
        console.log("Not eligible");
    }
}

voter(19);
voter(18);
voter(-1);

// ✅ Even Check Function
function findEven(n) {
    if (n % 2 === 0) {
        console.log(`${n} is even`);
    } else {
        console.log(`${n} is not even`);
    }
}

findEven(4);
findEven(7);
