const stories = [
  {
    title: "🕯️ The Candle in the Attic",
    text: "On the edge of a forgotten village stood an abandoned cottage, its windows always fogged as if hiding whispers. No one dared go near—except for Clara.\n\nShe was sixteen, curious, and tired of ghost tales that kept everyone away. So, one rainy evening, with thunder humming above her, Clara climbed through the broken window.\n\nDust choked the air. Cobwebs clung to her clothes. The house moaned as if stretching its bones. But what pulled her upstairs was the glow—a flickering candlelight from the attic, impossibly steady despite the drafts.\n\nThe door creaked open.\n\nInside was nothing but a single candle sitting atop a wooden stool. No matches. No wind. Just flame.\n\nAnd as Clara stepped closer, the candle whispered her name.\n\nShe froze.\n\nThen it spoke again—only louder.\n\nIt whispered secrets she’d never told anyone. Fears she never voiced. Regrets too deep for words. And the candle kept burning.\n\nThe villagers found her the next morning—silent, eyes wide open, still staring into that unblinking flame.\n\nNo one speaks of Clara anymore.\n\nBut the candle still burns.",
  },
  {
    title: "👁️ The Mirror Room",
    text: "In the heart of the town's oldest mansion was a locked door. No key, no handle—only a mirror embedded in its center. Locals called it 'The Eye', and said it watched you back.\n\nOne October night, a thrill-seeking teen named Oliver snuck into the mansion with a flashlight and a dare. 'Touch the mirror,' they said. 'See what happens.'\n\nAs he approached, the mirror shimmered. His reflection didn’t mimic him. It smiled… before he did.\n\nThe door clicked open.\n\nInside was a room full of mirrors, all showing versions of himself—older, younger, twisted. In one, he had hollow eyes. In another, no mouth. Then, one reflection moved independently, stepping forward.\n\nIt whispered, 'You’re late.'\n\nHe tried to run. The mirrors shattered—except the first one.\n\nThat night, Oliver never came home. But the mirror in the mansion? It now shows two people. And one of them always smiles too soon.",
  },
  {
    title: "🌾 The Scarecrow's Song",
    text: "In the middle of a cornfield no one claimed, stood a scarecrow with a stitched grin and a rusted music box at its feet. It never moved, never swayed, no matter how hard the wind blew.\n\nLocals said the land was cursed, that the crops grew even in drought and frost, but only crows feasted on them.\n\nOne autumn evening, a traveling musician named Eliot wandered off the path, drawn by the eerie melody that floated from the field. The music box was playing—though no one had wound it in decades.\n\nHe stepped closer. The scarecrow's head tilted.\n\nEliot blinked. It hadn’t moved. Had it?\n\nHe touched the box, and it stopped.\n\nA whisper curled around his ear: 'Sing.'\n\nTerrified but entranced, Eliot began to hum. The box rewound itself. The scarecrow’s stitched mouth opened.\n\nHe sang until his voice gave out, until dawn broke, and the box fell silent.\n\nThe next traveler found a new scarecrow in the field—one with a guitar slung over its back, and sorrow stitched into its smile.\n\nThe music plays again when no one's looking.",
  },

  // ... More stories coming soon
];

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("show-story");
  const container = document.getElementById("story-container");
  const title = document.getElementById("story-title");
  const text = document.getElementById("story-text");

  button.addEventListener("click", () => {
    const random = stories[Math.floor(Math.random() * stories.length)];
    title.textContent = random.title;
    text.textContent = random.text;
    container.classList.remove("hidden");
  });
});
