/*
Học mảng là học gì?
-cách hoạt động
-khai báo
-Các phuong thức thao tác:Thêm,sửa,xoá,duyệt
-các hàm xử lý
-làm btap
*/
// var array = [];
// var arr = new Array();

// Cacs kiểu dữ liệu kkhi được kiểm tra sẽ về dạng object
/*
-array
-object
-null
*/

var users = ["tùng", "đạt", "phương"];
console.log(users);
// Các phương thức
// 1. lấy số lượng phần tử
// console.log(users.length);

//2.truy cập phần tử mảng
// console.log(users[1]);

// 3.thêm phần tử mới vào mảng
// trick lỏ
// users[users.length] = "1";
// users[users.length] = "2";
// users[users.length] = "3";
// users[users.length] = "4";
// users[users.length] = "5";
// users[users.length] = "6";
// console.log(users);

// 4. sửa phần tử mảng
// users[1] = "hiền";
// console.log(users);

// 5. duyệt mảng
// for (var i = 0; i < users.length; i++) {
//   console.log(i);
//   console.log(users[i]);
// }

// for-in ==>trả về index(chạy từ 0)
// for (var index in users) {
//   console.log(users[index]);
// }

// for-of ==> trả về element
// for (var element of users) {
//   console.log(element);
// }

// 6.xoá mảng
// var indexDel = 2;
// var newArr = [];
// for (var index in users) {
//   if (+index === +indexDel) {
//     continue;
//   }
//   newArr[newArr.length] = users[index];
// }
// console.log(newArr);

// var customers = [1, 2, 3];
// var value = 0;
// var newArr = [];
// newArr[newArr.length] = value;
// // kết quả mong muốn [0,1,2,3] không dùng hàm
// for (var index in customers) {
//   newArr[newArr.length] = customers[index];
// }
// console.log(newArr);

// var arr = [];
// arr["a"] = "tùng";
// arr["b"] = "tùng1";
// arr["c"] = "tùng2";
// for (var index in arr) {
//   console.log(arr[index]);
// }

// propotype
