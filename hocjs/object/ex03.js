// tham chiếu với object
// var obj1 = {
//   name: "tung",
//   age: 123,
// };
// // var obj2 = Object.assign({}, obj1); //clone object chỉ sao chép được 1 cấp
// // var obj2 = { ...obj1 }; //spread => học sau => chỉ 1 cấp
// var obj2 = JSON.parse(JSON.stringify(obj1)); //=> học sau => sao chép được tất cả các cấp
// obj2.name = "123";
// console.log(obj1);
// console.log(obj2);

// tham chiếu với mảng
// var a = ["tung", "dat", "phuong"];

// var b = a;
// var b = a.map(function (item) {
//   return item;
// });
// var b = a.slice(0);
// var b = a.filter(function (item) {
//   return true;
// });

// var b = [...a];//es6
// var b = JSON.parse(JSON.stringify(a));

//toán tử optional channing (?.)
// var a = null;
// console.log(a?.name);
/*
optional channing có 2 TH
+TH1: dùng với thuộc tính(thêm ?. vào trước key)
+TH2: dùng với với phương thức(thêm ?. vào trước lời gọi hàm)
*/
// var arr = "kiều duy tùng";
// if (arr?.length) {
//   arr?.forEach?.(function (item) {
//     console.log(item);
//   });
// }

//
var a = { name: "abc", name: 18 };
var b = { name: "abc", name: 18 };

console.log(JSON.stringify(a) === JSON.stringify(b));
