//VARIABLES
/* variables declared before functions so that its a global variable that persists 
its value through the function calls. 
If you put it inside the function it will be always 0 when the function is called
moving the variable out of the scope of the function.

moving the variable out of the scope of the function.
this will make the same variable accessible by other methods in the same scope*/

//NUMBER VARIABLES
let buttons = document.getElementById("equal");
let screen = document.getElementById("screen");
let firstNumber = document.getElementById("one");
let secondNumber = document.getElementById("two");
let dotNumber = document.getElementById("dot");
let thirdNumber = document.getElementById("three");
let fourthNumber = document.getElementById("four");
let fifthNumber = document.getElementById("five");
let sixthNumber = document.getElementById("six");
let seventhNumber = document.getElementById("seven");
let eightNumber = document.getElementById("eight");
let ninthNumber = document.getElementById("nine");



//OPERATOR VARIABLES
let zeroNumber = document.getElementById("zero");
let clear = document.getElementById("erase");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multiply = document.getElementById("multiply");
let division = document.getElementById("division");



// NUMBER BUTTONS
// NUMBER 1 BUTTON

firstNumber.addEventListener("click", function(e) {
/* e is the short var reference for event object which will be passed to event handlers.
The event object essentially has lot of interesting methods and properties that can be used in the event handlers.
The click handler which is a MouseEvent
The handle (e), is like a variable that allows you to interact with the object in this case being firstNumber */
    let display = document.getElementById("one").innerText; //.innerText writing into an HTML element
    screen.value += display;   //The addition assignment ( += ) operator adds the value of the right operand to a variable and assigns the result to the variable
});

// NUMBER 2 BUTTON
secondNumber.addEventListener("click", function(e) {
    let display = document.getElementById("two").innerText;
    screen.value += display;
});

// NUMBER 3 BUTTON
thirdNumber.addEventListener("click", function(e) {
    let display = document.getElementById("three").innerText;
    screen.value += display;
});

// NUMBER 4 BUTTON
fourthNumber.addEventListener("click", function(e) {
    let display = document.getElementById("four").innerText;
    screen.value += display;
});

// NUMBER 5 BUTTON
fifthNumber.addEventListener("click", function(e) {
    let display = document.getElementById("five").innerText;
    screen.value += display;
});

// NUMBER 6 BUTTON
sixthNumber.addEventListener("click", function(e) {
    let display = document.getElementById("six").innerText;
    screen.value += display;
});

// NUMBER 7 BUTTON
seventhNumber.addEventListener("click", function(e) {
    let display = document.getElementById("seven").innerText;
    screen.value += display;
});

// NUMBER 8 BUTTON
eightNumber.addEventListener("click", function(e) {
    let display = document.getElementById("eight").innerText;
    screen.value += display;
});

// NUMBER 9 BUTTON
ninthNumber.addEventListener("click", function(e) {
    let display = document.getElementById("nine").innerText;
    screen.value += display;
});

// ZERO BUTTON
zeroNumber.addEventListener("click", function(e) {
    let display = document.getElementById("zero").innerText;
    screen.value += display;
});

// DOT BUTTON
dotNumber.addEventListener("click", function(e) {
    let display = document.getElementById("dot").innerText;
    screen.value += display;
});



//OPERATOR BUTTONS
// EQUAL BUTTON
buttons.addEventListener("click", function(e) {
    let display = document.getElementById("equal").innerText;
    if(display == "=" && screen.value == ""){
        screen.value = 0;
    }
    else{
        screen.value = eval(screen.value);
    }
});

// CLEAR BUTTON
clear.addEventListener("click", function(e) {
    let display = document.getElementById("erase");
    screen.value = "";              //REPLACE WITH AN EMPTY STRING
});

plus.addEventListener("click", function(e) {
    let display = document.getElementById("plus").innerText;
    
    if(screen.value == ""){
        screen.value += "";
        alert("Enter a number first");
    }
    else{
        screen.value += display;
    }

});
// SUBTRACT BUTTON
minus.addEventListener("click", function(e) {
    let display = document.getElementById("minus").innerText;
    screen.value += display;

});
// MULTIPLY BUTTON
multiply.addEventListener("click", function(e) {
    let display = document.getElementById("multiply").innerText;
    if(screen.value == ""){
    }
    else{
        screen.value += display;
    }
});
// DIVISION BUTTON
division.addEventListener("click", function(e) {
    let display = document.getElementById("division").innerText;
    if(screen.value == ""){
        screen.value += "";
        alert("Enter a number first");
    }
    else{
        screen.value += display;
    }
});

//SINGULAR DECIMAL?????
// appendNumber(number) {
//     if (number === '.' && this.currentOperand.includes('.')) return
//     this.currentOperand = this.currentOperand.toString() + number.toString()
//   }
