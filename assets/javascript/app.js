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
var arrayOfQuestions = [];
var correct = [];
var firstIncorrect = [];
var secondIncorrect = [];
var endOfGame = 4;

//Questions
var firstQuestion = {
    question: "Who wrote Pride and Prejudice?",
    incorrectAnswer: "J.K. Rowling",
    correctAnswer: "Jane Austen",
    secondIncorrectAnswer: "Charlote Bronte",
}
var secondQuestion = {
    question: "Which Charles Dickens work has over 100 movie adaptations?",
    incorrectAnswer: "Great Expectations",
    secondIncorrectAnswer: "Oliver Twist",
    correctAnswer: "A Christmas Carol",
};
var thirdQuestion = {
    question: "When was the first Harry Potter book published?",
    correctAnswer: "1997",
    incorrectAnswer: "2010",
    secondIncorrectAnswer: "2001",
};
var fourthQuestion = {
    question: "What is Florida author Zora Neale Hurston\s most famous work?",
    incorrectAnswer: "Mules and Men",
    correctAnswer: "Their Eyes Were Watching God",
    secondIncorrectAnswer: "Jonah's Gourd Vine",
}

arrayOfQuestions.push(firstQuestion.question);
arrayOfQuestions.push(secondQuestion.question);
arrayOfQuestions.push(thirdQuestion.question);
arrayOfQuestions.push(fourthQuestion.question);
console.log(arrayOfQuestions);

correct.push(firstQuestion.correctAnswer);
correct.push(secondQuestion.correctAnswer);
correct.push(thirdQuestion.correctAnswer);
correct.push(fourthQuestion.correctAnswer);
console.log(correct);

function myQuestions(){
$("#question").append(arrayOfQuestions);
$("#first-answer").append(correct[index].correctAnswer);
$("#incorrect-answer").append(arrayOfQuestions[index].incorrectAnswer);
$("#second-incorrect-answer").append(arrayOfQuestions[index].secondIncorrectAnswer);
}

myQuestions();

//on timer
// incr loss
// incr index , test for end of game 

$("#correct-answer").on('click', function(){
    //console.log('That is your guess');
    if(arrayOfQuestions[index].correct == 1){
        console.log('correct');
        //wins++
        //console.log(wins++);
        //$("section").html("Correct!")
    } else{
        console.log('incorrect');
        //loss++
        //console.log(loss++);
        //$("section").html("Wrong! The correct answer is: ")
    }
    //index increment
    index++;
if(index == endOfGame){
    index = 0;
} 
 myQuestions();
   
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
    
});




});