var slider = document.querySelector(".slider");
var msg = document.querySelector(".msg");
// 1.change -> lawngs nghe khi co su thay doi
slider.addEventListener("change", function () {});
// hàm tạo new event
var fisnishEvent = new Event("finish");
// var fisnishEvent = new CustomEvent("finish", {
//   detail: "abcxyz",
// });

// 2.input -> bấm chuột xuống và kkeos
slider.addEventListener("input", function () {
  //   diều kiện để dispathcEvent
  if (+this.value === 100) {
    // msg.innerText = `123`;
    slider.dispatchEvent(fisnishEvent);
    // lan truyền hành động đến cả dự án
  }
});

// cú pháp tạo 1 event mới :finish
slider.addEventListener("finish", function (e) {
  e.detail = 90000;
  console.log(e.detail);

  msg.innerText = "123";
});
// slider.addEventListener("over", function () {
//   console.log(this.defau);
// });
