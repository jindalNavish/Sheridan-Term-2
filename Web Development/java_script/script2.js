for(var i=1; i<=5; i++)
    {
    document.write(i);
}

// var n = prompt("enter a number");{
//     if(n<100){
//         alert("that was a small number");}
//     else{
//         alert("That was a big number");
//         alert("done");}
    
// }

function warn()
{
    alert("The form will be submitted")
}

//When a function is ended with ; it is call function
//Function ends with ()

function getConfirm(){
    var k = confirm("Do you want to continue?");

    if (k == true)
    {
        alert("user wants to continue");
    }

    else{
        alert("User does not want to continue");
    }
}

// var y = prompt("enter a number");
// y = parseInt(y)+1;
// alert(y);

var num= prompt("Enter a number");
if (isNaN(num)){
    alert("You entered a invalid number");
}
else{
    alert("You entered a number");
}
var initializedArray = [49,"real",-2.9,false];

document.write(initializedArray[1]);