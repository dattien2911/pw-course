//1
let num = 100;
let sum = 0;

for(let i = 0; i <= num; i++) {
    sum += i
};
console.log(sum);

//2
for(let i = 2; i <= 9; i++) {
    console.log(`Bảng cửu chương ${i}`)
    for(let j = 1; j <= 10; j++){
        let result = i*j;
        console.log(`${i} x ${j} = ${result}`);
    }
};

//3
const max = 99;
const arr = []
for(let i = 1; i <= max; i++){
    if(i % 2 != 0){
        arr.push(i);
    }
};
console.log(`Array of odd number from 1-99: [${arr}]`);

//4
for(let i = 1; i <= 10; i++) {
    console.log(`user${i}@example.com`);
};

//5
const firstRevenue = {
    month: 2,
    total: 100,
}
const revenueEachMonth = firstRevenue.total / firstRevenue.month;
const revenueOf12Month = revenueEachMonth * 12;
console.log(`Revenue of 12 month: ${revenueOf12Month}`);