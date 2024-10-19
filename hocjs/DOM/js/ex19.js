// trigger event -> tự động kích hoạt mà k cần tác động từ phía người dùng
/*
trong js có 2 cách để trickgger event

1:dùng hàm có sẵn :click(),submit()
 => nhược điểm k đầu đủ vs tất cả các sự kiện
2: dùng thông qua hàm dispathEvent( nó có thể dùng vs tất cả)
*/

var btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  console.log("hello world");
});

// setInterval(function () {
//     btn.click()
// },1000)

var contentEl = document.querySelector(".content");
var downloadBtn = document.querySelector(".download");

downloadBtn.addEventListener("click", function () {
  var content = contentEl.innerText;
  var blob = new Blob([content]);

  //   tạo url blob
  var url = URL.createObjectURL(blob);

  var a = document.createElement("a");
  a.href = url;
  a.download = "hello.txt";
  a.click();
});

//
var quantityEl = document.querySelector(".quantity input");
var plusBtn = quantityEl.nextElementSibling;
var minusBtn = quantityEl.previousElementSibling;
var amountEl = document.querySelector(".amount");
var price = 1200;
amountEl.innerText = price;
var changeEv = new Event("change");

quantityEl.addEventListener("change", function () {
  amountEl.innerText = this.value * price;
});

plusBtn.addEventListener("click", function () {
  quantityEl.value++;
  //   amountEl.innerText = quantityEl.value * price;
  quantityEl.dispatchEvent(changeEv);
});
minusBtn.addEventListener("click", function () {
  quantityEl.value--;
  if (quantityEl.value < 1) {
    quantityEl.value = 1;
  }
  quantityEl.dispatchEvent(changeEv);
});
