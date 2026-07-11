//1
function multiply(a, b) {
    console.log(a, b);
}
multiply(1, 2);
multiply("Playwright", "TypeScript")

//2
function findMin(a, b, c) {
    let min = a;
    if (b < min) {
        min = b;
    }
    if (c < min) {
        min = c;
    }
    return min;
}
console.log(findMin(1, 5, 9));
console.log(findMin(-6, -9, -100));

//3
const talentStudent = [];

function getTopStudent(studentList, threshold) {
    for (let i = 0; i < studentList.length; i++) {
        if (studentList[i].score >= threshold) {
            talentStudent.push(studentList[i].name);
        }
    }
    return talentStudent;
}

const studentList = [
    {
        name: "Dat",
        score: 9,
    },
    {
        name: "Dieu",
        score: 10,
    },
    {
        name: "Loc",
        score: 8,
    },
    {
        name: "Phuoc",
        score: 8.9,
    },
    {
        name: "Hieu",
        score: 7,
    },
]
console.log(`Talent students list: ${getTopStudent(studentList, 9)}`)

//4
function calculateInterest(principal, rate, years) {
    let total = principal + (principal * rate * years) / 100;
    return total;
}

console.log(calculateInterest(10000000, 5, 2));