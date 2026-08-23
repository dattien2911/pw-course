var: không bị block scope, gán lại được
let: bị block scope, gán lại value được
const: bị block scope, không gán lại value được

biến toàn cục: khai báo ngoài function
biến cục bộ: khai báo và chỉ sử dụng trong function

vòng lặp if - else if: kiểm tra theo điều kiện theo thứ tự

ternary operator (toán tử điều kiện, viết ngắn gọn cho if else):
điều kiện ? true : false
ex: age >= 18 ? "Người lớn" : "Trẻ con"

ngoài ra có thể lồng nhau:
ex: score >= 90 ? "A" :
    score >= 80 ? "B" :
    score >= 70 ? "C" : "D and under"

for ... in loop
loop qua các props của object:
ex: 
const person = {
    name: "Dat",
    age: "25",
    city: "HCM"
}
for (let key in person) {
    console.log(key + ": " + person[key])
}
output:
name: Dat
age: 25
city: HCM

forEach: method của Array để thực thi một function cho mỗi phần tử, không dùng được với break hoặc continue
ex: 
const nums = [1, 2, 3, 4, 5];
nums.forEach(function(value) {
    console.log(value)
})
output: 
1
2
3
4
5

utils function: là các hàm có sẵn trong Javascript
string utils: hàm xử lý chuỗi
array utils: hàm xử lý mảng

trim(): bỏ khoảng trắng 2 đầu
trimStart(): bỏ khoảng trắng bên trái
trimEnd(): bỏ khoảng trắng bên phải

toUpperCase(): chữ thường thành chứ hoa
toLowerCase(): chữ hoa thành chữ thường

include("text"): kiểm tra chuỗi có chứa chuỗi con "text" hay không

split(): cắt chuỗi
ex: 
let email = "dattien2911@gmail.com"
email.split("@")
["dattien2911", "gmail.com"]

let text = "Hello Javascript World"
text.split(" ")
["Hello", "Javascript", "World"]

replace("text", "replace"): thay thế chuỗi con
ex:
let text = "Hello World"
text.replace("World", "Javascipt")
"Hello Javascript"

push(): thêm phần tử vào cuối mảng
let arr = [1, 2, 3]
arr.push(4)
[1, 2, 3, 4]

unshift(): thêm vào đầu mảng
arr.unshift(0)
[0, 1, 2, 3, 4]

splice(<vị trí>, <số phần tử cần xoá>, <số phần tử cần thêm> )
arr.splice(2, 0, 1.5)
[0 , 1, 1.5, 2, 3, 4]

arr.splice(2, 1, 1.5)
[0 , 1, 1.5, 3, 4]


pop(): xoá phần tử cuối
arr.pop()
[0 , 1, 1.5, 3]

shift(): xoá phần tử đầu
arr.shift()
[1, 1.5, 3]

find(): trả về phần tử đầu tiên hợp lệ
ex: 
let arr = [1, 2, 3, 4]
let first = arr.find(num => num > 1)
// 2

filter(): trả về tất cả phần tử
ex: 
let arr = [1, 2, 3, 4]
let all = filter arr.find(num => num > 1)
// 2 3 4

map(): tạo mảng mới bằng cách áp dụng một hàm lên từng phần tử
const arr = [1, 2, 3, 4]
let doubled = arr.map(num => num * 2)
console.log(doubled)
2 4 6 8

sort(): sắp xếp mảng 
let arr = [ 5, 1, 8, 9, 0, -1]
arr.sort((a, b) => a - b ) //sắp xếp tăng dần
// [-1, 0, 1, 5, 8, 9]
arr.sort((a, b) => b - a ) //sắp xếp giảm dần
// [9, 8, 5, 1, 0, -1]