function advance:

ex:
- original:

function add(a, b) {
    return a+ b
}



- function expression:

const add = function (a, b) {
    return a + b
}


- arrow function (lambda function):

const add = (a,b) => {
    return a + b
}


- anonymous function:
note: phải sd ngay hoặc dùng làm callback


DOM: Document object model
- cấu trúc của 1 trang web
- node là 1 phần tử của trang web
các thành phần cảu trang web:
các thẻ <html>, <head>, <body>, <div>, <span>...

selector:
- xpath
- css selector
- playwright selector
playwright selector > css selector > xpath

xpath relative > xpath absolute

playwright basic syntax:
test: unit cơ bản khái báo test
step: unit nhỏ hơn test, khai báo các step của test case