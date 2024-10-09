const btn = document.querySelector(".btn");
const btn1 = document.querySelector(".btn1");
const email = document.querySelector(".email");
const items = document.querySelectorAll("ul li");

const handleClick = function () {
  console.log(123);
};
const handleChang = function () {};

btn.addEventListener("click", handleClick);
btn1.addEventListener("click", function () {
  btn.removeEventListener("click", handleClick);
});
items.forEach(function (item) {
  item.addEventListener("click", function () {
    console.log(this);
  });
});
// eventListrener
// tròng event còn 1 chuyên đề là custom event => hgocj sau
