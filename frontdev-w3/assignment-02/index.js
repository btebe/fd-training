/**
 * finds the diagonal of a square with given two lengths adjacent to one another.
 * @param {*} sideA a length adjacent to sideB in a square
 * @param {*} sideB a length adjacent to sideA in a square
 * @return {*} the diagonal of a square
 */
let findDiagonal = (sideA, sideB) => {
  if (typeof sideA != "number" || typeof sideB != "number")
    return "please enter a number value";
  return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
};

/**
 *finds the area of a triangle with three lengths given
 * @param {Number} sideA one of the lengths of a triangle
 * @param {Number} sideB one of the lengths of a triangle
 * @param {Number} sideC one of the lengths of a triangle
 * @return {Number} the area of a triangle
 */
let findTriArea = (sideA, sideB, sideC) => {
  if (
    typeof sideA != "number" ||
    typeof sideB != "number" ||
    typeof sideC != "number"
  )
    return "please enter a number value";
  // calculate the semi-perimeter
  let s = (sideA + sideB + sideC) / 2;
  //calculate the area
  let areaValue = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));
  return areaValue;
};

/**
 * finds the cricumference of a circle with a given radius.
 * @param {Number} radius radius of a circle
 * @return {Number} the circumference of a circle
 */
let findCir = (radius) => {
  return typeof radius != "number"
    ? "please enter a number value"
    : Math.floor(radius * (2 * Math.PI));
};

/**
 * calcutes the area of a circle with a given radius.
 * @param {Number} radius radius of a circle
 * @return {Number} area of a circle.
 */
let findCircArea = (radius) => {
  return typeof radius != "number"
    ? "please enter a number value"
    : Math.PI * Math.pow(radius, 2);
};

console.log("diagonal: " + findDiagonal(9, 9));
console.log("triangle area: " + findTriArea(5, 6, 7));
console.log("circum: " + findCir(4));
console.log("circle area: " + findCircArea(4));
console.log(findCircArea("djd"));
