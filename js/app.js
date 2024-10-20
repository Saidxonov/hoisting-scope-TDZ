//--------------------------------------> Massivlarga oid <---------------------------

// ### Masala 1: `map` va `filter` metodlari bilan alifbo tartibini o'zgartirish

// let arr = ["hello ", "world", "mersedes-benz", "bmw", "toyota", "lacetti"];
// let sum1 = arr.filter(function (value) {
//   if (value.length > 5) {
//     return value;
//   }
// });

// let sum = sum1.map(function (value) {
//   if (value.length > 5) {
//     return value.toUpperCase();
//   }
//   return value;
// });
// console.log(sum);

// ### Masala 2: `find` va `map` metodlari bilan talabalarni topish

// let students = [
//   { ismi: "Saidburxon", age: 14 },
//   { name: "Sardor", age: 21 },
//   { name: "Hitler", age: 138 },
// ];
// let res = students.find(function (value) {
//   if (value.age > 20) {
//     console.log(value);
//   }
// });

// ### Masala 3: `filter` va `reduce` metodlari bilan umumiy summani hisoblash

// let numbers = [11000, 11000, 11000, 11000];
// let sum = 0;
// let res = numbers.filter(function (value) {
//   if (value > 10000) {
//     sum += value;
//   }
// });
// console.log(sum);

// ### Masala 4: `every` va `some` metodlari bilan aniq shartlarni tekshirish

// function numbers(numbers) {
//   let musbatson = numbers.every((num) => num > 0);
//   let bigNum = numbers.some((num) => num > 100);
//   if (musbatson) {
//     console.log("Barcha sonlar musbat");
//   } else {
//     console.log("Musbat bo'lmagan sonlar bor");
//   }

//   if (bigNum) {
//     console.log("Katta son bor");
//   }
// }
// let arr = [10, -45, 200, 34, 99];
// numbers(arr);

// ### Masala 5: `forEach` va `map` metodlari bilan massiv elementlarini transformatsiya qilish

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let res = [];
// numbers.forEach(function (value) {
//   res.push(value ** 2);
// });
// console.log(res);
