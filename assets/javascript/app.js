$(document).ready(function(){
    //start button that when clicked will display the first question
    //$(".start-game").on('click', function());

//Timer

//Variables
var win = 0;
var loss = 0;
var unanswered = 0;
var index = 0;
var arrayOfQuestions = [];
var endOfGame = 4;

//Questions
var firstQuestion = {
    question: "Who wrote Pride and Prejudice?",
    firstAnswer: "J.K. Rowling",
    secondAnswer: "Jane Austen",
    thirdAnswer: "Charlote Bronte",
    correct: 2,
}
var secondQuestion = {
    question: "Which Charles Dickens work has over 100 movie adaptations?",
    firstAnswer: "Great Expectations",
    secondAnswer: "Oliver Twist",
    thirdAnswer: "A Christmas Carol",
    correct: 3,
};
var thirdQuestion = {
    question: "When was the first Harry Potter book published?",
    firstAnswer: "1997",
    secondAnswer: "2010",
    thirdAnswer: "2001",
    correct: 1,
};
var fourthQuestion = {
    question: "What is Florida author Zora Neale Hurston\s most famous work?",
    firstAnswer: "Mules and Men",
    secondAnswer: "Their Eyes Were Watching God",
    thirdAnswer: "Jonah's Gourd Vine",
    correct: 2,
}

arrayOfQuestions.push(firstQuestion);
arrayOfQuestions.push(secondQuestion);
arrayOfQuestions.push(thirdQuestion);
arrayOfQuestions.push(fourthQuestion);

function myQuestions(){
$("#question").html(arrayOfQuestions[index].question);
$("#first-answer").html(arrayOfQuestions[index].firstAnswer);
$("#second-answer").html(arrayOfQuestions[index].secondAnswer);
$("#third-answer").html(arrayOfQuestions[index].thirdAnswer);
}

myQuestions();

//on timer
// incr loss
// incr index , test for end of game 

$("#first-answer").on('click', function(){
    //console.log('That is your guess');
    if(arrayOfQuestions[index].correct == 1){
        console.log('good');
    } else{
        console.log('bad');
    }
    //index increment
    index++;
if(index == endOfGame){
    index = 0;
}
    

    myQuestions();

    
    // if the index == end_of_game then call end function
    // else call function that displays Q and answer
    //$("#first-answer").html(firstAnswers[index]);
});

$('#second-answer').on('click', function(){
    //console.log('That is your second guess');
    if(arrayOfQuestions[index].correct == 2){
        console.log('good');
    } else{
        console.log('bad');
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
        console.log('good');
    } else{
        console.log('bad');
    }
    index++;
    if(index == endOfGame){
        index = 0;
    }
    myQuestions();
    
});


    //console.log(secondQuestion.question2);
    //console.log(secondQuestion.firstFalseAnswer);


    //console.log(thirdQuestion.question3);
    //console.log(thirdQuestion.secondFalseAnswer);

//console.log(fourthQuestion.question4);
//console.log(fourthQuestion.answer);
//console.log(fourthQuestion.firstFalseAnswer);
//console.log(fourthQuestion.secondFalseAnswer);


});