// count and tracking functions:
// should these be global variables?

let score = 0;
let questionNum = 1;
let questionsAnswered = 0;

// 


function answerCheck(userAnswer, data) {
    let x = (questionNum -1);
    if (userAnswer === data[x].correctAns) {
        return true;
    }
    else {return false;
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



    function questionForm(questionNum, data, score) {
        let z=(questionNum-1);
    return `  
    <main> <!-- semantics role to be added -->
        <div class="mainmessage">
            <header>${data[z].question}</header>
        </div>
       
            <form>
            <fieldset>
                    <legend>Select the Right Answer</legend>
                        <label>
                        <input type="radio" class="answer1" name="option"></input>
                        <span class="answers">${data[z].answers[0]}</span>
                        </label> 
                    
                        <label>
                        <input type="radio" class="answer1" name="option"></input>
                        <span class="answers">${data[z].answers[1]}</span>
                        </label> 
                    
                        <label>
                        <input type="radio" class="answer1" name="option"></input>
                        <span class="answers">${data[z].answers[2]}</span>
                        </label> 
                        
                        <label>
                        <input type="radio" class="answer1" name="option"></input>
                        <span class="answers">${data[z].answers[3]}</span>
                        </label> 
                </fieldset>
                </form>

                <button id="next">Next!</button>
    </main>           
            
           
            <section id="status-bar">
                <span id="question-count">Question: ${questionNum}/10</span>
                <span id="score-count">Score: ${score}/${questionsAnswered}</span>
            </section>
   `
};

function finalScore() {
    // will display the final score of the user and thank him/her for playing.  
    // Offer to hit buttons to re-play or close application.
    // psuedocode:  ${header}.html("Congratulations your Final Score is ${functionScore})
    // "Please play again or Exit!"
    // Display Play Again button and Exit button


};

function replayButton() {
    // will register the replay button hit by user and re-start quiz from beginning.
};

function startButton() {
    // will register button hit by user and start the application with Question 1.
    // psuedocode:  When user clicks on start, the function nextQuestion will be called, taking the User to its screen.
    $('#start').on('click', function () {
        return nextQuestion;
    });
};

function submitButton() {
    // will compare the users answer to the correct answer and determine if right or wrong.

    // psuedocode:  When the user clicks on SUbmit button, it wil compare the rario button checked
    // to the answer.  This compare will return a True or False boolean value.  Will then execute function counter, 
    // generating the new values to update the Score function and display the Question number.  Will execute 
    // Score function.
    $('main').on('click', '#js-submit-button', function (event) {
        event.preventDefault()
        const userAnswer = $('input:checked').siblings('span');
        const userCorrect = answerCheck(userAnswer, data);
        if (userCorrect) {
            correctFrom();
        } else {incorrectForm();
        }
    });
};

/* from other project----->
function handleSubmitButton() {
    $('#container').on('click', '#js-submit-button', function(event) {
      event.preventDefault()
  
      const userAnswer = $('input:checked').siblings('span');
      
      const userIsCorrect = checkUserAnswer(answer);
      if(userIsCorrect) { // this means if userIsCorrect == true?
        generateCorrectFeedback();
      } else {
        generateIncorrectFeedback();
      }
    });
  }  */

  function correctForm() { // needs to write new HTML and update score and questionNum

  };

  function incorrectForm() {

  };