// Object.prototype.message = "fullstack";

var user = {
  name: "duy tùng",
  email: "kieudutyu#2gmail.com",
};
// for (var key in user) {
//   console.log(key);
// }

// Object.keys(user).forEach(function (key) {
//   console.log(key);
// });

var query = {
  name: "kiều tùng",
  email: "kieudutyu#2gmail.com",
  category: 1,
};

// chuyểnm object trên thành dạng query string
// name=Kiều+tùng&email=kieudutyu#2gmail.com&category=1
// console.log(Object.entries(query));
// var queryString = Object.entries(query)
//   .map(function (item) {
//     return item.join("=");
//   })
//   .join("&")
//   .replaceAll(" ", "+");
// console.log(queryString);

// viết hàm map2()

// Array.prototype.map2 = function (fn) {
//   var newArr = [];
//   for (var index = 0; index < this.length; index++) {
//     var value = this[index];
//     var result = fn(value, index);
//     newArr[newArr.length] = result;
//   }
//   return newArr;
// };

// var users = ["tùng", "đạt", "phương"];
// var newArr = users.map2(function (user, index) {
//   return `<h3>${index} - ${user}</h3>`;
// });
// console.log(newArr);

var users = {
  name: "kieu tung",
  email: "kieuduytung3@tgmail.com",
};
var customer = {
  job: "sdchjgbgkhjsdfbg",
  age: "16",
};

var content = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus autem facere expedita optio harum tempora inventore rerum totam error odio! Tenetur quisquam, nesciunt sunt atque ea perspiciatis dolorum corporis repellat sequi cupiditate amet assumenda fugiat sed quo error corrupti iusto deleniti soluta quia deserunt sapiente ipsum? Eius perferendis assumenda porro excepturi impedit. Ipsam autem corrupti esse inventore nostrum omnis eum reiciendis et repellat laboriosam culpa modi deserunt provident accusantium quos magni pariatur sunt illo eveniet aperiam eos, enim magnam! Dignissimos, ea placeat. Dolores alias debitis officia voluptates atque maxime laborum odit ipsum illum incidunt quibusdam, ipsa fuga quia dolor nihil harum ipsam perspiciatis error animi distinctio perferendis iusto sapiente. Accusantium alias fugiat blanditiis dignissimos sint commodi voluptatibus vitae explicabo ut adipisci ipsum pariatur eum enim nulla tenetur, iste voluptas numquam ipsam! Veniam corporis doloremque dignissimos adipisci? Neque itaque quisquam praesentium consequatur explicabo voluptatum nesciunt repellat alias, enim blanditiis corrupti expedita. Officiis nemo eaque vel est, incidunt laborum omnis. Voluptates porro voluptas dolores deserunt libero temporibus consectetur illum obcaecati nemo ullam sequi quia atque natus ut iure hic, error quisquam? Laboriosam possimus itaque, delectus adipisci repellat nam suscipit iure? Placeat delectus officiis aperiam adipisci fugit porro earum sapiente consequuntur cum, nobis, voluptatem aut tempore commodi totam sint! Atque maxime reiciendis recusandae ipsum laudantium numquam hic distinctio sapiente voluptatem doloremque ducimus error exercitationem necessitatibus a id magnam,`;

// var result = {
//   Lorem: 4,
//   ipsum: 2,
// };
var result = {};
var words = content
  .replaceAll(".", "")
  .replaceAll(",", "")
  .replaceAll("!", "")
  .split(" ");
words.forEach(function (word) {
  if (!result[word.toLowerCase()]) {
    result[word.toLowerCase()] = 1;
  } else {
    result[word.toLowerCase()]++;
  }
});
console.log(result);
