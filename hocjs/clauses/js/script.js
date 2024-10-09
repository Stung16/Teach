// // câu lệnh rẽ nhánh

// var a = 10;
// if (!a) {
//   console.log("đúng");
// }
// /*
// Câu lệnh rẽ nhánh có 4 loại

// 1 câu lệnh if thiếu
//     if(dieukien) {
//     nội dung
//     }

// 2 câu lệnh if đủ
//     if(dieukien){
//     nội dụng đúng
//     }else{
//     nội dung sai
//     }

// 3 câu lệnh if nhiều nhanh
//     if (dk1) {
//         nội dung1
//     } else if (dk2) {
//         nội dung 2
//     } else if (dk3) {
//         nội dung3
//     } else {
//         nội dung 4
//     }

// 4 if lồng nhau (1 rắc rối 2 khiến chương trình chạy chậm)

//     if (dk) {
//         if (dk2) {

//         }else {
//         }
//     }else {

//     }

// */

// // let score = 85;

// // if (score >= 90) {
// //     console.log("Grade: A");
// // } else if (score >= 80) {
// //     console.log("Grade: B");
// // } else if (score >= 70) {
// //     console.log("Grade: C");
// // } else if (score >= 60) {
// //     console.log("Grade: D");
// // } else {
// //     console.log("Grade: F");
// // }

// // var a =2;
// // if (a > 10) {
// //   console.log("đây là số lớn hơn 10");
// //   if (a === 11) {
// //     console.log("đây là số 11");
// //   } else {
// //     console.log("đây không p số 11");
// //   }
// // } else {
// //   console.log("ddaay  laf soo be hown10");
// // }

// /*
// Tính lương nhân viên

// var total = 15000000

// tính lương thực hiện khi trừ thuế
// -nếu lương <5tr => thuế 1%
// -nếu lương từ 5tr dến 15tr => thuế 3%
// -nếu lương >15tr => thuế 5%

// #đặ tên lượng thưc hiện khi trừ thuế là :income

// icome: toal - (toal * thuế)/100

// */

// var total = 15000000,
//   tax,
//   income;

// if (total < 5000000) {
//   tax = 1;
// } else if (total > 15000000) {
//   tax = 5;
// } else {
//   tax = 3;
// }

// income = total - (total * tax) / 100;
// console.log(income);

// // Switch case

// var action = "a";

// switch (
//   action // tương đương với so sánh 3 dấu bằng
// ) {
//   case "insert":
//   case "add": // ||
//   case "create":
//     console.log("thêm");
//     break;
//   case "edit":
//   case "update":
//     console.log("sửa");
//     break;
//   case "delete":
//   case "destroy":
//   case "remove":
//     console.log("xoá");
//     break;
//   default:
//     console.log("danh sách");
//     break;
// }

// // var action = "a";
// // if (action === "edit" || action === "update") {
// //   console.log("sửa");
// // } else if (action === "create" || action === "add" || action === "insert") {
// //   console.log("thêm");
// // } else if (action === "delete" || action === "destroy") {
// //   console.log("xóa");
// // } else {
// //   console.log("danh sách");
// // }

// //

// var month = "2";

// if (month % 1 === 0 && month >= 1 && month <= 12) {
//   var days;
//   month = +month; //ép kiểu về number
//   switch (month) {
//     case 2:
//       days = 29;
//       break;

//     case 4:
//     case 6:
//     case 9:
//     case 11:
//       days = 30;
//       break;

//     default:
//       days = 31;
//   }
//   console.log(`Tháng ${month} có ${days} ngày`);
// } else {
//   console.log(`tháng không hợp lệ`);
// }

// /*
// vòng lặp
// 1 vòng lặp biết trước số lần lặp
//     for(bienchay;dkdung;buocnhay)

// 2 vòng lặp khôpng biết trước số lần lặp
// */

// // for (var i = 10; i >= 1; i--) {
// //   console.log("số", i);
// // }

// // TÍnh giá trị biểu thức
// // S = 1 + 2 +3+4+ .... + n

// // var n = 10;

// // var total = 0;
// // for (var i = 1; i <= n; i++) {
// //   total += i;
// // }
// // console.log(total);

// // TÍnh giá trị biểu thức
// // S = 1 + 1*2 + 1*2*3+.....*N

// // var n = 5;
// // var total = 0;
// // var Subtotal = 1;

// // for (var i = 1; i <= n; i++) {
// //   Subtotal *= i;// 1 1*2 1*2*3
// //   total += Subtotal;
// // }
// // console.log(total);

// // var i = 1;
// // var n = 10;
// // while (i < n) {
// //   console.log("abc", i);
// //   i++;
// // }

// // vòng lặp do_while
// // thực hiện chương trình r mới kiểm tra điều kiện

// // var i = 10;
// // do {
// //   console.log("143");
// // } while (i > 10);

// // Hàm
// // định nghĩa hàm => tham số
// // function getMessage(msg) {
// //   console.log(`${msg ? "đúng" : "sai"}`);
// // }
// // // khi gọi hàm  => đối số
// // getMessage(true);
// // getMessage(false);

// function getTotal(a, b = 0) {
//   if (b !== 0) {
//     var total = +a + +b;
//     return total;
//   }
//   return -1;
// }

// getTotal(2, 0);
// getTotal(1, 4);

//expression funcion

// function(){
//     //nội dung
// }

// console.log(getMessage());
// var getMessage = function () {
//   return "Học fullstack";
// };

// IIFE
// (function (text) {
//   console.log("kiều tùng" + text);
// })("duy");

// var sum = function () {
//   console.log(arguments);
//   //   arguments không hoạt động trong arrow func  trong ES6
// };

// sum(5, 6, 7, 8);

// // var sun2 = () => {};

// rest parameter
// var getTotal = function (msg, ...args) {
//     console.log(msg);
//   console.log(args);
// };

// getTotal("tổng", 5, 6, 7, 8);

// var a = function (name) {
//   console.log("duy tùng: " + name);
// };

// var b = a;
// b('fullstack')

// var getA = function (a) {
//   console.log("getA");
//   if (typeof a === "function") {
//     a();
//   }
// };
// var getB = function () {
//   console.log("getB");
// };

// getA(getB); // gọi hàm theo kiểu callback

// var getA = function (fn, ...args) {
//   console.log("getA");
//   if (typeof fn === "function") {
//     fn(...args); // spread
//   }
// };

// getA(
//   function (name, email) {
//     console.log("getC", name, email);
//   },
//   "đạt",
//   "tùng",
// );
//gọi hàm theo kiểu callback

// setTimeout,setInterval

// setTimeout(function(text){
//     console.log("hello",text);
// },5000,'abc')

// var conut = 0;

// var id = setInterval(function () {
//   console.log(`xin chào ${++conut}`);
//   if(conut === 10) {
//     clearInterval(id)
//   }
// }, 1000);

// var a  = 100
// var showMessage = function (name) {
//     a = 69
//   console.log("showMessage");
//   var display = function (text) {
//     console.log("xin chàosoff " + text +' '+name);
//   };
//   display('abcxyz');
// };

// showMessage('tùng');

/*
Hàm con 

chỉ được gọi trong hàm cha(không gọi được ở ngoài hàm cha)


ĐƯợc phép sử dụng:
-biến toàn cục
-biến cục bộ của tk cha
- tham số của chính nó
-tham số của tk cha




*/

var sum = function (a) {
  return function (b) {
    return a + b;
  };
};

// var add = sum(10)

// var result = add(20)
// console.log(sum(10)(20));

// closure