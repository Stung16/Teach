// chặn hành động mặc định của thẻ html
// prevendefault(
var link = document.querySelector(".link");
var menuContext = document.querySelector(".menu");
link.addEventListener("click", function (e) {
  e.preventDefault(); //chặn hành động mặc định của thẻ
  console.log(e);
});
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  menuContext.style.display = "block";
  menuContext.style.left = e.clientX + "px";
  menuContext.style.top = e.clientY + "px";
});
document.addEventListener("click", function () {
  menuContext.style.display = "none";
});

menuContext.addEventListener("click", function (e) {
  e.stopPropagation();
});
