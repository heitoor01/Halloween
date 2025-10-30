document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("trick-treat-btn");
  const result = document.getElementById("trick-treat-result");

  const tricks = [
    "🕷️ A spider just crawled into your candy bag! Boo!",
    "👻 You’ve been haunted for the next 24 hours. Good luck!",
    "🪞 Don't look in the mirror tonight. Trust me.",
    "🎃 A pumpkin just whispered your name...",
    "🦇 You’ve been cursed with bad hair days till Halloween ends!",
  ];

  const treats = [
    "🍭 A mountain of candy appears before you!",
    "🧁 You get a cupcake with magical sprinkles!",
    "🍫 A never-ending chocolate bar is now yours!",
    "🧙‍♀️ A witch grants you a night of spooky dreams!",
    "💖 You receive the ultimate Halloween hug from the universe!",
  ];

  button.addEventListener("click", () => {
    const isTrick = Math.random() < 0.5;
    const chosen = isTrick
      ? tricks[Math.floor(Math.random() * tricks.length)]
      : treats[Math.floor(Math.random() * treats.length)];

    result.textContent = chosen;
    result.style.color = isTrick ? "orangered" : "limegreen";
    result.style.fontSize = "1.4rem";

    // Add a little visual shake if it’s a trick
    result.classList.remove("shake");
    if (isTrick) {
      void result.offsetWidth; // trigger reflow
      result.classList.add("shake");
    }
  });
});
