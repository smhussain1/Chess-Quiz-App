// defining functions:

function counter() {
    // acts as a counter of questions asked.  Will become the denominator in the Users score.
};

function score() {
    // will compute the users current score
};

// Functions in order of Business process:

function startApp () {
    // will register button hit by user and start the application with Question 1.
};

function correct () {
    // will compare the users answer to the correct answer and determine if right or wrong.
};

function response() {
    // will throw a response to the user based on whether he/she gets the answer right or wrong.
    // will display score from function score
    // will promt the user to go to the next question, or exit application

};

function nextQuestion () {
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

            <button id="start">Start!</button>
   `
};

function finalScore () {
    // will display the final score of the user and thank him/her for playing.  
    // Offer to hit buttons to re-play or close application.
};

function replay () {
    // will register the replay button hit by user and re-start quiz from beginning.
};

function closeApp () {
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