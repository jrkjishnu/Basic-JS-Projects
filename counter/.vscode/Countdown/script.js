const months =[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Friday",
    "Saturday"
];
const dis = document.getElementById('display');
var date_future = new Date(2021, 04, 07, 15, 34, 10, 0);
console.log(weekdays[date_future.getMonth()]);
const days1 = document.querySelector('.days');
const hours1 = document.querySelector('.hours');
const minutes1 = document.querySelector('.minutes');
const seconds1 = document.querySelector('.seconds');
dis.innerHTML = `The DEAL Ends on ${weekdays[date_future.getMonth()]},<span style="color:red;">${date_future.getDay()} ${months[date_future.getMonth()]} ${date_future.getFullYear()}</span> ${date_future.getHours()}:${date_future.getMinutes()}`;
// get total seconds between the times
function display()
{
    var date_now = new Date()
    var delta = Math.abs(date_future- date_now) / 1000;
//console.log(Math.abs((date_future - date_now)/1000)/86400);
// calculate (and subtract) whole days
var days = Math.floor(delta / 86400);
//console.log(days);
delta -= days * 86400;

// calculate (and subtract) whole hours
var hours = Math.floor(delta / 3600) % 24;
delta -= hours * 3600;

// calculate (and subtract) whole minutes
var minutes = Math.floor(delta / 60) % 60;
delta -= minutes * 60;

// what's left is seconds
var seconds = Math.floor(delta % 60); 

days1.textContent = days;
hours1.textContent = hours;
minutes1.textContent = minutes;
seconds1.textContent = seconds;

//console.log(days+'days'+hours+' hours'+minutes+'minutes'+seconds);
//dis.innerHTML = `${days}+'days'+${hours}+' hours'+${minutes}+'minutes'+${seconds}+'seconds`;
}

setInterval(display, 1000);