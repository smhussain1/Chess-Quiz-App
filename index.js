

// initializing count and tracking functions......:

let score = 0;
let questionNum = 1;
let questionsAnswered = 0;

// question and score iterators......:

function iterateQuestion() { //do we need to pass in the variable as an argument?
    questionNum++;
  }
  
function iterateScore() {
    score++;
  }

function iterateQuestionsAnswered() {
    questionsAnswered++;
}


  //----- user interation function below.....:

function answerCheck(userAnswer, data) {
    let x = (questionNum -1);
    iterateQuestion();
    iterateQuestionsAnswered(); 
     if (userAnswer === data[x].correctAns) {
        iterateScore();    
        return true;
    }else{
        return false;
    };
}

// alternate code...:
// return (userAnswer === data[x].correctAns)
//if(){
//}else{
//}


   
//----------------------- form functions below.......:

function questionForm(questionNum, data, score, questionsAnswered) {
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
   `;
}


  function correctForm(questionNum, data) { // needs to write new HTML and update score and questionNum
    let z=(questionNum-1) // need to make sure this figure is current when function runs
   return `
   <main> 
   <div class="mainmessage">
   <header>Great Job - You got it Right!</header>
   </div>
          <!-- semantics role to be added -->
       <form>
                <fieldset>
                       <legend>Correct Answer</legend>
                           <label>
                           <input type="radio" class="answer1" name="option"></input>
                           <span class="answers">${data[z].correctAns}</span>
                           </label> 
                       
                </fieldset>
               </form>
   
               <button id="next">Next</button>
   </main>            
   `;
  }

  function incorrectForm(questionNum, data) { // needs to write new HTML and update score and questionNum
    let z=(questionNum-1) // need to make sure this figure is current when function runs
   return `
   <main> 
   <div class="mainmessage">
   <header>Sorry....</header>
   </div>
          <!-- semantics role to be added -->
       <form>
                <fieldset>
                       <legend>Correct Answer</legend>
                           <label>
                           <input type="radio" class="answer1" name="option"></input>
                           <span class="answers">${data[z].correctAns}</span>
                           </label> 
                       
                </fieldset>
               </form>
   
               <button id="js-submit-button">Submit</button>
   </main>            
   `;
  }
  
function finalScore() {
    // will display the final score of the user and thank him/her for playing.  
    // Offer to hit buttons to re-play
    // psuedocode:  ${header}.html("Congratulations your Final Score is ${functionScore})
    // "Please play again or Exit!"
    // Display Play Again button and Exit button


}


  //---------------------------------------- buttons below--------------
function replayButton() {
    // will register the replay button hit by user and re-start quiz from beginning.
}

function startButton() {
    // will register button hit by user and start the application with Question 1.
    // psuedocode:  When user clicks on start, the function questionForm() will be called, taking the User to its screen.
    $('#start').on('click', function() {
        questionForm(); 
    });
}

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
            correctForm();
        }else{
            incorrectForm();
        }
    });
} 

function handleButtons() {
    StartButton();
    SubmitButton();
    //handleNextButton();
    //handleRestartButton();
  }
  
handleButtons();


//--------------------------------------------buttons above-------------------


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