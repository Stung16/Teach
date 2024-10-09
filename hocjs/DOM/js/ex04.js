const content = document.querySelector(".content");
const result = document.querySelector(".result");
const btn = document.querySelector(".btn");
// DOM HTML

// 1 . lấy nội dung thẻ html
// console.log(content.innerHTML);
// console.log(content.innerText);
// console.log(content.textContent);
// console.log(content.outerHTML);

// 2. thay đổi nội dung cho thẻ html
// content.innerHTML = `<h2>abcjkfhkjashkfjda</h2>`;
// content.innerText = `<h2>abcjkfhkjashkfjda</h2>`;
btn.addEventListener("click", function () {
  if (result.innerText === "") {
    result.innerHTML = content.innerHTML;
    content.innerHTML = "";
    this.innerText = "lên";
  } else {
    content.innerHTML = result.innerHTML;
    result.innerHTML = "";
    this.innerText = "xuống";
  }
});
