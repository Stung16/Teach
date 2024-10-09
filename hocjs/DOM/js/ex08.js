//Event Object
var btn = document.querySelector(".btn");
var input = document.querySelector(".name");

// input.addEventListener("keyup", function (e) {
//   if (e.key === "Enter") {
//     document.body.style.background = this.value;
//   }
//   if (e.key === "Escape") {
//     document.body.style.background = "initial";
//   }
// });
/*
mouoseDown
mouseUp
mouseMove
*/
var isDown = false;
var offsetX, offsetY;

btn.addEventListener("mousedown", function (e) {
  isDown = true;
  offsetX = e.clientX;
  offsetY = e.clientY;
});
document.addEventListener("mousemove", function (e) {
  if (isDown) {
    var clientX = e.clientX - offsetX;
    var clientY = e.clientY - offsetY;

    var css = {
      position: "relative",
      top: clientY + "px",
      left: clientX + "px",
    };
    Object.assign(btn.style, css);
  }
});
document.addEventListener("mouseup", function (e) {
  isDown = false;
});
