// DOM Element

// truy xuất thông qua id
// document.getElementById(id)

// var title = document.getElementById("title"); //duy nhất
// title.innerText = "kiều tùng";
// console.log(title.id);

// truy xuất thông tin qua class => trả về 1 danh sách
// var titleList = document.getElementsByClassName("title");
// for (var i = 0; i < titleList.length; i++) {
//   console.log(titleList[i]);
// }

// truy xuất qua tagName
// var ListElement = document.getElementsByTagName("h1");
// for (var i = 0; i < ListElement.length; i++) {
//   console.log(ListElement[i]);
// }
// truy xuất qua css select
// var title = document.querySelectorAll("#title.title"); //chỉ lấy selecter đầu tiền
// console.log(title);

// var prod = document.querySelector(".content"); //chỉ lấy selecter đầu tiền

// var Cali = prod.querySelector(".product-detail");
// console.log(Cali);

var fullName = document.login.fullName;
console.log(fullName);
fullName.value = "123";
