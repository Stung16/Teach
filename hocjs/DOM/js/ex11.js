var carousel = document.querySelector(".carousel");
var carouselInner = carousel.querySelector(".carousel-inner");
var carouselNav = document.querySelector(".carousel-nav");
var prevBtn = carouselNav.querySelector(".prev");
var nextBtn = carouselNav.querySelector(".next");

// lấy danh sách các items
var carouselItems = carouselInner.children;

// tính chiều rộng của 1 item
var itemWidth = carouselInner.clientWidth; //trả về choieefu  rộng của 1el

// tính tổn kích thước các items
var totalWidth = itemWidth * carouselItems.length;

// cập nhật css carausel inner
carouselInner.style.width = `${totalWidth}px`;

// lắng nghe sự kiện vào nút next
var position = 0;
nextBtn.addEventListener("click", function () {
  // tính toạ độ
  position -= itemWidth;
  if (Math.abs(position) < totalWidth) {
    carouselInner.style.translate = `${position}px`;
  }
});

prevBtn.addEventListener("click", function () {
  // tính toạ độ
  if (Math.abs(position) > 0) {
    position += itemWidth;
    carouselInner.style.translate = `${position}px`;
  }
  console.log(position);
});
console.log(position);
