const date = new Date();

// Grab the current values of the date
var currentMonth = date.getMonth();
currentMonth = currentMonth + 1;
var currentYear = date.getFullYear();
var currentDay = date.getDate();

// Calculate and display the age

function ageValue () {
    var inputYear = document.getElementById("myYear").value; 
    var inputMonth = document.getElementById("myMonth").value;
    var inputDay = document.getElementById("myDay").value;

    if (inputYear > currentYear || inputYear <= 0) {
        alert("You must enter a year before 2023.");
    } else if (inputMonth < 1 || inputMonth >= 13) {
        alert("You must enter a month between 1 and 12");
    } else if (inputDay < 1 || inputDay >= 32) {
        alert("You must enter a day between 1 and 31");
    } else {
        var newYear = currentYear - inputYear;
        var newMonth = currentMonth - inputMonth;
        var newDay = currentDay - inputDay;
        document.getElementById("nYear").innerHTML = newYear + " years";
        document.getElementById("nMonth").innerHTML = newMonth + " months";
        document.getElementById("nDays").innerHTML = newDay + " days";
    }
}

