//NUMBER = kiểu dữ liệu
console.log(Number.prototype);
console.log([Number]);

// var a = 10;
// console.log(a, typeof a);
// if (Number.isInteger(a)) {
//   console.log("đây là số nguyên");
// } else {
//   console.log("kp số nguyên");
// }

// kiểu dữ liệu NaN

// var a = 10;
// var b = "ab";
// console.log(b * a);
// if (Number.isNaN(a)) {
//   console.log("đây là NaN");
// } else {
//   console.log("kp NaN");
// }

// tóm lại ktra 1 biến có phải là 1 só hay không
// if (typeof a === "number" && !Number.isNaN(a) && a !== Infinity) {
//   console.log("đây là number");
// }

// ép kiểu số nguyên
// var a = "10.3";
// // a = Number.parseInt(a);

// //ép kiểu số thực
// a = Number.parseFloat(a);
// a = a.toString();
// console.log(a);

// lấy ohaafn thập phân và làm tròn(toFixed()) ==> trả về 1 chuỗi
// var a = 16.194563;
// console.log(a.toFixed(2));

//định dạng số
var price = 120000000;
console.log(
  price.toLocaleString("ja-JP-u-ca-japanese", {
    style: "currency",
    currency: "USD",
  })
);
