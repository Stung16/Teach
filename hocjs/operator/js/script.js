/*
1.Toán tử số học

 +, -, *, %, **

 ++,-- phép tăng và phép giảm
*/

// var a1 = "10";
// var b1 = 20;
// var c1 = a1 + b1;
// // chuỗi + số = chuỗi
// console.log(c1);

// ép kiểu

// var a = "10";
// var b = 20;
// // var c = parseInt(a) + parseInt(b);
// var c = +a + +b
// // mẹo
// console.log(c);

// var count = 1,
//   s;

// // count++; count = count + 1
// s = count++;
// console.log(s);

// ## khi ta gắn nó vào 1 biến khác thì nó sẽ trả về kết quả sau hoặc trước khi tăng

// ++count: trả về kết quả sau khi tăng khi gán sang biến mới
// count++: trả về kết quả trước khi tăng khi gán sang biến mới

// var count = 1;
// var total = count++ + ++count + count++;
// console.log("total : " + total);

/*
##toán tử logic
>, <, >=, <=, ==, ===, !=, !==

*/

// var a = 10;
// var b = "10";
// var c = +a === +b;
// console.log(c);

// var number = 10;
// if ((10 = number)) {
//   console.log("đúng");
// } else {
//   console.log("sai");
// }

// toán tử kết hợp lý luận (&&, ||, !) còn toán tử 3 ngôi

// var a = 10;
// // && tất cả các vế p đúng nếu có bất kỳ vế nào sai thì là sai hết
// var b = a <= 0 || a >= 5;
// // || 1 trog tất cả các vế  đúng  thì là đúng hết
// console.log(!b);

// var a = 10
// var b = a >= 5 || a > 10

// console.log(b);

// toán tử gán

// var a = 20;

// a += 10;//a = a + 10
// a -=10; //a = a - 10
// a *= 10 //a = a * 10
// a /= 10 // a = a / 10
// a %= 10 // a = a % a
// console.log(a);

// var str = "Kiều Tùng";
// str += " đẹp trai";
// console.log(str);

//toán tử 3 ngôi

// cú pháp": điềukienlogic ? giá trị đúng : giá trị sai

// var a = 10;
// // var b = a >= 10 ? "abc" : "cde";
// // console.log(b);

// var total = 1 + 2 + 3 + a >= 10 ? 5 : 10 + 4 + 5;
// console.log(total);

//toán tử nullish(??)
// hiểu đơn giản là check undefine hoặc null
// var a = null;
// var b = a !== null && a !== undefined ? a : "abc";
// console.log(b);

//viết lại toán tử nulllish bằng toán tử 3 ngôi

// Truthy,Falsy

/*
falsy:0;"",false,undefine,null,NaN
truý : nhận những giá trị còn lại

nếu mà ta khai báo 1 biến mà không gắn cho nó 1 kiểu dữ liệu nào thì giá trị trả về 
của nó là undefine

*/
// var a;
// if (NaN) {
//   console.log("là trusy");
// } else {
//   console.log("là Falsy");
// }



// toán tử &&

var a = 0
var b = a && "abc"
console.log(a);



// toán tử ||
//  ngược lại vs với &&