// adding the current day to the top 
var today = moment();
currentDay.textContent = today.format("ddd, MMM Do, YYYY"); 


// THIS IS MY CODE THAT WORKS, BUT ONLY FOR IDS!!!!!
// // defining variables 
// var formOne = document.getElementById("form-one");
// var buttonOne = document.getElementById("button-one");

// // function for saving to local storage - 9 AM 
// function showInput() {
//     localStorage.setItem("Event", formOne.value);
//     localStorage.getItem("Event", formOne.value);
// }

// buttonOne.addEventListener('click', showInput);

// formOne.value = localStorage.getItem("Event"); 


//  -------------------------------------------





// (this is my code from 12-29 10:30am)
// for (var i = 0; i < 9; i++) {
//     function saveInputs(event) {
//         event.preventDefault();
//         var inputValue = formInput[i].value.trim();
//         localStorage.setItem("Event", inputValue);
//     }
//     saveBtn[i].addEventListener('click', saveInputs);

// }




// saving to the scheduler (this was my code from 12-28-21)
// var saveBtn = document.getElementsByClassName("saveBtn");

// for(var i = 0; i < saveBtn.length; i++) { 
//     saveBtn[i].addEventListener('click', function(i, event) {
//     event.preventDefault();
//     var formInput = document.querySelectorAll("input").value;
//     localStorage.setItem("Event", formInput[i]); 
        
//     })
//     }
    



