// DOM CSS

/*
Can thiệp css vào các ther html thông qua thuộc tính style(inline CSS) 
*/
var content = document.querySelector(".content");
var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
content.style.color = "red";
content.style.fontWeight = "bold";

var css = {
  backgroundColor: "gray",
  textDecoration: "line-through",
  fontStyle: "italic",
};
Object.assign(content.style, css);
