// defining functions:

function counter() {
    // acts as a counter of questions asked.  Will become the denominator in the Users score.  Will also 
    // be used as the numerator for the display value of Question#.
};

function score() {
    // will compute the users current score
    // psuedocode:  Let count = 0, if function correct === True, count +=1;
    // return count
};

// Functions in order of Business process:

function startApp () {
    // will register button hit by user and start the application with Question 1.
    // psuedocode:  When user clicks on start, the header will display the first question and the 4 
    // possible answers as well as the question number and score total
};

function correct () {
    // will compare the users answer to the correct answer and determine if right or wrong.
    // psuedocode:  When the user clicks on SUbmit button, it wil compare the rario button checked
    // to the answer.  This compare will return a True or False boolean value.  Will then execute function counter, 
    // generating the new values to update the Score function and display the Question number.  Will execute 
    // Score function.
};

function response() {
    // will throw a response to the user based on whether he/she gets the answer right or wrong.
    // will display score from function score
    // will promt the user to go to the next question, or exit application
    // psuedocode: If function correct boolean value === True ${header}.html("Correct etc"), else 
    // ${header}.html{"Sorry - Incorrect etc"}.  Display Question Number and Score function.
    // Will display Next and Exit buttons.  

};

function nextQuestion () { // when user clicks "next" button next page is loaded: ${button.next}on("click").html
   return `
   <form>
                <fieldset>
                    <legend>Select the Right Answer</legend>
                        <label>
                        <input type="radio" class="answer1" name="option"></input>
                        <span class="answers">${question.ans1}</span>
                        </label> 
                    
                        <label>
                        <input type="radio" class="answer1" name="option"></input>
                        <span class="answers">${question.ans2}</span>
                        </label> 
                    
                        <label>
                        <input type="radio" class="answer1" name="option"></input>
                        <span class="answers">${question.ans3}</span>
                        </label> 
                        
                        <label>
                        <input type="radio" class="answer1" name="option"></input>
                        <span class="answers">${question.ans4}</span>
                        </label> 
                </fieldset>
            </form>

            <button id="next">Next!</button>
   `
};

function finalScore () {
    // will display the final score of the user and thank him/her for playing.  
    // Offer to hit buttons to re-play or close application.
    // psuedocode:  ${header}.html("Congratulations your Final Score is ${functionScore})
    // "Please play again or Exit!"
    // Display Play Again button and Exit button
};

function replay () {
    // will register the replay button hit by user and re-start quiz from beginning.
};

function exit () {
    // will register button hit by user and display current score then close application as requested.
};

const questions = { // the Object that contains the Questions to the User in the Quiz
    question1: "string",
    question2: "string",
    question3: "string",
    question4: "string",
    question5: "string",
    question6: "string",
    question7: "string",
};

const correctAnswers = {
    answer1: "string",
    answer2: "string",
    answer3: "string",
    answer4: "string",
    answer5: "string",
    answer6: "string",
    answer7: "string"
};