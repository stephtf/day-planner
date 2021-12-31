// adding the current day to the top 
var today = moment();
currentDay.textContent = today.format("ddd, MMM Do, YYYY"); 

// adding the time 
var time = moment().format('HH'); 
console.log(time);


// (9am) First Event 
var formOne = document.getElementById("form-one");
var buttonOne = document.getElementById("button-one");

function showInput() {
    localStorage.setItem("9AM", formOne.value);
}

buttonOne.addEventListener('click', showInput);

formOne.value = localStorage.getItem("9AM"); 


// (10am) Second Event 
var formTwo = document.getElementById("form-two");
var buttonTwo = document.getElementById("button-two");

function showInputTwo() {
    localStorage.setItem("10AM", formTwo.value);
}

buttonTwo.addEventListener('click', showInputTwo);

formTwo.value = localStorage.getItem("10AM"); 


// (11am) Third Event 
var formThree = document.getElementById("form-three");
var buttonThree = document.getElementById("button-three");

function showInputThree() {
    localStorage.setItem("11AM", formThree.value);
}

buttonThree.addEventListener('click', showInputThree);

formThree.value = localStorage.getItem("11AM"); 



// (12pm) Fourth Event 
var formFour = document.getElementById("form-four");
var buttonFour = document.getElementById("button-four");

function showInputFour() {
    localStorage.setItem("12PM", formFour.value);
}

buttonFour.addEventListener('click', showInputFour);

formFour.value = localStorage.getItem("12PM"); 


// (1pm) Fifth Event 
var formFive = document.getElementById("form-five");
var buttonFive = document.getElementById("button-five");

function showInputFive() {
    localStorage.setItem("1PM", formFive.value);
}

buttonFive.addEventListener('click', showInputFive);

formFive.value = localStorage.getItem("1PM"); 


// (2pm) Sixth Event 
var formSix = document.getElementById("form-six");
var buttonSix = document.getElementById("button-six");

function showInputSix() {
    localStorage.setItem("2PM", formSix.value);
}

buttonSix.addEventListener('click', showInputSix);

formSix.value = localStorage.getItem("2PM"); 


// (3pm) Seventh Event 
var formSeven = document.getElementById("form-seven");
var buttonSeven = document.getElementById("button-seven");

function showInputSeven() {
    localStorage.setItem("3PM", formSeven.value);
}

buttonSeven.addEventListener('click', showInputSeven);

formSeven.value = localStorage.getItem("3PM"); 


// (4pm) Eigth Event 
var formEight = document.getElementById("form-eight");
var buttonEight = document.getElementById("button-eight");

function showInputEight() {
    localStorage.setItem("4PM", formEight.value);
}

buttonEight.addEventListener('click', showInputEight);

formEight.value = localStorage.getItem("4PM"); 


// (5pm) Ninth Event 
var formNine = document.getElementById("form-nine");
var buttonNine = document.getElementById("button-nine");

function showInputNine() {
    localStorage.setItem("5PM", formNine.value);
}

buttonNine.addEventListener('click', showInputNine);

formNine.value = localStorage.getItem("5PM"); 




// color-coding the time blocks! 
var timeBlock = [formOne, formTwo, formThree, formFour, formFive, formSix, formSeven, formEight, formNine];

var hour = [9, 10, 11, 12, 13, 14, 15, 16, 17];

for (i=0; i < timeBlock.length; i++) {
    if (time > hour[i]) {
        timeBlock[i].classList.add('past'); 
    } else if (time === hour[i]) {
        timeBlock[i].classList.add('present');
    } else {
        timeBlock[i].classList.add('future');
    }
}






// The code below was my attempt to use a for loop to store the value of each form using querySelectorAll "input" and using class for each button. It does not work! 

// var saveBtn = document.getElementsByClassName("saveBtn");
// var formInput = document.querySelectorAll("input");

// for (var i = 0; i < 9; i++) {


//     function showInput() {
//         localStorage.setItem("Event", formInput[i].value); 
//         localStorage.getItem("Event", formInput[i].value);
//     }
    
//     saveBtn[i].addEventListener('click', showInput);

//     formInput[i] = localStorage.getItem("Event");

// }




