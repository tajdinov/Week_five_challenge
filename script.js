moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

var currentTime = moment();
// Turns hour back to zero. 12:30 would become 12:00
currentTime = currentTime.startOf('hour');


var x2 = [9, 10, 11, 12, 13, 14, 15, 16, 17];

x2.forEach(function (time) {
    // Add Elements
    var newDiv = $("<div>");
    newDiv.addClass("input-group input-group-lg pb-1");

    var addSpan = $("<span>");
    addSpan.addClass("input-group-text time-block block");

    var inputText = $('<input>').attr('type', 'text');
    inputText.addClass("form-control form" + time);
    inputText.data("Hour");

    var inputSubmit = $('<input>').attr('type', 'submit');
    inputSubmit.addClass("btn saveBtn" + time);
    inputSubmit.click(function(event) {
        $(".saveBtn" + time).addClass("saved")
        event.preventDefault();
        var formValue = $('.form' + time).val(); 
        console.log("This worked");
    // setting items to local storage
        localStorage.setItem(time, formValue);    
    });
    var icon = $("<i>");

    // appends here: 
    $(".container").append(newDiv);
    newDiv.append(addSpan);
    newDiv.append(inputText);
    newDiv.append(inputSubmit);
    inputSubmit.append(icon);

    var newTime = moment().hour(time).startOf('hour');
    addSpan.text(newTime.format('hh:mm A'));
   
    // If/Else Statement
    if (currentTime.startOf('hour').isSame(newTime.startOf('hour'))) {
        $(".form" + time).addClass("present");
    } else if (currentTime.isAfter(newTime)) {
        $(".form" + time).addClass("past");
    }
    else if (currentTime.isBefore(newTime)) {
        $(".form" + time).addClass("future");
    }
});

var x = [9, 10, 11, 12, 13, 14, 15, 16, 17];

for (var i = 0; i < x.length; i++) {
    var dataHour = localStorage.getItem(x[i]);
    // form - control
    $(".form" + x[i]).val(dataHour);
}
