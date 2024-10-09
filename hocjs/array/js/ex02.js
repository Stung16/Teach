// console.log(Array.prototype);

// var users = ["tùng", "đạt", "phương"];

// at() lấy phần tử theo index
// console.log(users.at(1));

// concat() nối mảng trả về mảng mới sau khi nối
// console.log(users.concat([1, 2, 3, 4]));
// thêm phần tử mới vào mảnh
// console.log(users.concat("tuấn"));

// indexOf(value) => tìm vị trí xuất hiện đầu tiên của phần tử mảng theo giá trị
// console.log(users.indexOf("đạt"));

// lastIndexOf =>tìm vị trí xuất hiện cuối của phần tử mảng theo giá trị

// includes(value) => cũng là tìm giá trị nhưng mà nó trả về true false
// console.log(users.includes("đạt"));

// slice(start,end) => trả về 1 mảng sau khi cắt
// console.log(users.slice(-2));

//join() => biến mảng thành chuỗi

// console.log(users.join(" "));

// push() => thêm phần tử vào cuối mảng và trả về số lượng sau khi thêm

// var count = users.push(1, 2, 3, 4, ["D", ["Dd", ["ddd"]]]);
// console.log(count);
// console.log(users);

// unshift() => thêm phần tử vào đẩu mảng và trả về số lượng sau khi thêm
// console.log(users.unshift(0));
// console.log(users);

// pop() => xoá phần tử cuối mảng và trả về giá trij của phần tử vừa xoá
// var value = users.pop();
// console.log(value);

// shift() = xoá phần đầu mảng và trả về giá trij của phần tử vừa xoá
// var value = users.shift();
// console.log(value);
// console.log(users);

// reverse() => đảo nguowcj mảng
// console.log(users.reverse());

// sort() => sxep mảng theo thứ tự tăng dần(chỉ áp dụng với text)

// console.log(users.sort());
// var numbers = [1, 3, 5, 6, 7, 4, 54];
// console.log(
//   numbers.sort(function (a, b) {
//     // return a - b; //tăng dần
//     return b - a; //giảm dần
//   })
// );

// fill() => thay thế tất cả các phần tử thành 1 giá trị
// console.log(users.fill("abc"));

//forEach() => duyêtj từng phần tư
// lưu ý +không trả về giá trị +không dùng được break và continue
// var a = users.forEach(function (user, index) {
//   console.log(user, index);
// });
// console.log(a);

//map() => duyệt các phần tử và trả về 1 mảng mới không có giá trị khi không return
// var result = users.map(function (user, index) {
//   return `<h3>${user}</h3>`;
// });

// console.log(result);
// document.write(result);

// some() 1 vài
/*
-trả về true nếu có 1 phần return true
-trả về fasle nếu k có ptu nào return true
*/

// var check = users.some(function (user) {
//   //   console.log(user);
//   if (user === "tùng") {
//     return true;
//   }
// });
// console.log(check);

// every()
/*
-trả về true nếu có tất phần tử return true
-trả về fasle nếu có 1 ptu nào return false
*/

// var numbers = [1, 3, 5, 7, 8];
// // var check = numbers.every(function (number, index) {
// // });
// // console.log(check);

// // filter +trả về 1 mảng+lấy các phần tử return true
// var result = numbers.filter(function (number) {
//   if (number < 6) {
//     return true;
//   }
// });
// console.log(result);

//find  ++trả về 1 phần của mảng +  thảo mãn dk của ptu đầu tiên return true

// var rusult = users.find(function (user) {
//   if (user === "a" || user === "tùng") {
//     return true;
//   }
// });
// console.log(rusult);

// findLast
// var result = users.findLastIndex(function (user) {
//   return user === "phương" || user === "tùng";
// });
// console.log(result);

// findLastINdex() tìm vị trí cuối cùng return true và trả về index của phần tử đúng

// bài1:lấy tên trong họ và tên

// var fullName = "Kiều Duy phương";
// // Tùng
// console.log(fullName.split(" ").slice(-1).toString());

// bai2 sxep danh sachs khasch hangfn tăng dần theo tên
// var customers = [
//   "kiều duy tùng",
//   "nguyễn duy phương",
//   "nguyễn thành dạt",
//   "nguyễn văn an",
//   "nguyễn văn bình",
//   "nguyễn phúc an",
// ];
// var getFirstName = function (fullName) {
//   return fullName.split(" ").slice(-1).toString();
// };

// customers.sort(function (a, b) {
//   if (getFirstName(b) > getFirstName(a)) {
//     return -1;
//   }
// });
// console.log(customers);

// bài 3 tìm kiếm danh sách khách hàng theo tên
// var keyword = "an";

// var result = customers.filter(function (customer) {
//   return customer.toLocaleLowerCase().includes(keyword.toLocaleLowerCase());
// });
// console.log(result);

// reduce()

// reduce(callback,inittialValue)
/*
callback: nhận vào 3 tham số
  +prevValue => giá trị của lần lặp trước(nếu return)
  +currentValue => giá trị của lần lặp hiện tại
  +index => index của lần lặp hiện tại
  +oririginArray : mảng ban đầu
inittialValue:là giá trị khởi tạo của preValue

  */
var numbers = [5, 10, 15, 20, 25];
// var result = numbers.reduce(function (prev, currentValue) {
//   return prev + currentValue;
// }, 0);
// console.log(result);
/*
prev:0  curr:5  0
prev:5  curr:10  1
prev:15  curr:15  2
prev:30  curr:20 3
prev:50  curr:25 4

*/
// tìm max trong mảng sau dùng reduce
// var result = numbers.reduce(function (max, number) {
//   if (max < number) {
//     return number;
//   }
//   return max;
// });

// tìm phân tử khác giữa mảng 1 và mảng 2 dùng reduce
// var arr1 = [5, 2, 1, 9];
// var arr2 = [3, 2, 9];
// //[5,1,3]

// var diff = arr1.reduce(function (prev, curr) {
//   if (!arr2.includes(5)) {
//     prev.push(curr);
//   }
//   return prev;
// }, []);
// console.log(diff);

// /*
// index:0  prev:[]  curr:5
// index:1  prev:[5]  curr: 2
// index:2  prev:[5]  curr:1
// index:3  prev:[5,1]  curr:9

// */
// var users = ["tùng", "đạt", "phương"];
// var customers = users.filter(function (user) {
//   return user;
// });
// // khái niệm clone array
// customers[0] = "tùngabc";

// console.log(customers);
// console.log(users);

// var getTotal = function () {
//   Array.from(arguments).forEach(function (value) {
//     console.log(value);
//   });
// };

// getTotal(2, 1, 4, 5);

// var arr1 = [1, 9];
// var arr2 = [1, 9];
// console.log(arr1 === arr2);
