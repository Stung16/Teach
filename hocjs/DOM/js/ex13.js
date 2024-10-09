// var btn = document.querySelector(".btn");
var content = document.querySelector(".content");
var h1 = document.querySelector("h1");

// h1.addEventListener("click", function () {
//   this.style.color = "red";
// });
// // btn.addEventListener("click", function () {
// //   content.innerHTML += "<p>Khoá học fullstack</p>";
// //   h1 = content.querySelector("h1");
// //   h1.addEventListener("click", function () {
// //     this.style.color = "red";
// //   });
// // });

// //
// var h2 = document.createElement("h2");
// h2.innerText = "khoá học free";
// h2.classList.add("course-name");
// // console.log(h2);

// // thêm thẻ h2 vào contetn (thêm và cuối cùng)
// // content.appendChild(h2);
// content.append(h2);
// // btn.addEventListener("click", function () {
// //   content.appendChild(h2);
// // });

// <ul>
//   <li></li>
//   <li></li>
//   <li></li>
// </ul>;

// var ul = document.createElement("ul");
// for (var i = 1; i <= 3; i++) {
//   var li = document.createElement("li");
//   li.innerText = `item ${i}`;
//   ul.append(li);
// }
// content.append(ul);

//thêm 1 node vào trước 1 node khác
var p = document.createElement("p");
p.innerText = `item 123`;
content.insertBefore(p, h1);

// function insertAflter(newNnode, exetingNode) {
//   content.insertBefore(newNnode, exetingNode.nextSibling);
// }

// thay thế 1node bằng 1 node khác
var h3 = document.createElement("h3");
h3.innerText = `item 456`;
content.replaceChild(h3, p);

// xoá 1 node con
content.removeChild(h1);
