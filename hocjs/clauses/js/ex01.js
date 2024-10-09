//đệ quy chính là việc gọi lại chính hàm đâng định nghĩa

// var showNumber = function (n) {
//   console.log(n);
//   if (n > 1) {
//     showNumber(n - 1);
//   }
// };

// showNumber(10);

// tính giá trị biểu thức
// S = 1 + 2 + 3 + 4 .... + N

// không dùng vòng lặp

var sum = function (n) {
  if (n === 1) {
    return 1;
  }
  return n + sum(n - 1);
};
// console.log(sum(10));

// var s = 1;
// var sum = function (n) {
//   if (n === 1) {
//     return 1;
//   }
//   if (n > 1) {
//     sum(n - 1);
//     return (s += n);
//   }
// };
// sum(10);
// console.log(s);

var fibonacci = function (n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};
console.log(fibonacci(6));
