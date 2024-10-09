// var h1 = document.createElement("h1");
// h1.innerText = "Count: ";
// document.body.append(h1);
// var button = document.createElement("button");
// button.innerText = "+";
// document.body.append(button);
// var text = document.createTextNode(0);
// h1.append(text);

// button.addEventListener("click", function () {
//   text.data++;
// });

// //
// // textNode;

// // tạo comemt bằng El Node
// var comment = document.createComment("hello world");
// document.body.append(comment);

// var todo = document.querySelector(".todo");
// var todoList = document.querySelector(".todo-list");
// var todoForm = document.querySelector("form");

// todoForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   var inputEl = this.children[0];
//   var name = inputEl.value;
//   //   var todo = `<p>${name}</p>`;
//   //   todoList.innerHTML += todo;
//   var todo = document.createElement("p");
//   todo.innerText = name;
//   todoList.append(todo);
//   inputEl.value = "";
// });
var checkAll = document.querySelector(".checkAll");
var checkItems = document.querySelectorAll(".check-item");

checkAll.addEventListener("change", function () {
  var checkStatus = this.checked;
  checkItems.forEach(function (item) {
    item.checked = checkStatus;
  });
});

checkItems.forEach(function (item) {
  item.addEventListener("change", function () {
    var status = Array.from(checkItems).every(function (checkBox) {
      return checkBox.checked === true;
    });
    checkAll.checked = status;
  });
});
