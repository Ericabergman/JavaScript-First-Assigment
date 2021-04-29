// 1.FIRST WE DEFINE OUR PROBLEM / TASK
// 2.THEN WE BREAK APART INTO SMALLER PIECES / TASKS
// -----------------------------------------------------------------

// TASK: Task is to calculate the area of two triangles/ case and compare the value of the result to see which one has the biggest area.

// case 1
// 1. Task is to calculate the area of two triangles.
// start with case 1
// 2. calculate triangleOne and calculate triangleTwo
// 3. and compare the values of the result to see which one has the biggest area.
// -----------------------------------------------------------------

// case 2
// 1. Task is to calculate the area of two triangles.
// continiue with case 2
// 2. calculate trianglethree and calculate triangleFour
// 3. and compare the values of the result to see which one has the biggest area.
// ------------------------------------------------------------------

// and last case 3
// 1. Task is to calculate the area of two triangles.
// continiue with case 2
// 2. calculate triangleFive and calculate triangleSix
// 3. and compare the values of the result to see which one has the biggest area.

// -----------------------------------------
// case 1
// 1.     Delcare veriable for triangleOne and triangleTwo. One for base and one for height that will store the base and the heights size.
// 2.     Assign a value as in this case is number for base and height
// 3.     calculate base * height and divide with 2
// 4.     I need a name to store each triangle area
// 5.     console.log() to check the result using template literals

// 6.     do a comparison between the two triangles using if / else
// 7.     console.log() the result to check the answer

// triangleOne

// step one: Delcare veriable. One for base and one for height that will store the base and the heights size.
// const baseTriangleOne;
// const heightTriangleOne;

// step two // Assign a value as in this case is number for base and height
const baseTriangleOne = 10;
const heightTriangleOne = 13;

// step three // calculate base * height and divide with 2
const areaTriangleOne = (baseTriangleOne * heightTriangleOne) / 2;

// step four // console.log() to check the result using template literals
console.log(`area for triangle one is ${areaTriangleOne} cm2`);

//

// triangleTwo

// step one: //  Declare veriable. One for base and one for height that will store the base and the heights size
// const baseTriangleTwo;
// const heightTriangleTwo;

// step two // Assign a value as in this case is number for base and height
const baseTriangleTwo = 16.5;
const heightTriangleTwo = 20.3;

// step three // calculate base * height and divide with 2
const areaTriangleTwo = (baseTriangleTwo * heightTriangleTwo) / 2;

// step four //  console.log() to check the result using template literals
console.log(`area for triangle two is ${areaTriangleTwo} cm2`);

//

// case 2
// 1.     Delcare veriable. One for base and one for height
// 2.     Assign a value for base and height

// 1.     Delcare veriable for triangleOne and triangleTwo. One for base and one for height that will store the base and the heights size.
// 2.     Assign a value as in this case is number for base and height
// 3.     calculate base * height and divide with 2
// 4.     I need a name to store each triangle area
// 5.     console.log() to check the result using template literals

// 6.     do a comparison between the two triangles using if / else
// 7.     console.log() the result to check the answer and use template literals

//

// triangleThree

// step one //  Delcare veriable for triangleThree and triangleFour. One for base and one for height that will store the base and the heights size.
// const baseTriangleThree;
// const heightTriangleThree;

// step two // Assign a value as in this case is number for base and height
const baseTriangleThree = 16.5;
const heightTriangleThree = 20.3;

// step three // calculate base * height and divide with 2
const areaTriangleThree = (baseTriangleThree * heightTriangleThree) / 2;

// step four //  console.log() to check the result using template literals
console.log(`area for triangle three is ${areaTriangleThree} cm2`);

//

// triangleFour

// step one //  Delcare veriable for triangleThree and triangleFour. One for base and one for height that will store the base and the heights size.
// const baseTriangleFour;   // = 20.3;
// const heightTriangleFour; // = 16.5;

// step two // Assign a value as in this case is number for base and height
const baseTriangleFour = 20.3;
const heightTriangleFour = 16.5;

// step three // calculate base * height and divide with 2
const areaTriangleFour = (baseTriangleFour * heightTriangleFour) / 2;

// step four // console.log() to check the result using template literals
console.log(`area for triangle four is ${areaTriangleFour} cm2`);

// case 3

// 1.     Delcare veriable for triangleOne and triangleTwo. One for base and one for height that will store the base and the heights size.
// 2.     Assign a value as in this case is number for base and height
// 3.     I need a name to store each triangle area
// 4.     calculate base * height and divide with 2

// 5.     console.log() to check the result using template literals
// 6.     do a comparison between the two triangles using if / else
// 7.     console.log() the result to check the answer using template literals

// triangleFive

// step one //  Delcare veriable for triangleThree and triangleFour. One for base and one for height that will store the base and the heights size.
// const baseTriangleFive;
// const heightTriangleFive;

// step two // Assign a value as in this case is number for base and height
const baseTriangleFive = 7.8;
const heightTriangleFive = 5.6;

// step three // calculate base * height and divide with 2
const areaTriangleFive = (baseTriangleFive * heightTriangleFive) / 2;

// step four // // console.log() to check the result using template literals
console.log(`area for triangle five is ${areaTriangleFive} cm2`);

// // triangleSix

// step one //  Delcare veriable for triangleThree and triangleFour. One for base and one for height that will store the base and the heights size.
// const baseTriangleSix;
// const heightTriangleSix;

// step two // Assign a value as in this case is number for base and height
const baseTriangleSix = 9.3;
const heightTriangleSix = 12.4;

// step three // calculate base * height and divide with 2
const areaTriangleSix = (baseTriangleSix * heightTriangleSix) / 2;

// step four // console.log() to check the result using template literals
console.log(`area for triangle six is ${areaTriangleSix} cm2`);

// case one
// triangle one and two

if (areaTriangleOne >= areaTriangleTwo) {
  console.log(`triangle one is ${areaTriangleOne} cm2 big`);
} else {
  console.log(`triangle two is ${areaTriangleTwo} cm2 big`);
}

// case two
// triangle three and four

if (areaTriangleThree >= areaTriangleFour) {
  console.log(`triangle three is ${areaTriangleThree} cm2 big`);
} else {
  console.log(`triangle four is ${areaTriangleFour} cm2 big`);
}

// case three
// triangle five and six

if (areaTriangleFive >= areaTriangleSix) {
  console.log(`triangle five is ${areaTriangleFive} cm2 big`);
} else {
  console.log(`triangle six is ${areaTriangleSix} cm2 big`);
}
