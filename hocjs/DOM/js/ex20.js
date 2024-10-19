// // HTMLElment
// var title = document.querySelector(".title");
// console.log([title]);

// customEL

// shadow DOM

var title = document.querySelector(".title");
var root = title.attachShadow({
  mode: "open",
});
root.innerHTML = `<b class='boldd'>hello</b>`;

component.create("todo-item", function () {
  var name = this.innerText;
  var shadow = this.attachShadow({
    mode: "open",
  });
  var style = document.createElement("style");
  style.textContent = `
  .todo-item {
    border: 1px solid #d33;
    padding:10px 0;
  }
  `;
  shadow.innerHTML = `<div class="todo-item">
    <input type="checkbox"/>
    <span>${!name ? "Tên công việc" : name}</span>
    </div>`;
  shadow.prepend(style);
});
