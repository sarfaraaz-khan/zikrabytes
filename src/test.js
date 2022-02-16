// const printmyname = (names) => {
//   console.log(names);
// };
// printmyname("sarfaraaz khan");

// const multiplay = (number) => number * 2;
// console.log(multiplay(2));

// class Human {
//   constructor() {
//     this.name = "sarfaraaz khan";
//   }
//   printmyname() {
//     console.log(this.name);
//   }
// }
// const nothuman = new Human();
// nothuman.printmyname();

//--------------- spread operator-------------

// let number = [1, 2, 3, 4, 5, 6, 7, 8];
// let newnumber = [...number, 9, 10];

// console.log(newnumber);

// let names = ["sarfaraaz", "khan"];
// let addnames = ["mr", ...names];
// console.log(addnames);

// let song = ["c", "d", "e"];
// let newsong = ["a", "b", ...song, "f", "g"];

// console.log(newsong);

// let names = { name: "sarfaraaz", lastname: "khan", age: "24" };
// let fullname = {
//   ...names,
//   mobile: 7406512810,
//   email: "sarfaraazkhan19@gmail.com",
// };

// console.log(fullname);

// let number = {
//   fourth: 4,
//   fifth: 5,
// };

// let newnumber = {
//   first: 1,
//   second: 2,
//   third: 3,
//   ...number,
// };
// console.log(newnumber)

// let student = { lastname: "khan" };
// let newstudent = { names: "sarfaraz", ...student, age: 34 };

// console.log(newstudent);

//-------Array  Destructring -------//

// let num = [1, 2, 3, 4, 5, 6, 7, 8];
// [num1, num2, num4] = num;
// console.log(num4);
