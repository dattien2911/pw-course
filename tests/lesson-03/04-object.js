//1
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021,
};
console.log(car.year);

//2
const person = {
    name: "Dat",
    address: {
        street: "Pham Van Dong",
        city: "Ho Chi Minh",
        country: "Viet Nam",
    }
};
console.log(person.address.street);

//3
const student = {
    name: "Dat",
    grades: {
        math: 10,
        english: 9,
    }
};
console.log(student["grades"]["math"]);

//4
const settings = {
    volume: 50,
    brightness: 70,
};
settings.volume = 80;
console.log(settings)

//5
const bike = {};
bike.color = "blue";
console.log(bike);

//6
const employee = {
    name: "Dat",
    age: 25,
}
delete employee.age
console.log(employee)

//7
const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"],
}
console.log(school.classB[1])