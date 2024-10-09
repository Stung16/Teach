// // có 2 sự kiện lắng nghe khi DOM loaded

// // event DOMContentLoaded
// document.addEventListener("DOMContentLoaded", function () {
//   var title = document.querySelector(".title");
//   console.log(title);
// });

// // eventLoad
// var preloader = document.querySelector(".preloader");
// window.addEventListener("load", function () {
//   // sử dụng làm loading
//   //   var img = document.querySelector(".img");
//   //   console.log(img.width);
//   //   console.log("tải xong");
//   preloader.remove();
// });
var handleBefforLoad = function (e) {
  e.returnValue = "1";
};
// var inputEl = document.querySelector(".name");
// inputEl.addEventListener("keyup", function () {
//   if (this.value !== this.defaultValue) {
//     window.addEventListener("beforeunload", handleBefforLoad);
//   } else {
//     window.removeEventListener("beforeunload", handleBefforLoad);
//   }
// });
var loginform = document.querySelector(".login-form");
// đây là lắng nghe sự kiện submit
loginform.addEventListener("submit", function (e) {});

// lắng nghe những sự thay đổi của các trường trong thẻ form
loginform.addEventListener("input", function (e) {
  if (e.target.type === "checkbox" || e.target.type === "radio") {
    if (e.target.defaultChecked !== e.target.checked) {
      window.addEventListener("beforeunload", handleBefforLoad);
    } else {
      window.removeEventListener("beforeunload", handleBefforLoad);
    }
  } else {
    if (e.target.value !== e.target.value.defaultValue) {
      window.addEventListener("beforeunload", handleBefforLoad);
    } else {
      window.removeEventListener("beforeunload", handleBefforLoad);
    }
  }
});
