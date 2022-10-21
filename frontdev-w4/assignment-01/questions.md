## Javascript pt 2

1. Why is it important to write clean code?
    - Being able to return to previously written code and understand what it does is key
2. What is the difference between good comments and bad comments?
    - good comment: tells the reader why this particular code is doing whatever it is doing 
    or explains what a section of code is about to do.
    - bad comments: tells unnecessary info that doesnt explain the block of code at all
3. What is an array?
    -  is a collection of items of same data type stored at contiguous memory locations.
4. What are arrays useful for?
    - when there is a need to use many variables of the same type
5. How do you access an array element?
    -  by referring to its index number.
6. How do you change an array element?
    - indexOf: to get the index of element you want replace ex: ``arr[arr.indexOf("hell0)]="hi"``
    - array.splice(): to replace the element at the specific index ex: ``arr.splice(index, 1, 'z');``
7. What are some useful array properties?
    - length: Sets or returns the number of elements in an array.
    - prototype: Allows you to add new properties and methods to an Array object.
8. What are some useful array methods?
    - functions like inludes(), pop(), push(), splice(), shift() and ..etc
9. What are loops useful for?
    - o execute a group of instructions or a block of code multiple times, without writing it repeatedly
10. What is the break statement?
    - used to jump out of a loop
11. What is the continue statement?
    - breaks one iteration in the loop, if a specified condition occurs, 
    and continues with the next iteration in the loop.
12. What is the DOM?
    - The Document Object Model
13. How do you target the nodes you want to work with?
    - we need to target/select by querySelectors or getElements by class/id
14. How do you create an element in the DOM?
    - ``let ele = document.createElement("p"); ele.textContent = "hello``
15. How do you add an element to the DOM?
    - ``document.body.appendChild(ele);`` 
16. How do you remove an element from the DOM?
    - select the target element that you want to remove first
    - ``ele.parentNode.removeChild(elem);``
17. How can you alter an element in the DOM?
    - you can alter style of the element ex ``ele.style.color = "red"``
    - or add content ex ``ele.textContent = "hello``
18. When adding text to a DOM element, should you use textContent or innerHTML?
    - textContent is safer
19. Where should you include your JavaScript tag in your HTML file when working
with DOM nodes?
    - in the body
20. How do “events” and “listeners” work?
    - events: When the page loads, it is called an event. When the user clicks a button, 
    that click too is an event. Other examples include events like pressing any key, 
    closing a window, resizing a window, etc
    -  listeners: is a procedure in JavaScript that waits for an event to occur.
21. What are three ways to use events in your code?
    -  inline, using a property, or using a listener
22. Why are event listeners the preferred way to handle events?
    - because you can add multiple event listeners for the same event. 
    - an object can only have one event handler for each event type
23. What are the benefits of using named functions in your listeners?
    - A named function helps keep your code more DRY (an acronym for Don't Repeat Yourself).
    Second, you can remove them later if you want using removeEventListener().
    You cannot do this with anonymous functions.
24. How do you attach listeners to groups of nodes?
    - if you assign them to the same class name, you loop over them and addEventListeners
25. What is the difference between the return values of querySelector and
querySelectorAll?
    - querySelector: can only access on element
    - querySelectorAll: can be used to access all elements which match with a specified CSS selector. 
26. What does a “nodelist” contain?
    - A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes).
    - NodeList is an object consisting of a list of all nodes in a page.
27. Explain the difference between “capture” and “bubbling”.
    - bubbling: the event is first captured and handled by the innermost element and then propagated to outer elements.
    - capture:  the event is first captured by the outermost element and propagated to the inner elements.
28. What is the difference between objects and arrays?
    -
29. How do you access object properties?
    - 
