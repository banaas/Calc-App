const date = new Date();

// Grab the current values of the date
var currentMonth = date.getMonth();
currentMonth = currentMonth + 1;
const shortMonths = [4, 6, 9, 11];
var currentYear = date.getFullYear();
var currentDay = date.getDate();


// Calculate and display the age

function ageValue () {
    var inputYear = document.getElementById("myYear").value; 
    var inputMonth = document.getElementById("myMonth").value;
    var inputDay = document.getElementById("myDay").value;

    if (inputYear <= 0 || inputYear > currentYear) {
        alert("You must enter a valid year.");
    } else if (inputMonth < 1 || inputMonth >= 13) {
        alert("You must enter a month between 1 and 12");
    } else if (inputDay < 1 || inputDay >= 32) {
        alert("You must enter a day between 1 and 31");
    } else if (inputYear >= currentYear && inputMonth > currentMonth) {
        alert("You must enter a date that currently isn't in the future.");
    } else if ((inputMonth == 4 || inputMonth == 6 || inputMonth == 9 || 
            inputMonth == 11) && inputDay >= 31) {
            alert("You must enter a valid date.");
    } else {
        var newYear = currentYear - inputYear;
        var newMonth = currentMonth - inputMonth;
        var newDay = currentDay - inputDay;

        // If the calculated month is negative or zero, remove one year and increment the amount of months / days

        if (newMonth <= -1) {
            newYear = (currentYear - inputYear) - 1;
            newMonth = 1 + (currentMonth - inputMonth);
        }

        // If the calculated day is negative or zero, remove one month and increment the amount of days

        if (newMonth > 1 || newDay <= 0) {
            newMonth = (currentMonth - inputMonth) - 1;
            newDay = (currentDay - inputDay) + 31;
        }

        document.getElementById("nYear").innerHTML = newYear + " years";
        document.getElementById("nMonth").innerHTML = newMonth + " months";
        document.getElementById("nDays").innerHTML = newDay + " days";
    }
}


