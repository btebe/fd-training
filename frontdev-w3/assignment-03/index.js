/**
 * finds the larger number out of the two values given
 * @param {Int} num1 first integer value
 * @param {Int} num2 second integer value
 * @return {Int} the larger number
 */
let findMax = (num1, num2) => {
  if (typeof num1 != "number" || typeof num2 != "number")
    return "values must be a number";

  if (!Number.isInteger(num1) || !Number.isInteger(num2))
    return "values must be of type integer";

  return num1 === num2 ? num1 : num1 > num2 ? num1 : num2;
};

/**
 * Determines if a given number is even or odd
 * @param {Int} num a value of type integer
 * @return {Int} either odd or even
 */
let isOdd = (num) => {
  if (typeof num != "number") return "values must be a number";
  if (!Number.isInteger(num)) return "values must be of type integer";
  return num % 2 === 0 ? "even" : "odd";
};
