const quizForm = document.querySelector('#quiz-form');
const restartBtn = document.querySelector('#restart');
const q1 = document.querySelector('#q1');
const q1a = document.querySelector('#q1a-text');
const q1b = document.querySelector('#q1b-text');
const q1c = document.querySelector('#q1c-text');
const q1d = document.querySelector('#q1d-text');
const q2 = document.querySelector('#q2');
const q2a = document.querySelector('#q2a-text');
const q2b = document.querySelector('#q2b-text');
const q2c = document.querySelector('#q2c-text');
const q2d = document.querySelector('#q2d-text');
const q3 = document.querySelector('#q3'); 
const q3a = document.querySelector('#q3a-text');
const q3b = document.querySelector('#q3b-text'); 
const q3c = document.querySelector('#q3c-text');
const q3d = document.querySelector('#q3d-text');
const q4a = document.querySelector('#q4a-text');
const q4b = document.querySelector('#q4b-text');
const q4 = document.querySelector('#q4');
const q4c = document.querySelector('#q4c-text');
const q4d = document.querySelector('#q4d-text');
const q5 = document.querySelector('#q5');
const q5a = document.querySelector('#q5a-text');
const q5b = document.querySelector('#q5b-text');
const q5c = document.querySelector('#q5c-text');
const q5d = document.querySelector('#q5d-text');
const results = document.querySelector('#results');

const questions = [
    {
      question: "How do elephants communicate with each other?",
      choices: {
        a: "Using hand signals",
        b: "By making loud noises",
        c: "Through infrasonic sounds that are below the range of human hearing",
        d: "By releasing pheromones"
      },
      correctAnswer: "c"
    },
    {
      question: "What was the size of the world's largest snowflake on record?",
      choices: {
        a: "5 inches wide and 3 inches thick",
        b: "10 inches wide and 6 inches thick",
        c: "15 inches wide and 8 inches thick",
        d: "20 inches wide and 12 inches thick"
      },
      correctAnswer: "c"
    },
    {
      question: "What is a group of flamingos called?",
      choices: {
        a: "A flock",
        b: "A herd",
        c: "A flamboyance",
        d: "A colony"
      },
      correctAnswer: "c"
    },
    {
      question: "How fast does a sneeze travel out of your mouth?",
      choices: {
        a: "50 miles per hour",
        b: "75 miles per hour",
        c: "100 miles per hour",
        d: "125 miles per hour"
      },
      correctAnswer: "c"
    },
    {
      question: "What is a unique ability of hummingbirds?",
      choices: {
        a: "They can fly at high altitudes",
        b: "They can fly backwards",
        c: "They can swim underwater",
        d: "They can camouflage themselves"
      },
      correctAnswer: "b"
    },
    {
      question: "How many muscles does a caterpillar have?",
      choices: {
        a: "100",
        b: "250",
        c: "500",
        d: "1000"
      },
      correctAnswer: "d"
    },
    {
      question: "What was the height of the largest recorded snowman?",
      choices: {
        a: "50 feet",
        b: "75 feet",
        c: "100 feet",
        d: "113 feet"
      },
      correctAnswer: "d"
    },
    {
      question: "What is a unique ability of kangaroos?",
      choices: {
        a: "They can walk on water",
        b: "They can fly short distances",
        c: "They cannot walk backwards",
        d: "They can change color to blend in with their surroundings"
      },
      correctAnswer: "c"
    },
    {
      question: "How long is a giraffe's tongue?",
      choices: {
        a: "6 inches",
        b: "12 inches",
        c: "18 inches",
        d: "24 inches"
      },
      correctAnswer: "c"
    },
    {
      question: "How many scents can the human nose detect?",
      choices: {
        a: "100 million",
        b: "500 million",
        c: "1 billion",
        d: "Over 1 trillion"
      },
      correctAnswer: "d"
    },
    {
      question: "What is a group of penguins in the water called?",
      choices: {
        a: "A flock",
        b: "A pod",
        c: "A herd",
        d: "A raft"
      },
      correctAnswer: "d"
    },
    {
        question: "What is the longest flight of chicken ever recorded?",
        choices: {
          a: "15 seconds",
          b: "7 seconds",
          c: "13 seconds",
          d: "2 seconds"
        },
        correctAnswer: "c"
      },
      {
        question: "What animal has no brain?",
        choices: {
          a: "A starfish",
          b: "A centipede",
          c: "A shrimp",
          d: "A slug"
        },
        correctAnswer: "a"
      },
      {
        question: "What is almost equal to the size of a blue whale's heart?",
        choices: {
          a: "A small car",
          b: "A truck",
          c: "A basketball",
          d: "A human"
        },
        correctAnswer: "a"
      },
      {
        question: "What is the worlds smallest mammal?",
        choices: {
          a: "A hummingbird",
          b: "A bumblebee bat",
          c: "A chipmunk",
          d: "A squirrel"
        },
        correctAnswer: "b"
      },
      {
        question: "What animal poops once a week?",
        choices: {
          a: "A Sloth",
          b: "A Koala",
          c: "An Anteater",
          d: "A Kangaroo"
        },
        correctAnswer: "a"
      },
      {
        question: "Owls can turn their neck upto what degrees?",
        choices: {
          a: "360 degrees",
          b: "90 degrees",
          c: "180 degress",
          d: "270 degrees"
        },
        correctAnswer: "d"
      },
      {
        question: "What is a group of rhinoceros called?",
        choices: {
          a: "A flock",
          b: "A pod",
          c: "A crash",
          d: "A raft"
        },
        correctAnswer: "d"
      },
      {
        question: "What is the lifespan of a housefly?",
        choices: {
          a: "7 days",
          b: "14 days",
          c: "23 days",
          d: "27 days"
        },
        correctAnswer: "b"
      },
      {
        question: "How much do ants sleep?",
        choices: {
          a: "Once a week",
          b: "Once a moth",
          c: "Thrice a week",
          d: "Never"
        },
        correctAnswer: "d"
      },]

let questionIndexes = [];
let currentQuestionIndex = 0;
let score = 0;

function getRandomQuestionIndexes() {
  while (questionIndexes.length < 5) {
    const index = Math.floor(Math.random() * questions.length);
    if (!questionIndexes.includes(index)) {
      questionIndexes.push(index);
    }
  }
}

function showCurrentQuestion() {
  const currentQuestion = questions[questionIndexes[currentQuestionIndex]];
  q1.textContent = currentQuestion.question;
  q1a.textContent = currentQuestion.choices.a;
  q1b.textContent = currentQuestion.choices.b;
  q1c.textContent = currentQuestion.choices.c;
  q1d.textContent = currentQuestion.choices.d;

  q2.textContent = questions[questionIndexes[currentQuestionIndex + 1]].question;
  q2a.textContent = questions[questionIndexes[currentQuestionIndex + 1]].choices.a;
  q2b.textContent = questions[questionIndexes[currentQuestionIndex + 1]].choices.b;
  q2c.textContent = questions[questionIndexes[currentQuestionIndex + 1]].choices.c;
  q2d.textContent = questions[questionIndexes[currentQuestionIndex + 1]].choices.d;
  
  q3.textContent = questions[questionIndexes[currentQuestionIndex + 2]].question;
  q3a.textContent = questions[questionIndexes[currentQuestionIndex + 2]].choices.a;
  q3b.textContent = questions[questionIndexes[currentQuestionIndex + 2]].choices.b;
  q3c.textContent = questions[questionIndexes[currentQuestionIndex + 2]].choices.c;
  q3d.textContent = questions[questionIndexes[currentQuestionIndex + 2]].choices.d;

  q4.textContent = questions[questionIndexes[currentQuestionIndex + 3]].question;
  q4a.textContent = questions[questionIndexes[currentQuestionIndex + 3]].choices.a;
  q4b.textContent = questions[questionIndexes[currentQuestionIndex + 3]].choices.b;
  q4c.textContent = questions[questionIndexes[currentQuestionIndex + 3]].choices.c;
  q4d.textContent = questions[questionIndexes[currentQuestionIndex + 3]].choices.d;

  q5.textContent = questions[questionIndexes[currentQuestionIndex + 4]].question;
  q5a.textContent = questions[questionIndexes[currentQuestionIndex + 4]].choices.a;
  q5b.textContent = questions[questionIndexes[currentQuestionIndex + 4]].choices.b;
  q5c.textContent = questions[questionIndexes[currentQuestionIndex + 4]].choices.c;
  q5d.textContent = questions[questionIndexes[currentQuestionIndex + 4]].choices.d;
}

function checkAnswers() {
  const selectedAnswers = document.querySelectorAll('input[name="q1"]:checked, input[name="q2"]:checked,input[name="q3"]:checked,input[name="q4"]:checked,input[name="q5"]:checked');
  selectedAnswers.forEach(answer => {
    if (answer.value === questions[questionIndexes[currentQuestionIndex]].correctAnswer  || answer.value === questions[questionIndexes[currentQuestionIndex + 1]].correctAnswer || answer.value === questions[questionIndexes[currentQuestionIndex + 2]].correctAnswer || answer.value === questions[questionIndexes[currentQuestionIndex + 3]].correctAnswer || answer.value === questions[questionIndexes[currentQuestionIndex + 4]].correctAnswer) {
      score++;
    }
  });
}

function showResults() {
  quizForm.style.display = 'none';
  results.textContent = `You scored ${score} out of 5.`;
  restartBtn.style.display = 'block';
}

function restartQuiz() {
  quizForm.style.display = 'block';
  results.textContent = '';
  restartBtn.style.display = 'none';
  questionIndexes = [];
  currentQuestionIndex = 0;
  score = 0;
  const inputs = document.querySelectorAll('input[type="radio"]');
  inputs.forEach(input => {
    input.checked = false;
  });
  getRandomQuestionIndexes();
  showCurrentQuestion();
}
quizForm.addEventListener('submit', function(event) {
    event.preventDefault();
    checkAnswers();
    currentQuestionIndex += 5;
    if (currentQuestionIndex < questionIndexes.length) {
    showCurrentQuestion();
    } else {
    showResults();
    }
    });
    
    restartBtn.addEventListener('click', function() {
    restartQuiz();
    });
    
    getRandomQuestionIndexes();
    showCurrentQuestion();
