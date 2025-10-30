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
    answers: ["Jason", "Ghostface", "Bloody Mary", "Chucky"],
    correct: 2,
  },
  {
    question: "🧟‍♂️ What’s the only thing that can stop a zombie?",
    answers: ["Netflix", "A bullet to the head", "Garlic", "Homework"],
    correct: 1,
  },
  {
    question: "🦴 What is the name of the spooky skeleton dance?",
    answers: [
      "Bone Boogie",
      "Skeleton Shuffle",
      "The Thriller",
      "The Skull Salsa",
    ],
    correct: 2,
  },
  {
    question: "🧙‍♀️ What do witches keep in a cauldron?",
    answers: ["Love potions", "Candy corn", "Soup", "Spells and weird stuff"],
    correct: 3,
  },
  {
    question: "🎈 What horror movie features a red balloon?",
    answers: ["The Conjuring", "Coraline", "It", "Ghostbusters"],
    correct: 2,
  },
  {
    question: "🕷️ What animal can scare even the bravest souls?",
    answers: ["Puppy", "Bat", "Spider", "Worm"],
    correct: 2,
  },
  {
    question: "🎭 What costume is most worn on Halloween?",
    answers: ["Witch", "Minion", "Vampire", "Fortnite guy"],
    correct: 0,
  },
  {
    question: "🔮 What does a crystal ball do?",
    answers: ["Tells jokes", "Tells the future", "Makes soup", "Summons cats"],
    correct: 1,
  },
  {
    question: "🕸 What’s another word for a haunted house?",
    answers: [
      "Cozy cottage",
      "Spook shack",
      "Ghost lair",
      "Mansion of horrors",
    ],
    correct: 3,
  },
  {
    question: "🍬 What candy has a chewy texture and fruity flavor?",
    answers: ["Caramel", "Taffy", "Licorice", "Chocolate bar"],
    correct: 1,
  },
  {
    question: "🎤 Who sang *Thriller*?",
    answers: [
      "Michael Jordan",
      "Michael Bublé",
      "Michael Jackson",
      "Michael Myers",
    ],
    correct: 2,
  },
  {
    question: "⚰️ What is Dracula’s bed called?",
    answers: ["Coffin", "Bat hammock", "Spooky box", "Death napper"],
    correct: 0,
  },
  {
    question: "📖 What’s a common fairy tale villain?",
    answers: ["Witch", "Princess", "Elf", "Pumpkin"],
    correct: 0,
  },
  {
    question: "🧠 What do zombies crave?",
    answers: ["Chocolate", "Pizza", "Brains", "Fries"],
    correct: 2,
  },
  {
    question: "🔦 What tool helps you escape a dark haunted house?",
    answers: ["Toothbrush", "Flashlight", "Mirror", "Banana"],
    correct: 1,
  },
  {
    question: "🌫 What weather adds to a spooky night?",
    answers: ["Sunny", "Foggy", "Snowy", "Windy"],
    correct: 1,
  },
  {
    question: "🪞What happens if a mirror breaks?",
    answers: [
      "7 years bad luck",
      "Ghost appears",
      "You level up",
      "Time stops",
    ],
    correct: 0,
  },
  {
    question: "🕯️ What smell do people love on Halloween?",
    answers: ["Pumpkin spice", "Lemon", "Gasoline", "Bubblegum"],
    correct: 0,
  },
  {
    question: "📺 What is a famous Halloween TV family?",
    answers: [
      "The Simpsons",
      "The Addams Family",
      "The Griffins",
      "The Potatoes",
    ],
    correct: 1,
  },
  {
    question: "🧛‍♂️ What do vampires use instead of mirrors?",
    answers: ["Selfies", "Echoes", "Nothing", "Bats"],
    correct: 2,
  },
  {
    question: "👠 What did Cinderella leave at the Halloween party?",
    answers: ["Pumpkin", "Broomstick", "Glass slipper", "A ghost"],
    correct: 2,
  },
  {
    question: "🌃 What time do most ghosts come out?",
    answers: ["3 PM", "Midnight", "5 AM", "During Zoom calls"],
    correct: 1,
  },
  {
    question: "🎤 Finish the lyric: 'This is Halloween, this is Halloween...'",
    answers: [
      "Everybody make a scream",
      "Trick or treat all night",
      "Pumpkins fly",
      "Skeletons dream",
    ],
    correct: 0,
  },
];

// Shuffle and pick 10 questions
const selectedQuestions = questions
  .sort(() => Math.random() - 0.5)
  .slice(0, 10);

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const questionEl = document.querySelector(".question");
  const answersEl = document.querySelector(".answers");
  const feedbackEl = document.querySelector(".feedback");
  const q = selectedQuestions[currentQuestion];

  questionEl.innerHTML = `<h2>${q.question}</h2>`;
  answersEl.innerHTML = "";
  feedbackEl.textContent = "";

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.classList.add("answer-btn");
    btn.onclick = () => checkAnswer(index);
    answersEl.appendChild(btn);
  });
}

function checkAnswer(index) {
  const q = selectedQuestions[currentQuestion];
  const feedbackEl = document.querySelector(".feedback");

  if (index === q.correct) {
    feedbackEl.textContent = "🎉 Correct!";
    feedbackEl.style.color = "limegreen";
    score++;
  } else {
    feedbackEl.textContent = "😱 Oops! Not quite...";
    feedbackEl.style.color = "orangered";
  }

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < selectedQuestions.length) {
      showQuestion();
    } else {
      showFinalResults();
    }
  }, 1000);
}

function showFinalResults() {
  document.querySelector(".question").innerHTML = `
    <h2 class="quiz-complete">🎉 The quiz is complete!</h2>
    <p>You got <strong>${score}</strong> out of <strong>${selectedQuestions.length}</strong> questions right! 🧠💀</p>
  `;
  document.querySelector(".answers").innerHTML = `
    <button onclick="restartQuiz()" class="answer-btn restart-btn">🔁 Take the quiz again</button>
  `;
  document.querySelector(".feedback").textContent = "";
}

function restartQuiz() {
  // reset and reload the quiz
  location.reload();
}

document.addEventListener("DOMContentLoaded", showQuestion);
