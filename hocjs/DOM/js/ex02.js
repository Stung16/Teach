/*
Event
 */
const btn = document.querySelector(".btn");
const email = document.querySelector(".email");
const pa = document.querySelector(".abc");

/*
cta có 2 cách thêm sự kiện
*/
// cách gán thông qua DOM
// btn.onclick = function () {
//   console.log("đăng ký thành công");
// };
// cách thêm thực tiếp vào thẻ html
// var handleREmove = function () {
//   console.log("remove");
// };
//  ==> event handler

// email.onchange = function () {
//   console.log("đã xong");
// };

// email.onkeyup = function (e) {
//   console.log("đang gõ", e.key);
//   //   dạy sau
// };
// btn.onmousedown = function () {
//   console.log("nhấn xuống");
// };
// btn.onmouseup = function () {
//   console.log("nhả phim");
// };
// email.onfocus = function () {
//   console.log("bạn vừa focus");
// };
// email.onblur = function () {
//   console.log("cảnh báo bạn chjujaw nhập xong");
// };
// email.onpaste = function () {
//   console.log("bạn vừa paste");
// };
// email.oncopy = function () {
//   console.log("bạn vừa oncopy");
// };

// khái niệm eventListener
