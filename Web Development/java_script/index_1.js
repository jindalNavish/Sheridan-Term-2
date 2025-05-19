var correct = false;
while(!correct){


a = Math.floor(Math.random()*10);
b = Math.floor(Math.random()*10);
answer = prompt("What is "+ a +"+"+ b);
answer2 = a + b;
var correct = false;


if (parseInt(answer) === a + b){
    alert("the answer is correct"); 
    correct = true;
}
else{
    alert("The answer is wrong, try again!!")
}
}

var initializedArray = [49,"real",-2.9, false];
document.write(initializedArray[1]);