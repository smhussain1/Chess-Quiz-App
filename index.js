// count and tracking functions:

function counter() {
    // acts as a counter of questions asked.  Will become the denominator in the Users score.  Will also 
    // be used as the numerator for the display value of Question#.
    let questionNumber = 0;
    questionNumber += 1;
    return questionNumber;
};

function score(correctBoolean) {
    // will compute the users current score
    // psuedocode:  Let count = 0, if function correct === True, count +=1;
    // return count
    let count = 0;
    if (correctBoolean === true) {
        count+=1;}
    else count = count;
    return count;
};

// Functions in order of Business process:

function startApp () {
    // will register button hit by user and start the application with Question 1.
    // psuedocode:  When user clicks on start, the function nextQuestion will be called, taking the User to its screen.
    $('#start').on('click', function() {
        return nextQuestion;
    });
};

function correct () {
    // will compare the users answer to the correct answer and determine if right or wrong.

    // psuedocode:  When the user clicks on SUbmit button, it wil compare the rario button checked
    // to the answer.  This compare will return a True or False boolean value.  Will then execute function counter, 
    // generating the new values to update the Score function and display the Question number.  Will execute 
    // Score function.
    $('#js-submit-button').on('click', function() {
        if (//how do I ID the checked element in the form by the user) {};
    });
};

function response() {
    // will issue a response to the user based on whether he/she gets the answer right or wrong.
    // will display score from function score
    // will promt the user to go to the next question, or exit application

    // psuedocode: If function correct boolean value === True ${header}.html("Correct etc"), else 
    // ${header}.html{"Sorry - Incorrect etc"}.  Display Question Number and Score function.
    // Will display Next button.  Display Correct Answer: If answers[answerx].array.object[key] === true, 
    // then highlight this label and dim the others.
};



// how do I pull count from function score and questionNumber from function Counter into this?
function nextQuestion (questions) { // when user clicks "next" button next page is loaded: ${button.next}on("click").html
    for (let[key,value] in Object.entries(questions) {
        if (key === questionNumber) {
            let currentQuestion = value;
                };
            }
            );   //how do I return currentValue without using return and stopping the program?   

return `  
   <form>
            <div class="mainmessage">
            <header>${currentQuestion}</header>
            </div>
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
            
            // display qestion number / total questions and score / question number
            <section id="status-bar">
                <span id="question-count">Question: ${question.number}/10</span>
                <span id="score-count">Score: ${correctAnswers}/${questionsAnswered}</span>
            </section>
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
    1: "Who is the highest scoring Chess Champion in History?",
    2: "What is the highest title a competitive Chess Player can attain?",
    3: "Who did Bobby Fischer play against in Reykevik in one of the most watched chess battles in the history of the game?",
    4: "José Raúl Capablanca is best known for what style of chess, in which he has been described as the ‘absolute master’ of?",
    5: "Magnus Carlsen was how old when he won the title of Grandmaster?",
    6: "The sequence of moves which plays out as follows:  1.d4 e6 2.e4 d5 is called…..:",
    7: "Who is considered to be “the Father of Chess”?",
};

const answers = { 
    1: [
        "Mikhail Tal",
        "Bobby Fischer",
        "Wilhelm Steinitz",
        "Mikhail Botvinnik"
    ],
    2: "array",
    3: "array",
    4: "array",
    5: "array",
    6: "array",
    7: "array"
};

const correctAnswers = { 
    1: "Wilhelm Steinitz",
    2: "array",
    3: "array",
    4: "array",
    5: "array",
    6: "array",
    7: "array"
};

// to generate the answers to present on each question page....:
 function pageAnswers(questionNumber) {
    for(let [key, value] in Object.entries(answers) {
        if (key === questionNumber) {
            return value; // need to format the items in value properly
            }
         } 
        );
    };
    
function checkAnswers(questions, correctAnswers) {
    for (key in questions) {
        let checkKey = key;
        for (key in correctAnswers) {
            if (checkKey === key) {
                let correctAnswer = correctAnswers[key];
                return correctAnswer; // is this return placement correct?
            }
        }   

    }
};
    
