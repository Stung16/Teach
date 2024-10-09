// DOM Navigation

/*
chọn đưọcw el dựa vào 1 el khác
    +lấy đc tk cha 
        -parentElement => trả về El Node
    +lấy được các el con trực tiueesp
        -children
    +lấy được el kế tiếp
        -nextElementSibling
    +lấy đưuocj el kế sau
        -previousElementSibling
*/
// var btn = document.querySelector(".btn");
// var group = document.querySelector(".group");
// btn.addEventListener("click", function () {
//   //   console.log(this.parentElement);
//   console.log(group.children);
// });
// var menu = document.querySelector(".menu");
// // console.log(menu.querySelectorAll("li"));
// // console.log(menu.children[1].children[1].children[0].innerText); //Array -like Object
// /*
// btap
// Click vào mỗi item trên menu và sử lý các TH sau

// -Nếu Item đó có menu(có ul) => đổi background màu nên menu con sang màu đỏ
// -nếu item k có menu => đổi màu chữ của item vừa click vào sang màu đỏ
// */
// var linkItem = menu.querySelectorAll("a");
// linkItem.forEach(function (link) {
//   link.addEventListener("click", function () {
//     var children = this.parentElement.children;
//     if (children.length === 2) {
//       children[1].style.background = "red";
//     } else {
//       this.style.color = "red";
//     }
//   });
// });
var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");
var productActive = document.querySelector(".active");

var firstEl = productActive.parentElement.firstElementChild;
var lastEl = productActive.parentElement.lastElementChild;

nextBtn.addEventListener("click", function () {
  var nextEl = productActive.nextElementSibling;
  if (!nextEl) {
    nextEl = firstEl;
  }
  nextEl.classList.add("active");
  productActive.classList.remove("active");
  productActive = nextEl;
});
prevBtn.addEventListener("click", function () {
  var prevEl = productActive.previousElementSibling;
  if (!prevEl) {
    prevEl = lastEl;
  }
  prevEl.classList.add("active");
  productActive.classList.remove("active");
  productActive = prevEl;
});
