// Time Blocks
var nineA = document.getElementById('hr9').innerHTML;
var tenA = document.getElementById('hr10').innerHTML;
var elevA = document.getElementById('hr11').innerHTML;
var noonP = document.getElementById('hr12').innerHTML;
var oneP = document.getElementById('hr13').innerHTML;
var twoP = document.getElementById('hr14').innerHTML;
var threeP = document.getElementById('hr15').innerHTML;
var fourP = document.getElementById('hr16').innerHTML;
var fiveP = document.getElementById('hr17').innerHTML;
// changing strings to integers for time change loops
var a = parseInt(nineA);
var b = parseInt(tenA);
var c = parseInt(elevA);
var d = parseInt(noonP);
var e = parseInt(oneP)+12;
var f = parseInt(twoP)+12;
var g = parseInt(threeP)+12;
var h = parseInt(fourP)+12;
var i = parseInt(fiveP)+12;

// grabbing rows to change text background.
var firstT = document.getElementById('task');
var secondT = document.getElementById('task1');
var thirdT = document.getElementById('task2');
var fourthT = document.getElementById('task3');
var fifthT = document.getElementById('task4');
var sixT = document.getElementById('task5');
var sevenT = document.getElementById('task6');
var eighthT = document.getElementById('task7');
var nineT = document.getElementById('task8');

// placeholder for current time
var currentT = document.getElementById('currentDay');
var saveBtn = $('button');

// current time
var rightNow = moment();
// displays current time
currentT.textContent = rightNow.format('dddd, MMMM Do');
// time in hours. used for calender color changes
var hours = parseInt(moment().format('HH'));
console.log(hours);
console.log(h);


// loops for color changing time blocks
if (a === hours) {
    firstT.classList.add('present');
} else if (a > hours) {
    firstT.classList.add('future')
} else {
    firstT.classList.add('past')
}

if (b === hours) {
    secondT.classList.add('present');
} else if (b > hours) {
    secondT.classList.add('future')
} else {
    secondT.classList.add('past')
}

if (c === hours) {
    thirdT.classList.add('present');
} else if (c > hours) {
    thirdT.classList.add('future')
} else {
    thirdT.classList.add('past')
}

if (d === hours) {
    fourthT.classList.add('present');
} else if (d > hours) {
    fourthT.classList.add('future')
} else {
    fourthT.classList.add('past')
}

if (e === hours) {
    fifthT.classList.add('present');
} else if (e > hours) {
    fifthT.classList.add('future')
} else {
    fifthT.classList.add('past')
}

if (f === hours) {
    sixT.classList.add('present');
} else if (f > hours) {
    sixT.classList.add('future')
} else {
    sixT.classList.add('past')
}

if (g === hours) {
    sevenT.classList.add('present');
} else if (g > hours) {
    sevenT.classList.add('future')
} else {
    sevenT.classList.add('past')
}

if (h === hours) {
    eighthT.classList.add('present');
} else if (h > hours) {
    eighthT.classList.add('future')
} else {
    eighthT.classList.add('past')
}

if (i === hours) {
    nineT.classList.add('present');
} else if (i > hours) {
    nineT.classList.add('future')
} else {
    nineT.classList.add('past')
}