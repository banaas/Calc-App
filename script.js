const date = new Date();
var currentMonth = date.getMonth();
var currentYear = date.getFullYear();
var currentDay = date.getDay();

var calculate = document.querySelector('.btn btn-primary');

var inputYear = document.getElementById('year'); 
document.getElementById('year').innerHTML = months;
var newYear = currentMonth - inputYear;


function monthValue () {
    var months = document.getElementById("month").value; 
    document.getElementById("month").innerHTML = months;
    var newMonth = currentMonth - months;
    console.log(newMonth);
}

