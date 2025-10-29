const questions = [
  {
    question: "🧄 What do vampires hate the most?",
    answers: ["Sunlight", "Garlic", "Holy Water", "Pumpkin Soup"],
    correct: 1,
  },
  {
    question: "🎃 Which vegetable is traditionally carved on Halloween?",
    answers: ["Carrot", "Potato", "Pumpkin", "Cabbage"],
    correct: 2,
  },
  {
    question: "👻 Who is Pooky?",
    answers: ["A ghost", "A cat", "Heitor's coding buddy", "All of the above"],
    correct: 3,
  },
  {
    question: "🧟 What brings a zombie back to life?",
    answers: ["Lightning", "Brain hunger", "Witch's curse", "TikTok dances"],
    correct: 2,
  },
  {
    question: "💀 What bone protects your brain?",
    answers: ["Femur", "Skull", "Rib", "Pelvis"],
    correct: 1,
  },
  {
    question: "🕸️ What creature spins webs?",
    answers: ["Snake", "Witch", "Spider", "Ghost"],
    correct: 2,
  },
  {
    question: "🌕 What happens on a full moon?",
    answers: ["Werewolves appear", "Ghosts party", "Nothing", "Candy melts"],
    correct: 0,
  },
  {
    question: "🧹 What is the traditional transportation of a witch?",
    answers: ["Broomstick", "Pumpkin cart", "Black cat", "Taxi"],
    correct: 0,
  },
  {
    question: "🍬 What do you say to get candy on Halloween?",
    answers: ["Trick or treat!", "Boo!", "Happy Halloween!", "Candy, please?"],
    correct: 0,
  },
  {
    question: "🦇 What animal is associated with vampires?",
    answers: ["Rat", "Cat", "Bat", "Dog"],
    correct: 2,
  },
  {
    question: "🧛 Who lives in Transylvania?",
    answers: ["Frankenstein", "Mummy", "Count Dracula", "Casper"],
    correct: 2,
  },
  {
    question: "🕯️ What is used to light up pumpkins?",
    answers: ["Magic", "Flashlight", "Candle", "Battery"],
    correct: 2,
  },
  {
    question: "🪦 What do you call a resting place for the undead?",
    answers: ["Cemetery", "Hospital", "Forest", "Couch"],
    correct: 0,
  },
  {
    question: "🍭 What is the most popular Halloween candy?",
    answers: ["Licorice", "Candy corn", "Choco bar", "Carrot sticks"],
    correct: 1,
  },
  {
    question: "😱 What noise do ghosts make?",
    answers: ["Meow", "Bark", "Boo", "Howdy!"],
    correct: 2,
  },
  {
    question: "🧙 What is a spellbook called?",
    answers: ["Book of Shadows", "Wizard’s Notes", "Magic Diary", "Spellfolio"],
    correct: 0,
  },
  {
    question: "📅 When is Halloween celebrated?",
    answers: ["October 30", "October 31", "November 1", "October 13"],
    correct: 1,
  },
  {
    question: "🐈 What color cat is associated with bad luck?",
    answers: ["White", "Orange", "Gray", "Black"],
    correct: 3,
  },
  {
    question: "🎬 Which movie features Michael Myers?",
    answers: ["Friday the 13th", "The Conjuring", "Halloween", "Coraline"],
    correct: 2,
  },
  {
    question: "🪞 What do you summon by saying their name three times?",
    answers: ["Pooky", "Ghostface", "Bloody Mary", "Heitor"],
    correct: 2,
  },
];

// Shuffle the questions randomly
const shuffledQuestions = questions.sort(() => Math.random() - 0.5);

let currentQuestion = 0;

function showQuestion() {
  const questionEl = document.querySelector(".question");
  const answersEl = document.querySelector(".answers");
  const feedbackEl = document.querySelector(".feedback");
  const q = shuffledQuestions[currentQuestion];

  questionEl.innerHTML = `<h2>${q.question}</h2>`;
  answersEl.innerHTML = "";
  feedbackEl.textContent = ""; // clear previous feedback

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.classList.add("answer-btn");
    btn.onclick = () => checkAnswer(index);
    answersEl.appendChild(btn);
  });
}

function checkAnswer(index) {
  const q = shuffledQuestions[currentQuestion];
  const feedbackEl = document.querySelector(".feedback");

  if (index === q.correct) {
    feedbackEl.textContent = "🎉 Correct!";
    feedbackEl.style.color = "limegreen";
  } else {
    feedbackEl.textContent = "😱 Oops! Not quite...";
    feedbackEl.style.color = "orangered";
  }

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < shuffledQuestions.length) {
      showQuestion();
    } else {
      document.querySelector(".question").innerHTML =
        "<h2 class='quiz-complete'>🎉 The quiz is complete! You're spooky smart! 👻</h2>";
      document.querySelector(".answers").innerHTML = "";
      document.querySelector(".feedback").textContent = "";
    }
  }, 1000); // wait 1 second before next question
}

document.addEventListener("DOMContentLoaded", showQuestion);