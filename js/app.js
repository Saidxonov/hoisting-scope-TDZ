// // regular function
// function add(a, b) {
//     return a + b;
// }

// //express function
// const add = function(a, b) {
// return a + b;
// }

// // arrow function
// const add = (a, b) => {
//     return a + b;
// }

//IIFE
// (function() {
//     var test = "salom";

//     function abs() {
//         console.log("abs");
//     }
// })();

// object
// let user = {
//     name: "John",
//     age: 56,
//     phones: ["+998123456789", "+7 97249723"],
//     email: "test@gmail.com",
//     family: {
//         father: "Omerbey",
//         mother: "Alise",
//     },
//     isMarried: false,
// };
// //chiqarish usullari
// // . orqali
// console.log(user.email);
// // [""] orqali
// console.log(user["phones"]);
// // .ichma-ich qilish
// console.log(user.family.father);

let arr = ["hello ", "world", "mersades", "bmw", "matiz", "lacetti"];
let sum1 = arr.filter(function (value) {
  if (value.length > 5) {
    return value;
  }
});

let sum = sum1.map(function (value) {
  if (value.length > 5) {
    return value.toUpperCase();
  }
  return value;
});
console.log(sum);
