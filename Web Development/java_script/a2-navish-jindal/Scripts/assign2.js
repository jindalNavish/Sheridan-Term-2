//Assigning  conversion rate as per today's exchange rate
var cad = 1.37;
var franc = 0.86;
var euros = 0.91;
var inr = 83.97;


//Adding white to classlist of body to access latter
document.body.classList.add('white');

//Making exchange rate buttons 

//Making two variables one as input and other as output to further implement coversion rate logic from Usd to Cad
function usdCad(){
    var input1 = document.getElementById('fr1').value;
    var output1 = cad * input1;
    document.getElementById('first')
    first.innerHTML = "Result :"+Math.round(output1 * 100)/100 +"$";
}

//Making two variables one as input and other as output to further implement coversion rate logic from Cad to Usd

function cadUsd(){
    var input2 = document.getElementById('fr2').value;
    var output2 = (input2 / cad) ;
    document.getElementById('second')
    second.innerHTML = "Result :"+Math.round(output2 * 100)/100+"$";
    
}

//Making two variables one as input and other as output to further implement coversion rate logic from Usd to Franc

function usdFranc(){
    var input3 = document.getElementById('fr3').value;
    var output3 = franc * input3;
    document.getElementById('third')
    third.innerHTML = "Result :"+Math.round(output3 * 100)/100+"₣";
    
}

//Making two variables one as input and other as output to further implement coversion rate logic from Franc to Usd

function francUsd(){
    var input4 = document.getElementById('fr4').value;
    var output4 = input4 / franc;
    document.getElementById('fourth')
    fourth.innerHTML = "Result :"+Math.round(output4 * 100)/100+"$" ;
    
}

//Making two variables one as input and other as output to further implement coversion rate logic from Usd to Euros

function usdEuros(){
    var input5 = document.getElementById('fr5').value;
    var output5 = euros * input5;
    document.getElementById('fifth')
    fifth.innerHTML = "Result :"+Math.round(output5 * 100)/100+"€" ;
    
}

//Making two variables one as input and other as output to further implement coversion rate logic from Euros to Usd 

function eurosUsd(){
    var input6 = document.getElementById('fr6').value;
    var output6 = input6 / euros;
    document.getElementById('sixth')
    sixth.innerHTML = "Result :"+Math.round(output6 * 100)/100+"$";
    
}

//Making two variables one as input and other as output to further implement coversion rate logic from Usd to Inr

function usdInr(){
    var input7 = document.getElementById('fr7').value;
    var output7 = inr * input7;
    document.getElementById('seventh')
    seventh.innerHTML = "Result :"+Math.round(output7 * 100)/100+"₹" ;
}

//Making two variables one as input and other as output to further implement coversion rate logic from Inr to Usd

function inrUsd(){
    var input8 = document.getElementById('fr8').value;
    var output8 = input8 / inr;
    document.getElementById('eighth')
    eighth.innerHTML = "Result :"+Math.round(output8 * 100)/100+"$";
}

//Making function to change the theme from dark to light and light to dark and also changing the text colors

function theme(){
    var theme = document.body
    var introChange = document.getElementById('intro')
    var titleChange = document.getElementById('currency')
    var lastChange = document.getElementsByClassName('out')

    if (theme.classList.contains('white')){
        theme.classList.remove('white');
        theme.classList.add('black')
        theme.style.backgroundColor = 'black';
        introChange.style.color = 'white';
        titleChange.style.color = 'white';

        for(var i=0;i < lastChange.length;i++){
            lastChange[i].style.color = 'white';
        }

    
    }else{
        theme.classList.remove('black');
        theme.classList.add('white');
        theme.style.backgroundColor = 'white';
        introChange.style.color = 'black';
        titleChange.style.color = 'black';
    

        for(var i=0;i < lastChange.length;i++){
            lastChange[i].style.color = 'black';
        }

    }}