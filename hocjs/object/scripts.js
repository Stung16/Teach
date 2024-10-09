//
console.log(Object.prototype);
// object
/*
-thuộc tính:đặc điểm, tính chất
-phương thức:hành động


có 2 loại object
-object literal
-fnc contructor(hàm tạo)
*/

// khai báo object
var variableObj = {
  name: "tùng",
  func: function () {
    console.log(123);
  },
};
// variableObj.abc = "123";
// variableObj["new"] = 123;
// variableObj.name = "đạt";

// delete variableObj.new;
// console.log(variableObj["name"]);

// console.log(variableObj);

// for (var key in variableObj) {
//   if (typeof variableObj[key] === "function") {
//     console.log(variableObj[key]());
//   } else {
//     console.log(variableObj[key]);
//   }
// }

// Object.keys(variableObj).forEach(function (key) {
//   if (typeof variableObj[key] === "function") {
//     console.log(variableObj[key]());
//   } else {
//     console.log(variableObj[key]);
//   }
// });
// var listBlog = [
//   {
//     name: "danh sách 1",
//     title: "abc",
//   },
//   {
//     name: "danh sách 2",
//     title: "abc",
//   },
// ];
// listBlog.forEach(function (blog) {
//   document.write(blog.name);
// });

// var users = [
//   {
//     id: 1,
//     name: "tùng",
//     email: "kieuduytung@gmauil.com",
//   },
//   {
//     id: 2,
//     name: "đạt",
//     email: "kieuduydat@gmauil.com",
//   },
//   {
//     id: 3,
//     name: "phuong",
//     email: "kieuduyphuonggmauil.com",
//   },
// ];
// var html = `<table width="100%" border="1">
//                 <tr>
//                     <th>ID</th>
//                     <th>Tên</th>
//                     <th>Email</th>
//                 </tr>
//                 ${users
//                   .map(function (user) {
//                     return `<tr>
//                     <td>${user.id}</td>
//                     <td>${user.name}</td>
//                     <td>${user.email}</td>
//                     </tr>`;
//                   })
//                   .join()}
//             </table>`;
// document.write(html);
// Propotype

Object.prototype.combine = function (...args) {
  var current = this;
  var newArr = args.map(function (key) {
    return current[key];
  });
  return newArr;
};

// var users = {
//   name: "duy tung",
//   email: "kieuduytung3@gmail.com",
//   age: 13,
// };
Object.prototype.message = "kiều duy tùng";

var text = "abcnxc";
var age = 31;
console.log(age.message);

Array.prototype.welcome = "chào cái lồn";
var a = [];
console.log(a.welcome);
console.log(a.message);

console.log(text.welcome);
