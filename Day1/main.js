// Array.prototype.filter1 = function(callback) {
//   var output = []
//   for(var i = 0; i < this.length; i++){
//     var ok = callback(this[i])

//     if(ok == true){
//       output.push(this[i]);
//     }
//   }

//   return output;
// }
// var courses = [
//       'java',
//       'php',
//       'ruby'
//   ]

// var result = courses.filter1(function(course) {
//   return course === 'java'
// })

// console.log(result)

const person = {
  name: "John",
  age: 30,
  city: "New York",
};
// console.log(person['age']);
// for (let key in person) {
//   console.log(person);
//   console.log(key);
//   console.log(`${key}: ${person[key]}`);
// }

const array = [
  "apple",
  "banana",
  "cherry",
  {
    name: "John",
    age: 30,
    city: "New York",
  },
];

for (let fruit of array) {
}
