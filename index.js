

// initializing count and tracking functions......:

let score = 0;
let questionNum = 1;

// question and score iterators......:

function iterateQuestion() { //do we need to pass in the variable as an argument?
   if (questionNum <= data.length) {
    questionNum++; 
  }else{questionNum = questionNum}
}

function iterateScore() {
    score++;
  }

function answerCheck(userAnswer, data) {
    let x = (questionNum -1);
    if (userAnswer.text() === data[x].correctAns) {
        iterateScore();    
        return true;
    }else{
        return false;
    };
}

  //----- user interation function below.....:


// alternate code...:
// return (userAnswer === data[x].correctAns)
//if(){
//}else{
//}


   
//----------------------- form functions below.......:

function questionForm(questionNum, data, score) {
        let z=(questionNum-1);
    return `  
    <main role='main'> 
        <div class="mainmessage">
            <header>${data[z].question}</header>
        </div>
       
            <form>
            <fieldset>
                    <legend>Select the Right Answer</legend>
                        <label> 
                        <input type="radio" class="answer1" name="option" checked></input>
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

                <button id="js-submit-button">Submit!</button>
    </main>           
            
           
            <section id="status-bar">
                <span id="question-count">Question: ${questionNum}/7</span>
                <span id="score-count">Score: ${score}/${questionNum}</span>
            </section>
   `;
}


function correctForm(questionNum, data) { // needs to write new HTML and update score and questionNum
    let z=(questionNum-1); // need to make sure this figure is current when function runs
    iterateQuestion();
    return `
   <main role='main'> 
   <div class="mainmessage">
   <header>Great Job - You got it Right!</header>
   </div>
          <!-- semantics role to be added -->
        <form>
                <fieldset>
                       <legend>Correct Answer</legend>
                           <label>
                           <input type="radio" class="answer1" name="option" checked></input>
                           <span class="answers">${data[z].correctAns}</span>
                           </label> 
                       
                </fieldset>
        </form>
   
               <button id="next">Next</button>

            <section id="status-bar">
               <span id="question-count">Question: ${questionNum}/7</span>
               <span id="score-count">Score: ${score}/${questionNum}</span>
            </section>
   </main>            
   `;
  }

function lastCorrectForm(questionNum, data) { // needs to write new HTML and update score and questionNum
    let z=(questionNum-1); // need to make sure this figure is current when function runs
    iterateQuestion();
    return `
   <main role='main'> 
   <div class="mainmessage">
   <header>Great Job - You got it Right!</header>
   </div>
          <!-- semantics role to be added -->
        <form>
                <fieldset>
                       <legend>Correct Answer</legend>
                           <label>
                           <input type="radio" class="answer1" name="option" checked></input>
                           <span class="answers">${data[z].correctAns}</span>
                           </label> 
                       
                </fieldset>
        </form>
   
               <button id="finish">Finish</button>

            <section id="status-bar">
               <span id="question-count">Question: ${questionNum}/7</span>
               <span id="score-count">Score: ${score}/${questionNum}</span>
            </section>
   </main>            
   `;
  }


function incorrectForm(questionNum, data) { // needs to write new HTML and update score and questionNum
    let z=(questionNum-1); // need to make sure this figure is current when function runs
    iterateQuestion();
    return `
    <main role='main'> 
    <div class="mainmessage">
    <header>Sorry, incorrect....</header>
    </div>
          <!-- semantics role to be added -->
        <form>
                <fieldset>
                       <legend>Correct Answer is... </legend>
                           <label>
                           <input type="radio" class="answer1" name="option" checked></input>
                           <span class="answers">${data[z].correctAns}</span>
                           </label> 
                       
                </fieldset>
        </form>
   
            <button id="next">Next</button>

            <section id="status-bar">
               <span id="question-count">Question: ${questionNum}/7</span>
               <span id="score-count">Score: ${score}/${questionNum}</span>
            </section>
    </main>            
   `;
  }
  
  function lastIncorrectForm(questionNum, data) { // needs to write new HTML and update score and questionNum
    let z=(questionNum-1); // need to make sure this figure is current when function runs
    iterateQuestion();
    return `
    <main role='main'> 
    <div class="mainmessage">
    <header>Sorry, incorrect....</header>
    </div>
          <!-- semantics role to be added -->
        <form>
                <fieldset>
                       <legend>Correct Answer is...</legend>
                           <label>
                           <input type="radio" class="answer1" name="option" checked></input>
                           <span class="answers">${data[z].correctAns}</span>
                           </label> 
                       
                </fieldset>
        </form>
   
            <button id="finish">Finish</button>

            <section id="status-bar">
               <span id="question-count">Question: ${questionNum}/7</span>
               <span id="score-count">Score: ${score}/${questionNum}</span>
            </section>
    </main>            
   `;
  }


function finalScoreForm(questionNum) {
    // will display the final score of the user and thank him/her for playing.  
    // Offer to hit buttons to re-play
    // psuedocode:  ${header}.html("Congratulations your Final Score is ${functionScore})
    // "Please play again or Exit!"
    // Display Play Again button and Exit button
    let z=(questionNum-1);
    return `
    <main role='main'> 
        <div class="mainmessage">
        <header>Awesome - Thanks for Playing!</header>
        </div>
               <form id="finalForm">
              
       </form>    
                    
              <button id="replay">Replay!</button>
                 
            <section id="status-bar">
                <span id="question-count">All Done!</span>
                <span id="score-count">Score: ${score}/${z}</span>
            </section>
    </main>
    `;
    }

function replayForm() {
    score = 0;
    questionNum = 1;
    return `
    <main role='main'>
    <div class="mainmessage">
    <header>Ready for the Chess Quiz?!</header>
    </div>
        
    <button id="start">Start!</button>

    </main>
    
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="index.js"></script>
    <script type="text/javascript" src="storeData.js"></script>
    `;
    }

  //---------------------------------------- buttons below--------------

function startButton() {
    // will register button hit by user and start the application with Question 1.
    // psuedocode:  When user clicks on start, the function questionForm() will be called, taking the User to its screen.
    $('#start').on('click', function() {
        $('main').html(questionForm(questionNum, data, score)); 
    });
}

function nextButton() {
    $('main').on('click', '#next', function() {
        $('main').html(questionForm(questionNum, data, score)); 
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
        const userAnswer = $('input:checked').siblings('.answers');
        const userCorrect = answerCheck(userAnswer, data); 
        if (userCorrect==true && questionNum===7) {
            $('main').html(lastCorrectForm(questionNum, data));
        }if(userCorrect==false && questionNum===7) {
            $('main').html(lastIncorrectForm(questionNum, data));
        }if(userCorrect) {
            $('main').html(correctForm(questionNum, data));
        }else{
            $('main').html(incorrectForm(questionNum, data));
            
        }
    });
} 

function finishButton() {
    $('main').on('click', '#finish', function() {
        $('main').html(finalScoreForm(questionNum, data, score)); 
    });
}

function replayButton() {
    $('main').on('click', '#replay', function() {
        $('main').html(replayForm(questionNum, data, score)); // how do you specify default?
    });
}

function handleButtons() {
    startButton();
    submitButton();
    replayButton();
    nextButton();
    finishButton();
  }
  
handleButtons();

