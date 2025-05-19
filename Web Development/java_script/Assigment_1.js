// Making function for Start Button
function start(){

var game = confirm("Lets start the game")

// Creting two empty arrays and setting Length required

var sequence = [];
var userEntry = [];
var seqLength  = 3;
var conLength = 3;

// Creating a function to generate a random number

function ranNum(){
var prob = Math.floor(Math.random()*10);
return prob
}

// Creating a function to generate a sequence of random numbers

function Generator(){
for(var i=0;i < seqLength;i++){
sequence[i] = ranNum();
var iNew = i + 1;

alert("The "+ iNew +" number is "+sequence[i]);
}}

// Creating a function to genrate a array of user inputs

function userInput(){
for(var j=0;j < conLength;j++){
var jNew = j + 1;
var entry = parseInt(prompt("Enter the "+ jNew +" number"));
userEntry[j] = entry;
}}

// Craeting a function to compare the both arrays created at the begining

function compare(){
for(var n=0;n<sequence.length;n++){
if(sequence[n] !== userEntry[n]){
return false;}}
    return true;
}

//  Creating a while loop to implement the functions while verifiying whether user wants to continue the game or not

while(game === true){

Generator();
userInput();


if(compare()){
    var cont= confirm("Your memory seems sharp, Would you like to continue?");
    if (cont === true){
    seqLength += 1;
    conLength += 1;
    game = true;}

    else{
        game = false;}
    }
    else{
    alert("The correct sequence was "+sequence+", Hard Luck!");
    game = false;
    }
}
}

// Creating a function for the quit button

function quit(){
    alert("Sad seeing you go")
}