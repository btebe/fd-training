# Javascript Questions

1. Name the three ways to declare a variable?
    - let, var and const
2. Which of the three variable declarations should you avoid and why?
    - a const because it can neither be updated nor re-declared.
3. What rules should you follow when naming variables?
    - must contain only letters, digits, or the symbols $ and _
    - first character must not be a digit.
4. What should you look out for when using the + operator with numbers and
strings?
    - with numbers, it adds them up
    - with strings, it concatenate them
5. How does the % operator work?
    - works as a modulus operator
    - it returns the remainder in division
6. Explain the difference between == and ===.
    - == : if values are equal or not
    - === : if values and their types are equal or not
7. When would you receive a NaN result?
    - when the value cannot be computed 
    - ex: ``parseInt("h",5) => NaN``
8. How do you increment and decrement a number?
    - num++ for increment
    - num-- for decrement
9. Explain the difference between prefixing and post-fixing increment/decrement
operators.
    - post-fixing: returns the value before incrementing/decrementing. ``x++``
    -  prefixing: returns the value after incrementing/decrementing. ``++x``
10. What is operator precedence and how is it handled in JS?
    - determines the order in which operators are evaluated
    - The multiplication operator has higher precedence than the addition operator and thus will be evaluated first.
11. How do you log information to the console?
    - ``console.log("hello");``
12. What does unary plus operator do to string representations of integers?
    - It can convert all string representations of numbers, boolean values ( true and false ), and null to numbers.
13. What are the eight data types in JavaScript?
    - Number, string, boolean, null, undefined, BigInt, symbol and object
    - Symbols are immutable (cannot be changed) and are unique.
    - ex: ``value1 = Symbol('hello'); const value2 = Symbol('hello'); console.log(value1 === value2); // false.``
14. Which data type is NOT primitive?
    - objects
15. What is the relationship between null and undefined?
    - null: a variable that is defined but is missing a value
    - undefined: a variable that refers to something that doesn't exist
16. What is the difference between single, double, and backtick quotes for strings?
    - single, double: they are similar to each other. they are used as string literals
    - you can use single quotes inside double quotes or double quotes inside single quotes
    - backticks: for string operations and string literals
17. What is the term for embedding variables/expressions in a string?
    - string interpolation: the process of embedding an expression into part of a string. 
18. Which type of quote lets you embed variables/expressions in a string?
    - backticks
19. How do you embed variables/expressions in a string?
    - using ``${num}``
20. How do you escape characters in a string?
    - backslash character ( \ ) 
21. What is the difference between the slice/substring/substr string methods?
    - slice: extracts parts of a string and returns the extracted parts in a new string. 
    - substring: extracts parts of a string and returns the extracted parts in a new string.
    - substr: extracts parts of a string, beginning at the character at the specified position, 
    - and returns the specified number of characters.
22. What are the three logical operators and what do they stand for?
    - || : OR
    - && : AND
    - ! : NOT
24. What are the comparison operators?
    - == : equal
    - != : noy equal
    - === : strict equal
25. What are truthy and falsy values?
    - Truthy values: values that evaluate to True in a boolean context.
    - Falsy values: values that evaluate to False in a boolean context.
26. What are the falsy values in JavaScript?
    - false, 0, -0, 0n , "", '', backticks, null, undefined, NaN and document.all
27. What are conditionals?
    - control behavior in JavaScript and determine whether or not pieces of code can run.
28. What is the syntax for an if/else conditional?
    - ``if(condition){}else{}``
29. What is the syntax for a switch statement?
    -``switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}``
30. What is the syntax for a ternary operator?
    -``num1 == num2 ? console.log('true') : console.log('flase');``
31. What is nesting?
    - when you write something inside of something else.
    - You can have a function inside of another function
32. What are functions useful for?
    - define a block of code, give it a name and then execute it as many times as you want.
33. How do you invoke a function?
    - by calling the function name. if no params then () if with params (a,b)
    - ex: isOdd();
34. What are anonymous functions?
    - a function that does not have any name associated with it.
    - not accessible after its initial creation, it can only be accessed 
    - by a variable it is stored in as a function as a value. 
35. What is function scope?
    - Variables that are declared inside a function are called local variables and in the function scope.
    - Local variables are accessible anywhere inside the function.
36. What are return values?
    - The return statement stops the execution of a function and returns a value. 
37. What are arrow functions?
    - another way to create a function
