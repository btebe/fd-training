# Front-end dev intensive training program week 03.

## Asignments:
1. Read more about JS and try to answer as many questions as you can from the JS1 - Terminology
& Definitions file, which you can find attached in the email.

2. Assignment (Mathematical Shapes):
    - Write a JavaScript program to find the diagonal of a square where the length of each
side is 9.
    - Write a JavaScript program to find the area of a triangle where lengths of the three of its
sides are 5, 6 and 7.
    - Write a JavaScript program to find the circumference and surface area of a circle whose
radius is 4.
    - When trying to find these values, you will need to use PI. Remember constants?

3. Assignment (Conditional Statements & Loops):
    - Write a JavaScript program that accepts two integers and displays the larger of the two.
    - Write a JavaScript program that checks whether an integer is an even or an odd number.

4. Assignment (Main JavaScript Project):
    - Create a blank HTML document with a script tag (Hint: it is best practice to link an
external .js file). This game is going to be played completely from the console, so don’t
worry about putting anything else in there.
    - Your game is going to play against the computer, so begin with a function called
computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this
function in the game to make the computer’s play. Tip: use the console to make sure this
is returning the expected output before moving to the next step!
    - Write a function that plays a single round of Rock Paper Scissors. The function should
take two parameters - the playerSelection and computerSelection - and then return a
string that declares the winner of the round like so: "You Lose! Paper beats Rock"
i. Make your function’s playerSelection parameter case-insensitive (so users can
input rock, ROCK, RocK or any other variation). (Here’s a tip on how to do that)
    - Important note: you want to return the results of this function call, not console.log()
them. You’re going to use what you return later on, so let’s test this function by using
console.log to see the results:
``function playGround(playerSelection, computerSelection){ //your code}``
``const playerSelection = "rock";``
``const computerSelection = computerPlay();``
``console.log(playGround(playerSelection, computerSelection));``
