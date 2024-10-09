// DOM Attribuilt
const link = document.querySelector(".link");
console.log(link);

// lấy giá trị thuộc tính(chỉ áp dụng thuộc tính thật của thẻ html)

console.log(link.id);
console.log(link.title);
console.log(link.href);
console.log(link.target);
console.log(link.className);

// cập nhật thuộc tính
link.href = "https://google.com";
link.title = "https://google.com";

// truy cập vào data attribute
console.log(link.getAttribute("data-stae"));
console.log(link.getAttribute("data-text"));
// truy cập vào data attribute thoong qua dataset
console.log(link.dataset);
console.log(link.dataset.stae);
console.log(link.dataset.text);
// caaph nhataj gias tri vao attribute
link.setAttribute("data-new", 100);
link.setAttribute("data-text", "100");
// caappj nhat data attribute bawngf dataset
link.dataset.stae = "abc";
