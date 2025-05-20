const questions = [{'question': 'The study of the universe is known as:', 'options': ['Anthropology', 'Etymology', 'Cosmology', 'Anatomy'], 'answer': 2}, {'question': 'Which is the most widely accepted model to explain the formation and evaluation of the solar system?', 'options': ['Cloud hypothesis', 'Gas hypothesis', 'Nebular hypothesis', 'Solar hypothesis'], 'answer': 2}, {'question': 'How old is our universe?', 'options': ['13.6 billion years', '4.6 billion years', '5.8 billion years', '8.9 billion years'], 'answer': 0}, {'question': 'The different patterns formed by different group of stars are called:', 'options': ['Stars', 'Planets', 'Celestial bodies', 'Constellations'], 'answer': 3}, {'question': 'Which is the galaxy closest to the Milky Way?', 'options': ['Whirlpool Galaxy', 'Cigar Galaxy', 'Andromeda Galaxy', 'Tadpole Galaxy'], 'answer': 2}];

const container = document.getElementById("question-container");

function loadQuestions() {
  container.innerHTML = "";

  questions.forEach((q, i) => {
    const qElem = document.createElement("div");
    qElem.innerHTML = `<h3>{i + 1}. {q.question}</h3>`;

    q.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.className = "option";
      btn.textContent = opt;
      btn.onclick = () => checkAnswer(btn, idx === q.answer, qElem, q.answer, q.options);
      qElem.appendChild(btn);
    });

    container.appendChild(qElem);
  });
}

function checkAnswer(button, isCorrect, container, correctIndex, options) {
  const buttons = container.querySelectorAll("button");
  buttons.forEach(btn => btn.disabled = true);

  if (isCorrect) {
    button.classList.add("correct");
  } else {
    button.classList.add("wrong");
    buttons[correctIndex].classList.add("correct");
  }
}

loadQuestions();
