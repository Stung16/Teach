// //event scroll -> thay đổi thanh cuônj của trình duyệt
// const title = document.querySelector(".title");

// // 1.lấy toạ độ x,y khi scroll
// // thay đổi scroll
// var current = 0;
// // window.addEventListener("scroll", function () {
// //   var x = window.scrollX;
// //   var y = window.scrollY;
// //   if (y > current) {
// //     this.document.body.style = `background:red`;
// //   } else {
// //     this.document.body.style = `background:white`;
// //   }
// //   current = y;
// // });
// /**
//  scroll xuông body => màu đỏ
//  scroll lên body => màu trắng
//  */
// title.addEventListener("click", function () {
//   window.scroll(100, 100);
// });

// var topBtn = document.querySelector(".top");
// window.addEventListener("scroll", function () {
//   var y = window.scrollY;
//   if (y > 50) {
//     topBtn.classList.add("show");
//   } else {
//     topBtn.classList.remove("show");
//   }
// });
// topBtn.addEventListener("click", function () {
//   window.scroll(0, 0);
// });

var header = document.querySelector(".header");
var nav = document.querySelector("nav");

var h1Height = header.children[0].clientHeight;
var navHeight = nav.clientHeight;
var paddingheader = window
  .getComputedStyle(header)
  .getPropertyValue("padding-top");
paddingheader = parseInt(paddingheader);

window.addEventListener("scroll", function () {
  var y = window.scrollY;
  if (y >= h1Height + paddingheader) {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
});

var navItems = nav.children;
Array.from(navItems).forEach(function (nav) {
  nav.addEventListener("click", function (e) {
    e.preventDefault();
    var hash = this.getAttribute("href");
    console.log(hash);
    var section = document.querySelector(hash);
    section.style.paddingTop = `${navHeight}px`;
    section.scrollIntoView({ block: "start" });
  });
});
