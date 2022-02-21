const nameInput = document.getElementById('enterName');
const playerName = document.getElementById('playerName');
const taskNumb = document.getElementById('taskNumb');
const currTask = document.getElementById('task');
const answear = document.getElementById('answear');
const lives = document.getElementById('lives');

let currPlayerName = nameInput.value;
let firstQestion = false;
let livesCount = 3;
let currAnswear = 0;
let question1 = false , question2 = false, question3 = false , question4 = false, question5 = false , question6 = false, 
question7 = false , question8 = false, question9 = false;
let couter = 1;

$("#container").hide();

$(document).ready(function(){
    $('#submName').click(function(){
        $("#container").show();
         currPlayerName = nameInput.value;
         $('#playerName').append(currPlayerName)
        $("#playerName").show();
        $('#submName').hide();
        $('#enterName').hide();
        lives.append(" " + livesCount);
        
        startGame();

        
    });
});




function startGame(){
   first();
}

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function first(){
   var random1 = getRandomInt(1, 50);
   var random2 = getRandomInt(1, 50);
   var result = random1 + random2;
   currAnswear = result
   var question = random1 + " + " + random2 + " = "
   var playerAnswaer;
   $("#task").text(question);
    $("#submit").click(function(){
        playerAnswaer = parseInt(answear.value);
        if(playerAnswaer === currAnswear){
         alert("correct");
         question1 = true;
         couter++;
        }
         else{
         alert("false");}   
     }
    );
   
}

function second(){
    var random1 = getRandomInt(10, 50);
    var random2 = getRandomInt(1, 10);
    var result = random1 - random2;
    currAnswear = result
    var question = random1 + " - " + random2 + " = "
    var playerAnswaer;
    $("#task").text(question);
    $("#submit").click(function(){
        playerAnswaer = parseInt(answear.value);

        if(playerAnswaer === currAnswear){
         alert("correct"); 
        question2 = true;}
        
         else{
         alert("false");}
         
     }
    );
}

function third(){
    var random1 = getRandomInt(1, 9);
    var random2 = getRandomInt(1, 9);
    var result = random1 * random2;
    currAnswear = result
    var question = random1 + " * " + random2 + " = "
    currTask.innerHTML = question;
    var playerAnswaer;
    $("#task").text(question);
    $("#submit").click(function(){
        playerAnswaer = parseInt(answear.value);
        if(playerAnswaer === currAnswear){
         alert("correct");
        question3 = true; }
         else{
         alert("false");}
     }
    );
}



