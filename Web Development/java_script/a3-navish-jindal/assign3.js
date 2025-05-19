// Accessing menu and form from the navigation section using DOM
menu = document.getElementById("menu");
form = document.getElementById("form");
feature = document.getElementById("feature");

//Setting up the counters for times a button is clicked and hover over about and service tag

var counter_menu = 1;
var counter = 0;
var i = 0;

//Creating a function for menu 

menu.onclick = function () {
  // Incriminting the counters

  counter_menu++;
  counter++;

  //Setting up the if else statement to make About and Service section in website

  if (counter_menu % 2 == 0) {
    document.getElementById("About").innerHTML = "About";
    document.getElementById("Services").innerHTML = "Services";
  } 
  
  else {
    document.getElementById("About").innerHTML = "";
    document.getElementById("Services").innerHTML = "";
  }

  //Setting up a function for time the mouse went over about and services

  feature.onmousemove = function () {
    document.getElementById("clicks").innerHTML =
      "Button Clicks:" + counter + " | Link Hovers:" + i++;
  };

  document.getElementById("clicks").innerHTML =
    "Button Clicks:" + counter + " | Link Hovers:" + i;
};

// Setting up  a function for the forms and also making a function for validation of those fields

form.onclick = function () {
  document.getElementById("first").innerHTML =
    '<label>First Name: <input type="text" id="Firstname"></label> ';
  document.getElementById("last").innerHTML =
    '<label>Last Name: <input type="text" id="Lastname"> </label>';
  document.getElementById("pass").innerHTML =
    '<label>Password: <input type="password" id="Password"> </label>';
    document.getElementById('validation').innerHTML ='<br><br><button onclick="checkScript()"> Submit </button>'


}

// Using a function to validate each field individauaaly 

function checkScript(){
        
    var name = document.getElementById('Firstname').value;
    var msg = document.getElementById('msg');

    if (name == "") {
        msg.innerHTML = "This field is required<br><br>";
        return false;
    }
    else {
        document.getElementById("msg").innerHTML = "";}

    var name2 = document.getElementById('Lastname').value;
    var msg2 = document.getElementById('msg2');

    if (name2 == "") {
        msg2.innerHTML = "This field is required<br><br>";
        return false;
    }
    else {
        document.getElementById("msg").innerHTML = "";}

    var name3 = document.getElementById('Password').value;
    var msg3 = document.getElementById('msg3');

    if (name3 == "") {
        msg3.innerHTML = "This field is required<br><br>";
        return false;
    }
    else {
        document.getElementById("msg").innerHTML = "";}
} 