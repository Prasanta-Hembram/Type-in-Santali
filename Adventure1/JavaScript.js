// declare variables
var story = document.getElementById("story");
var siteFooter = document.getElementById("siteFooter");
var question = document.getElementById("question");
var answer = document.getElementById("answer");
var yourAnswer = document.getElementById("yourAnswer");
var submit = document.getElementById("submit");

// todo: make an empty array called answers 
var answers = [];


submit.addEventListener("click",getAnswer)

askQuestion (0);


/* askQuestion() asks a question, based on the number passed to it */
function askQuestion(questionNumber) {
answer.style.display = "block";
answers.length = questionNumber;
switch (questionNumber) {
case 0:
question.innerHTML = "ᱪᱮᱫ ᱟᱢ ᱮᱱᱮᱡ ᱞᱟᱹᱜᱤᱫ ᱥᱚᱡᱽ ᱜᱮᱭᱟᱢ?";
break;
case 1:
question.innerHTML = "ᱢᱟᱨᱥ ᱨᱮ ᱛᱟᱦᱮᱸᱱᱟᱢ ᱥᱮ ᱚᱲᱟᱜ ᱨᱮ ᱛᱟᱦᱮᱸᱱᱟᱢ?";
break;
case 2:
question.innerHTML = "ᱪᱟᱠᱟᱜᱟᱢ ᱥᱮ ᱚᱲᱟᱜ ᱨᱮ ᱛᱟᱦᱮᱸᱱᱟᱢ?";
break;
case 3:
question.innerHTML = "ᱵᱤᱝ ᱧᱟᱢ ᱠᱮᱫᱮᱭᱟᱢ?";
break;
default:
break;
}
}

/* getAnswer() gets the answer from the text field and pushes it into the answers array, then calls the continueStory function*/
function getAnswer() {
cleanInput = yourAnswer.value.toUpperCase();
answers.push(cleanInput);
yourAnswer.value="";
continueStory(answers.length - 1);
}

/* continueStory() displays part of the story or an error based on the value of an item in the answers array */
function continueStory(answerNumber) {

switch (answerNumber) {
case 0:
if (answers[0]==="ᱦᱚᱭ"){
story.innerHTML = document.getElementById("answer01").innerHTML;
askQuestion(1);
} else if (answers [0]==="ᱵᱟᱝ") {
story.innerHTML = document.getElementById("answer02").innerHTML;
askQuestion(0);
} else {
story.innerHTML = document.getElementById("err0").innerHTML;
askQuestion(0);
}
break;
case 1:
if (answers[1]==="ᱢᱟᱨᱥ ᱛᱮ ᱪᱟᱞᱟᱜ ᱢᱮ"){
story.innerHTML = document.getElementById("answer11").innerHTML;
askQuestion(2);
} else if (answers [1]==="ᱚᱲᱟᱜ ᱨᱮ ᱛᱟᱦᱮᱸᱱ ᱢᱮ"){
story.innerHTML = document.getElementById("answer12").innerHTML;
theEnd();
} else {
story.innerHTML = document.getElementById("err1").innerHTML;
askQuestion(1);
}
break;
case 2:
if(answers[2]==="ᱪᱟᱞᱟᱜ ᱢᱮ"){
story.innerHTML = document.getElementById("answer21").innerHTML;
askQuestion(3);
} else if (answers [2]==="ᱚᱲᱟᱜ ᱛᱮ ᱪᱟᱞᱟᱜ ᱢᱮ") {
story.innerHTML = document.getElementById("answer22").innerHTML;
theEnd();
} else {
story.innerHTML = document.getElementById("err2").innerHTML;
askQuestion(2);
}
break;
case 3:
if(answers[3]==="ᱜᱚᱡᱽ ᱮᱢ"){
story.innerHTML = document.getElementById("answer44").innerHTML;
theEnd();
} else if (answers [3]==="ᱟᱲᱟᱜᱽᱮᱢ") {
story.innerHTML = document.getElementById("answer45").innerHTML;
theEnd();
} else {
story.innerHTML = document.getElementById("err3").innerHTML;
askQuestion(3);
}
break;
default:
story.innerHTML = "ᱠᱟᱹᱦᱱᱤ ᱪᱟᱵᱟ ᱮᱱᱟ!";
break;
}
}



/* theEnd() ends the story and hides the input field */
function theEnd() {
story.innerHTML +="<p>The End.</p>";
question.innerHTML="";
anser.style.display ="none";
}