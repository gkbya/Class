const questions = [
  {
    question: "The study of the universe is known as:",
    options: ["Anthropology", "Etymology", "Cosmology", "Anatomy"],
    correctIndex: 2
  },
  {
    question: "Which is the most widely accepted model for solar system formation?",
    options: ["Cloud hypothesis", "Gas hypothesis", "Nebular hypothesis", "Solar hypothesis"],
    correctIndex: 2
  },
  {
    question: "How old is our universe?",
    options: ["13.6 billion years", "4.6 billion years", "5.8 billion years", "8.9 billion years"],
    correctIndex: 0
  },
  {
    question: "The different patterns formed by stars are called:",
    options: ["Stars", "Planets", "Celestial bodies", "Constellations"],
    correctIndex: 3
  },
  {
    question: "Which is the galaxy closest to the Milky Way?",
    options: ["Whirlpool Galaxy", "Cigar Galaxy", "Andromeda Galaxy", "Tadpole Galaxy"],
    correctIndex: 2
  },
  {
    question: "Hubble's law is related to:",
    options: ["Heat", "Sound", "Astronomy", "Pressure of wind"],
    correctIndex: 2
  },
  {
    question: "Cosmic snowballs of frozen gases, rock and dust orbiting the Sun are called:",
    options: ["Meteors", "Star", "Meteorites", "Comets"],
    correctIndex: 3
  },
  {
    question: "Which statement is NOT correct?",
    options: [
      "Solar system is 2.3 billion years old.",
      "Mercury is closest to the Sun.",
      "Jupiter has maximum satellites.",
      "Venus has no natural satellite."
    ],
    correctIndex: 0
  },
  {
    question: "Time taken by sunlight to reach Earth:",
    options: ["7 min 32 sec", "9 min 32 sec", "7 min 56 sec", "8 min 20 sec"],
    correctIndex: 3
  },
  {
    question: "What shines in the sky at night?",
    options: ["Mars", "Moon", "Jupiter", "Star"],
    correctIndex: 3
  }
  // Add more questions here...
];

const container = document.getElementById("quiz-container");

questions.forEach((q, index) => {
  const box = document.createElement("div");
  box.className = "question-box";

  const qText = document.createElement("div");
  qText.className = "question";
  qText.innerText = `${index + 1}. ${q.question}`;
  box.appendChild(qText);

  q.options.forEach((opt, i) => {
    const btn = document.createElement("div");
    btn.className = "option";
    btn.innerText = opt;

    btn.addEventListener("click", () => {
      const allOptions = box.querySelectorAll(".option");
      allOptions.forEach(o => {
        o.style.pointerEvents = "none"; // prevent re-clicking
