//THE STORE ARRAY FILLED WITH QUESTIONS AND ANSWERS
const STORE = {

  questions: [
    {
      question: 'Which instrument can have 4-6 strings?',
      answers: [
        'Ukulele',
        'Bass',
        'Banjo',
        'Violin'
      ],
      correctAnswer: 'Bass',
      right: [
        'If you guessed the Bass, you are correct!!'
      ],
    },
    {
      question: 'What instrument did Jimi Hendrix play?',
      answers: [
        'Guitar',
        'Saxophone',
        'Piano',
        'Trumpet'
      ],
      correctAnswer: 'Guitar',
      right: [
        'If your answer was Guitar, you are correct!!'
      ],
    },
    {
      question: 'Finish this lyric, "Its beginning to look a lot like..."',
      answers: [
        'Fall',
        'Snow',
        'Christmas',
        'Rain'
      ],
      correctAnswer: 'Christmas',
      right: [
        'If you sang Christmas, you are correct!!'
      ],
    },
    {
      question: 'Which artist changed their name multiple times?',
      answers: [
        'Michael Jackson',
        'Sean Combs',
        'Beyonce',
        'Smokey Robinson'
      ],
      correctAnswer: 'Sean Combs',
      right: [
        'If you answered Sean Combs, you really know your stuff!!'
      ],
    },
    {
      question: 'What is the first instrument ever invented?',
      answers: [
        'Horn',
        'Harp',
        'Drum',
        'Flute'
      ],
      correctAnswer: 'Flute',
      right: [
        'If you picked Flute, you are wise beyond your years!'
      ],
    },
    {
      question: 'What is the most recent instrument invented?',
      answers: [
        'Kazoo',
        'Tuba',
        'Harpejji',
        'Trombone'
      ],
      correctAnswer: 'Harpejji',
      right: [
        'If you picked Harpejji, you really know your stuff!!'
      ],
    },
  ],

//IF THE ANSWER IS RIGHT
  goodResponse: [
    'You definitely breathe, eat & sleep music!'
  ],

  //IF THE ANSWER IS WRONG
  badResponse: [
    "Uhh, are you sure you're playing the right game?"
  ],

  //ABLE TO ANSWER THE QUESTIONS IN THE FUNCTION
  quizStart: false,
  //KEEPS TRACK OF THE CURRENT QUESTION THE PERSON IS ON
  questionNumber: 0,
  //FEEDBACK FROM THE ANSWER SUBMITTED
  submittingAnswer: false,
  //KEEPS TRACK OF THE PERSONS SCORE
  score: 0,
  //PROCESS THE ANSWERS IN A BLANK ARRAY
  answerSubmitted: {
    submittedAnswer: []
  }
};

/**
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the STORE is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 */

// THE STARTUP PAGE BEFORE THE QUIZ
function startUpPage() {
  return `
  <div class="start">
    <form>
      <p>
        This quiz will test some of your knowledge in music.
      </p>
      <p>
       If you feel up to the task you can...
      </p>
    </form>
  </div>
  <button type="submit"id="begin" autofocus>BEGIN</button>
    `;
}

//DISPLAYING THE QUESTIONS, ANSWERS AND SCORE
function quizQuestions(questionClick) {
  return `
    <div class='quiz-questions'>
    <ul>
       <li>
       Question ${questionClick.index} out of ${STORE.questions.length}
       </li>
       <li>Score: ${STORE.score}</li>
       </ul>
    </div>
    <form class="answers">
      <ul>
       <li class="question">
       ${questionClick.question.question}
       </li>
       <li>
        ${theQuizAnswers(questionClick.question.answers)}
        </li>
      </ul>
    </form>
    <button type="submit" class="check-answer">Check Answer</button>
    `;
}

//GIVES THE RESULT OF THE ANSWER SUBMITTED
function resultsOfAnswer(){
  let submittedAnswer = STORE.answerSubmitted.submittedAnswer;

  const buttons = {
    next: ' <button type="submit" class="next" autofocus>NEXT &gt&gt</button>',
    results: '<button type="submit" class="results" autofocus>Check Answer</button>'
  };

  let correctResponse = `${submittedAnswer[1]}  is right!    ${(STORE.goodResponse)}`;
  let incorrectResponse = `${(STORE.badResponse) + " " + submittedAnswer[2]}?! <br><br>"${submittedAnswer[1]}" is the correct answer.`;

  let lastQuestion = (STORE.questionNumber + 1) === (STORE.questions.length);
  
  return `
    <div class="the-response">
    <form>
    <p>${submittedAnswer[0] === true ? correctResponse : incorrectResponse}</p>
    <p> Score: ${STORE.score}</p>
   ${lastQuestion ? buttons.results : buttons.next}
    </form>
    </div>
  `;
}

//RESPONSE TO WHEN THE ANSWERS ARE SUBMITTED
function theQuizAnswers(answers){
  let submittedAnswer = [];
  let submittedArray = [];
  answers.forEach(answer => {
    submittedAnswer.push(answer);
    submittedArray.push(answers.indexOf(answer));
  });
  console.log(submittedArray);
  return submittedAnswer.map(answer => submittedAnswers(answer)).join('');
}

//RESPONSE TO SUBMITTED QUESTIONS
function submittedAnswers(answer){
  let questionNumber = STORE.questionNumber;
  let name = STORE.questions[questionNumber].answers.indexOf(answer);
  console.log(name);
  return `
    <li>
      <div class="answer-boxes">
      <input type="radio" name="answer" id="answer-${name}" data-answer="${answer}" required>
      <label for="answer-${name}"> ${answer}</label>
      </div>
    </li>
  `;
}

//THE OVERALL SCORE THE PERSON GOT
function quizResult(){
  return `
    <div class='quiz-result'>
      <p>
       Thank you for playing.
      </p>
      <p>Your score is ${STORE.score} out of ${STORE.questions.length * 5}</p>            
        <button class="restart-quiz">Restart</button>      
    </div> 
 `;
}

//RENDERING THE QUIZ
function renderQuiz () {

  if(STORE.quizStart === false) {
    if(STORE.questionNumber === STORE.questions.length){
      const quizResults = quizResult();
      $('main').html(quizResults); 
    } else {
      const welcomePage = startUpPage();
      $('main').html(welcomePage);
    }
  } else if (STORE.quizStart === true) {
    if(STORE.submittingAnswer === false) {
      const quizQuestion = quizQuestions(currentQuestion());
      $('main').html(quizQuestion);
    } else if (STORE.submittingAnswer === true) {
      const quizResponse = resultsOfAnswer();
      $('main').html(quizResponse);
    }
  } 
}


//ENSURES THE QUIZ WILL RESTART
function startQuiz() {
  STORE.quizStart = true;
}

//THE PRESENT QUESTION THE PERSON IS ON
function currentQuestion(){
  let quizIndex = STORE.questionNumber;
  let questionClick = STORE.questions[quizIndex];
  return {
    index: quizIndex +1,
    question: questionClick
  };
}

//AUTOMATICALLY GOING TO THE NEXT QUESTION AFTER HITTING NEXT
function nextQuestion(){
  if (STORE.questionNumber < STORE.questions.length){
    STORE.questionNumber++;
    STORE.submittingAnswer = false;
    console.log(STORE.questionNumber);
  } else if(STORE.questionNumber === STORE.questions.length) {
    STORE.quizStart = false;
  }
}


//MAKING SURE THE QUESTION IS ANSWERED BEFORE GOING TO THE NEXT QUESTION
function alertMessage() {
  let radios = $('input:radio[name=answer]');
  let selectedAnswer = $('input[name="answer"]:checked').data('answer');
  let questionNumber = STORE.questionNumber;
  let correctAnswer = STORE.questions[questionNumber].correctAnswer;

  if (radios.filter(':checked').length === 0) {
    alert('Please pick a answer.');
    return;
  } else {
    STORE.submittingAnswer = true;
    if(selectedAnswer === correctAnswer){
      STORE.score += 5;
      STORE.answerSubmitted.submittedAnswer = [true, correctAnswer, selectedAnswer];
    } else {
      STORE.answerSubmitted.submittedAnswer = [false, correctAnswer, selectedAnswer];
    }
  }
}

//CHECKING THE RESULTS AT THE END OF QUIZ
function seeResults() {
  STORE.quizStart = false;
  STORE.questionNumber ++;
}

//RESETTING EVERYTHING WHEN THE QUIZ RESTARTS
function restartQuiz() {
  STORE.quizStart = false;
  STORE.questionNumber = 0;
  STORE.submittingAnswer = false;
  STORE.answerSubmitted.submittedAnswer = [];
  STORE.score = 0;
}

//THE HANDLER FUNCTIONS
function beginSubmission(){
  $('main').on('click', '#begin', (event) =>{
    event.preventDefault();
    startQuiz();
    renderQuiz();
  });
}

//THE ALERT MESSAGE BEFORE SUBMITTING THE ANSWER
function submittingTheAnswer() {
  $('main').on('click' , '.check-answer', (event)=>{
    event.preventDefault();
    console.log('submitting answer');
    alertMessage();
    renderQuiz();
  });
}

//THE NEXT QUESTION FUNCTION
function nextQuestions(){
  $('main').on('click', '.next', (event) => {
    event.preventDefault();
    nextQuestion();
    renderQuiz();
  });
}

//SEEING THE RESULTS OF QUIZ
function seeTheResults(){
  $('main').on('click', '.results', (event) => {
    event.preventDefault();
    seeResults();
    renderQuiz();
  });
}

//RESTARTING THE QUIZ
function restartTheQuiz(){
  $('main').on('click', '.restart-quiz', (event) => {
    event.preventDefault();
    restartQuiz();
    renderQuiz();
  });
}


//THIS MAKES SURE THAT THE PAGE IS LOADED AFTER EVERYTHING ELSE IS
function loadQuiz (){
  renderQuiz();
  beginSubmission();
  submittingTheAnswer();
  nextQuestions();
  restartTheQuiz();
  seeTheResults();
}

$(loadQuiz);