$(document).ready(function(){
    //start button that when clicked will display the first question
    //$(".start-game").on('click', function());

//Timer

//Variables
var win = 0;
var loss = 0;
var unanswered = 0;
var userGuess;

//Questions
var firstQuestion = {
    question1: "Who wrote Pride and Prejudice?",
    firstFalseAnswer: "J.K. Rowling",
    answer: "Jane Austen",
    secondFalseAnswer: "Charlote Bronte",

    firstPossibility: function(){
        if (userGuess == answer) {
            console.log("Correct!");
        } else if(userGuess == firstFalseAnswer || secondFalseAnswer){
            console.log("Wrong!");
        } else {
            //timer gets to 0, goes to answer page automatically
            console.log("sorry, time's up");
        }
    }
};
$("#first-answer").html(firstQuestion.firstFalseAnswer);
$("#second-answer").html(firstQuestion.answer);
$("#third-answer").html(firstQuestion.secondFalseAnswer);
    //console.log(firstQuestion.question1);
    //console.log(firstQuestion.answer);

var secondQuestion = {
    question2: "Which Charles Dickens work has over 100 movie adaptations?",
    secondFalseAnswer: "Great Expectations",
    firstFalseAnswer: "Oliver Twist",
    answer: "A Christmas Carol",

    //function
        //if (userGuess == answer) {
            //console.log("Correct!");
        //} else if(user guess == firstFalseAnswer || secondFalseAnswer){
            //console.log("Wrong!");
        //} else {
            //timer gets to 0, goes to answer page automatically
            //console.log("sorry, time's up");
        //}
};
    //console.log(secondQuestion.question2);
    //console.log(secondQuestion.firstFalseAnswer);

var thirdQuestion = {
    question3: "When was the first Harry Potter book published?",
    answer: "1997",
    secondFalseAnswer: "2010",
    firstFalseAnswer: "2001",
    //function
        //if (userGuess == answer) {
            //console.log("Correct!");
        //} else if(user guess == firstFalseAnswer || secondFalseAnswer){
            //console.log("Wrong!");
        //} else {
            //timer gets to 0, goes to answer page automatically
            //console.log("sorry, time's up");
        //}
};
    //console.log(thirdQuestion.question3);
    //console.log(thirdQuestion.secondFalseAnswer);
var fourthQuestion = {
    question4: "What is Florida author Zora Neale Hurston\s most famous work?",
    secondFalseAnswer: "Mules and Men",
    answer: "Their Eyes Were Watching God",
    firstFalseAnswer: "Jonah's Gourd Vine",

    //function
        //if (userGuess == answer) {
            //console.log("Correct!");
        //} else if(user guess == firstFalseAnswer || secondFalseAnswer){
            //console.log("Wrong!");
        //} else {
            //timer gets to 0, goes to answer page automatically
            //console.log("sorry, time's up");
        //}
}
//console.log(fourthQuestion.question4);
//console.log(fourthQuestion.answer);
//console.log(fourthQuestion.firstFalseAnswer);
//console.log(fourthQuestion.secondFalseAnswer);

$("#first-answer").on('click', function(){
    console.log('That is your guess');
});

$('#second-answer').on('click', function(){
    console.log('That is your second guess');

});

$('#third-answer').on('click', function(){
    console.log('That is your third guess');

});

});