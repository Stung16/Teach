var a = {
  name: "kiều duy tùng",
  email: "kieuduytung3@gmail.com",
  getName: function () {
    return this.name;
  },
};
var b = {
  name: "kiều duy tùng132131",
  email: "kieuduytung323123123123@gmail.com",
  age: 19,
  getName: function () {
    return this.name;
  },
};
// khai báo hàm tạo
var Person = function (name, email) {
  //khai báo các thuộc tính
  (this.name = name),
    (this.email = email),
    (this.getName = function () {
      return this.name;
    });
};
Person.prototype.getId = function () {
  return "#" + Math.floor(Math.random() * 1000);
};
var person = new Person("kieuduytung", "kieuduytung3@gmail.com");
person.age = 19;
console.log(person);

// console.log(person.getId());
var personm1 = new Person("thành đạt", "kieudat@gmail");
console.log(personm1);

// kiểm tra biến được taopj từ hàm tạo nào
var auth = {};
var fullName = "";
var customer = [];
console.log(auth.constructor.name);
console.log(fullName.constructor.name);
console.log(customer.constructor.name);
