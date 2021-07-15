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
console.log(nineA)
// changing strings to integers for time change loops
var a = parseInt(nineA);
var b = parseInt(tenA);
var c = parseInt(elevA);
var d = parseInt(noonP);
var e = parseInt(oneP) + 12;
var f = parseInt(twoP) + 12;
var g = parseInt(threeP) + 12;
var h = parseInt(fourP) + 12;
var i = parseInt(fiveP) + 12;

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
var saveBtn = $('.saveBtn');

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
    firstT.classList.remove('past');
    firstT.classList.remove('future');
} else if (a > hours) {
    firstT.classList.add('future');
    firstT.classList.remove('present');
    firstT.classList.remove('past');
} else {
    firstT.classList.add('past');
    firstT.classList.remove('present');
    firstT.classList.remove('future');
}

if (b === hours) {
    secondT.classList.add('present');
    secondT.classList.remove('past');
    secondT.classList.remove('future');
} else if (b > hours) {
    secondT.classList.add('future');
    secondT.classList.remove('present');
    secondT.classList.remove('past');

} else {
    secondT.classList.add('past');
    secondT.classList.remove('present');
    secondT.classList.remove('future');
}

if (c === hours) {
    thirdT.classList.add('present');
    thirdT.classList.remove('past');
    thirdT.classList.remove('future');
} else if (c > hours) {
    thirdT.classList.add('future');
    thirdT.classList.remove('past');
    thirdT.classList.remove('present');
} else {
    thirdT.classList.add('past');
    thirdT.classList.remove('present');
    thirdT.classList.remove('future');
}

if (d === hours) {
    fourthT.classList.add('present');
    fourthT.classList.remove('past');
    fourthT.classList.remove('future');
} else if (d > hours) {
    fourthT.classList.add('future');
    fourthT.classList.remove('past');
    fourthT.classList.remove('present');
} else {
    fourthT.classList.add('past');
    fourthT.classList.remove('present');
    fourthT.classList.remove('future');
}

if (e === hours) {
    fifthT.classList.add('present');
    fifthT.classList.remove('past');
    fifthT.classList.remove('future');
} else if (e > hours) {
    fifthT.classList.add('future');
    fifthT.classList.remove('past');
    fifthT.classList.remove('present');
} else {
    fifthT.classList.add('past');
    fifthT.classList.remove('present');
    fifthT.classList.remove('future');
}

if (f === hours) {
    sixT.classList.add('present');
    sixT.classList.remove('past');
    sixT.classList.remove('future');
} else if (f > hours) {
    sixT.classList.add('future');
    sixT.classList.remove('past');
    sixT.classList.remove('present');
} else {
    sixT.classList.add('past');
    sixT.classList.remove('present');
    sixT.classList.remove('future');
}

if (g === hours) {
    sevenT.classList.add('present');
    sevenT.classList.remove('past');
    sevenT.classList.remove('future');
} else if (g > hours) {
    sevenT.classList.add('future');
    sevenT.classList.remove('past');
    sevenT.classList.remove('present');
} else {
    sevenT.classList.add('past');
    sevenT.classList.remove('present');
    sevenT.classList.remove('future');
}

if (h === hours) {
    eighthT.classList.add('present');
    eighthT.classList.remove('past');
    eighthT.classList.remove('future');
} else if (h > hours) {
    eighthT.classList.add('future');
    eighthT.classList.remove('past');
    eighthT.classList.remove('present');
} else {
    eighthT.classList.add('past');
    eighthT.classList.remove('future');
    eighthT.classList.remove('present');
}

if (i === hours) {
    nineT.classList.add('present');
    nineT.classList.remove('past');
    nineT.classList.remove('future');
} else if (i > hours) {
    nineT.classList.add('future');
    nineT.classList.remove('past');
    nineT.classList.remove('present');

} else {
    nineT.classList.add('past');
    nineT.classList.remove('present');
    nineT.classList.remove('future');
}

var tasks = [];

$('.saveBtn').on('click', function (event) {
    

    
    var row = $(this).parent()
    
    console.log('element clicked')
    var todos = $(row).closest("tr").children().find('textarea').val();
    console.log('element clicked')
    
    console.log(todos);
    var hourBlock = $(this).parent().parent().children().attr('id');
    console.log(hourBlock);
    // // var storageTasks = JSON.stringify(savedTasks);
    localStorage.setItem(hourBlock, todos);



    // var savedTasks = {
    //     firstT: firstT.val(),
    //     secondT: secondT.val(),
    //     thirdT: $(this).next().val(),
    //     fourthT: $(this).next().val(),
    //     fifthT: $(this).next().val(),
    //     sixT: $(this).next().val(),
    //     sevenT: $(this).next().val(),
    //     eighthT: $(this).next().val(),
    //     nineT: $(this).next().val()
    //   };
    // var value = $(this).siblings(".description").val();
    // // var time = $(this).parent().attr("scope");
    // var dateAdded = moment().format("dddd, MMMM Do");

    // tasks.push({description: value, time: time, date: dateAdded});

    // // save the value in localStorage as time
    // localStorage.setItem("events", JSON.stringify(tasks));
    
})

// $('#hr9').closest("tr").children().find('textarea').val(localStorage.getItem(todos.val()));
$('#task').children().val(localStorage.getItem('hr9'));
$('#task1').children().val(localStorage.getItem('hr10'));
$('#task2').children().val(localStorage.getItem('hr11'));
$('#task3').children().val(localStorage.getItem('hr12'));
$('#task4').children().val(localStorage.getItem('hr13'));
$('#task5').children().val(localStorage.getItem('hr14'));
$('#task6').children().val(localStorage.getItem('hr15'));
$('#task7').children().val(localStorage.getItem('hr16'));
$('#task8').children().val(localStorage.getItem('hr17'));
