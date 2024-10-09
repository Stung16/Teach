console.log("chạy trên server");

/*
Quy tắc đặt tên biến

### camelCase

eg:customerName,customerEmail....

==> ứng dụng để đặt tên biến hoặc tên hàm


### PascalCase

eg:HomeController,HomeModal.....

==> ứng dụng để đặt tên class trong lập trình


### underscore

eg:customer_name,customer_email....

=>> đặt tên hằng số(VIẾT HOA), trả về tên key trong API, tên field trong Data

*/

// Khai báo biến

// khai biến nhiều dòng
const customer = 1;
let user = "dat";

user = "phuong";

// khai báo biên 1 dopngf
var userName, userEmail;

// khai báo biến và gán
var customerName = "Kiều Tùng",
  customerEmail = "kieuduytung3@gmail.com";

// khái niệm nâng cao(Hoisting)
/*
const: ám chỉ là duy nhất
let: ám chỉ biễn sẽ thay đổi
var: sẽ dùng hoisting
*/

var tagH1 = "<h1>Đây là thẻ h1</h1>";
document.write(tagH1);

//Nối chuỗi

// var name = "Tùng";
// var fullName = 'Kiều "ghi chú" Duy' + " " + name;
// console.log(fullName);

// Ở phiên bản ES6 2015 JS 

// backtick (``)

var name = "Tùng";
var fullName = `Kiều Duy \`\` ${name}`;
// ký hiệu escape
console.log(fullName);