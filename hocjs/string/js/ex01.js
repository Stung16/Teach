// Kiểu dữ liệu String

// khai báo

// cách 1
var fullname = "duy tugf";
// console.log(fullname,typeof fullname);

// cách 2
var fullname2 = String("Kiều tùng");
// console.log(fullname2,typeof fullname2);

// cách 3
var fullname3 = new String("tùng");
// console.log(fullname3,typeof fullname3);

// console.log(String.prototype);

// console.log(fullname.length);

var str = "Kiều Duy Tùng - FullStack Tùng";
// 1.length => lấy độ dài của chuỗi
// console.log(str.length);

// 2.chartAt(index) =>  trả về ký tự theo index
// console.log(str.charAt(0));

// 3.charCodeAt(index) => trả về mã ASCII của ký tự theo index
// console.log(str.charCodeAt(1));

// 4.concat(str2,str3) = > nỗi chuỗi
// console.log(str.concat('đẹp trai','học giỏi'));

// 5,indexOf(subStr) => tìm vị trí đầu tiên chuỗi subStr trong chuỗi cha
// nếu tìm thấy trả về iundex không tìm thấy trả về -1
// console.log(str.indexOf('Tùng'));

// 6. lastindexOf(subStr) => trả về index vị trí cuối
// console.log(str.lastIndexOf('Tùng'));

// 7.includes(subStr) => tìm chuỗi nhưng trả vbeef true false
// console.log(str.includes('Tùng'));

// 8.slice(start,end) =>  trả về chuỗi cắt từ start tới end
// console.log(str.slice(1,10));
// console.log(str.slice(1));

// 9.9.replace(search,width) => tìm và thay thế => tìm và thay thế(chỉ thay thế vị trí đầu tiên)
// lưu ý việc tìm kiếm trong hàm này sẽ có hỗ trợ cả biueeru thức chính quy(regax)
// console.log(str.replace("Tùng",'Tùn'));
// console.log(str.replace(/Tùng/g,'Tùn'));

//10.replaceAll(search,width) => tìm và thay thế tất cả
// console.log(str.replaceAll("Tùng",'Tùn'));

// 11.split(chart) => tách chuỗi thành mảng
// console.log(str.split(" "));

// 12.match(parttant) => cắt chuỗi dựa vào biểu thức chính quy

// var content =
//   "Lorem ipsum dolor +84823492384 sit amet consectetur 123456789 adipisicing elit. Ipsa distinctio beatae, illum in harum mollitia ut nisi, iste qui asperiores eligendi cum neque, a sapiente aspernatur corrupti quae odit possimus!";

// var parttern = /(0|\+84)\d{9}/g;
// var phones = content.match(parttern)
// console.log(phones);



// 13 toLowerCase() => chuyển thành chữ thường

// 14 toUpperCase() => chuyển thành chữ hoa

// 15 trim() => loại bỏ khoảng trắng đầu và cuối
// 16 trimStart() => loại bỏ khoảng trắng đầu 
// 17 trimEnd() => loại bỏ khoảng trắng  cuối




