document.write("<h1>Hello world!</h1>");
document.write("<p><h3>Navish</h3></p>");
inp = prompt("What is your age?");

if (inp>=18){
alert("You are older than 18!");} 

con = confirm("Do you want to login?")

if (con=="true"){
    console.log("User wants to proceed");}
else{
    console.log("User canceled");
}

// myvalue = 2;
// myvalue = 5;
// result1 = myvalue + myvalue;
// document.write(result1);

// myvalue = 2;
// MYVALUE = 5;
// result2 = myvalue + MYVALUE;
// // alert(result2);

var money= 2000.50;
var name= "John";

document.write(money);
document.write("<br>");
document.write(name);

// var x = 100;
// alert(x);

// x = "I'm a string now";
// alert(x);

// x = 45.3;
// alert(x);

// x = "$" + x;
// alert(x);

document.write("<br>")

var myVar = "global";

function checkScope()
{
    var myVar= "local";
    document.write(myVar);

}
checkScope();

var jod = 5;
document.write("<br>")
document.write(jod++);
document.write("<br>")
document.write(jod);
document.write("<br>")
document.write(++jod);
document.write("<br>")
document.write(jod);
document.write("<br>")

console.log("Hello,World!");


var temp = 30;

if(temp > 35){
    console.log("It's a hot day.");
}
else if(temp>20){
    console.log("It's a warm day");
}
else {
    console.log("It's a cold day");
}

document.write(typeof temp);

function start(){

    var game = confirm("Lets start the game");
    
    function ranNum(){
    var prob = Math.floor(Math.random()*10);
    return prob
    }
    
    var sequence = [];
    var userEntry = [];
    var userSeq = [];
    var seqLength  = 3;
    var conLength = 3;
    
    
    function Generator(){
    for(var i=0;i < seqLength;i++){
    sequence[i] = ranNum();
    var iNew = i + 1;
    
    alert("The "+ iNew +" number is "+sequence[i]);
    }}
    
    
    function userInput(){
    for(var j=0;j < conLength;j++){
    var jNew = j + 1;
    var entry = parseInt(prompt("Enter the "+ jNew +" number"));
    userEntry[j] = entry;
    }}
    
    function compare(){
    for(var n=0;n<seqLength;n++){
    if(sequence[n] === userEntry[n]){
    userSeq[n] = true;}
    
    }
    }
    }
    
    
    Generator();
    userInput();
    compare();
    
    
    
    
    while(game = true){
    
    
    if(userSeq.length = seqLength){
    var won = confirm("Your memory seems sharp, Would you like to continue?");
    if(won = true){
    seqLength += 1;
    conLength += 1;
    Generator();
    userInput();
    compare();
    }
    else{
    alert("The correct sequence was "+sequence+", Hard Luck!");
    game = false;
    }
    
    }
    else{
    alert("It was fun playing with you, Bye!!!!");
    game = false;
    
    }
    }
    
    