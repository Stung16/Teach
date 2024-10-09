// JSON: Javascript object notaion
/*
-là chuỗi
-dùng để mô tả dữ liệu 1 cách chính xác nhất
=> tác dụng: giao tiêp giữa các nên tảng


xml:
json:
*/
// JSON.stringify()  => chuyển kiểu dữ liệu về json
// JSON.parse()  => chuyển JSON về kiểu dữ liệu

var user = [
  { id: 1, name: "tùng" },
  { id: 2, name: "tùng2" },
];
var json = JSON.stringify(user);
console.log(json);
var jsonPaer = JSON.parse(json);
console.log(jsonPaer);
