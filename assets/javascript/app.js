$(document).ready(function(){
    //start button that when clicked will display the first question
    //$(".start-game").on('click', function());

//Timer

// var number = 5;
//     console.log(number);
// var numberHolder;

// function stopQuestion(){
//     numberHolder = setInterval(decrement, 1000);
//     console.log(numberHolder);
// }

// function decrement(){
//     number--;
//     console.log(number--);
//     //$("#timer").html("<h3>" + number + "</h3>");
//     if (number === 0) {
//         console.log(stop);
//         stop();
//     }
// }
// function timer(){
//     numberHolder = setInterval(decrement, 1000);
//     console.log(numberHolder);
// }
// function stop(){
//     clearInterval(numberHolder);
// }


//Variables
var win = 0;
var loss = 0;
var unanswered = 0;
var index = 0;
var arrayOfQuestions = ["Who wrote Pride and Prejudice?", "Which Charles Dickens work has over 100 movie adaptations?", "When was the first Harry Potter book published?", "What is Florida author Zora Neale Hurston\s most famous work?"];
var correct = ["Jane Austen", "A Christmas Carol", "1997", "Their Eyes Were Watching God"];
var firstIncorrect = ["J.K. Rowling", "Great Expectations", "2010", "Mules and Men"];
var secondIncorrect = ["Charlote Bronte", "Oliver Twist", "2001", "Jonah's Gourd Vine"];
var endOfGame = 4;


function myQuestions(){
    var i = 0;
    document.getElementById('question').innerHTML = arrayOfQuestions[i++];
    //console.log('question');
}
function correctAnswer(){
    var i = 0;
    document.getElementById('first-answer').innerHTML = correct[i++];
    //console.log('correct answer');
}
function firstIncorrectAnswer(){
    var i = 0;
    document.getElementById('second-answer').innerHTML = firstIncorrect[i++];
    //console.log('incorrect');
}
function secondIncorrectAnswer(){
    var i = 0;
    document.getElementById('third-answer').innerHTML = secondIncorrect[i++];
    //console.log('incorrect two');
}

myQuestions();
correctAnswer();
firstIncorrectAnswer();
secondIncorrectAnswer();

//on timer
// incr loss
// incr index , test for end of game 

$("#first-answer").on('click', function(){
    //console.log('That is your guess');
    if(correct){
        console.log('correct');
        win++
        console.log(win++);
        $("section").append("Correct!")
    } else{
        console.log('incorrect');
        loss++
        console.log(loss++);
        $("section").html("Wrong! The correct answer is: ")
    }
    //index increment
    index++;
if(index == endOfGame){
    index = 0;
} 
 myQuestions();
 correctAnswer();
 firstIncorrectAnswer();
 secondIncorrectAnswer();
   
});

$('#second-answer').on('click', function(){
    //console.log('That is your second guess');
    if(arrayOfQuestions[index].correct == 2){
        console.log('correct');
        //$("#question").html("Correct!")
        //wins++
        //console.log(wins++);
    } else{
        console.log('incorrect');
        //$("#question").html("Wrong! The correct answer is: ")
        //loss++
        //console.log(loss++);
    }
    index++;
    if(index == endOfGame){
        index = 0;
    }
    myQuestions();
    correctAnswer();
    firstIncorrectAnswer();
    secondIncorrectAnswer();
    
});

$('#third-answer').on('click', function(){
    //console.log('That is your third guess');
    if(arrayOfQuestions[index].correct == 3){
        console.log('correct');
         //wins++
         //console.log(wins++);
    } else{
        console.log('incorrect');
        //loss++
        //console.log(loss++);
    }
    index++;
    if(index == endOfGame){
        index = 0;
    }
    myQuestions();
    correctAnswer();
    firstIncorrectAnswer();
    secondIncorrectAnswer();
    
});




});
