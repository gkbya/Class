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
    <div class="question" data-correct="C">
  <p>6. Hubble's law is related to:</p>
  <button data-option="A">A. Heat</button>
  <button data-option="B">B. Sound</button>
  <button data-option="C">C. Astronomy</button>
  <button data-option="D">D. Pressure of wind</button>
</div>

<div class="question" data-correct="D">
  <p>7. Cosmic snowballs of frozen gases, rock and dust that orbit the Sun are known as:</p>
  <button data-option="A">A. Meteors</button>
  <button data-option="B">B. Star</button>
  <button data-option="C">C. Meteorites</button>
  <button data-option="D">D. Comets</button>
</div>

<div class="question" data-correct="A">
  <p>8. Which one of the following statements is NOT correct?</p>
  <button data-option="A">A. Solar system is 2.3 billion years old.</button>
  <button data-option="B">B. Planet Mercury is closest to the Sun.</button>
  <button data-option="C">C. Planet Jupiter has maximum satellites in the solar system.</button>
  <button data-option="D">D. Planet Venus has no natural satellite.</button>
</div>

<div class="question" data-correct="D">
  <p>9. How much time is taken by sunlight to reach Earth?</p>
  <button data-option="A">A. 7 min 32 sec</button>
  <button data-option="B">B. 9 min 32 sec</button>
  <button data-option="C">C. 7 min 56 sec</button>
  <button data-option="D">D. 8 min 20 sec</button>
</div>

<div class="question" data-correct="D">
  <p>10. Which celestial body shines in the sky at night?</p>
  <button data-option="A">A. Mars</button>
  <button data-option="B">B. Moon</button>
  <button data-option="C">C. Jupiter</button>
  <button data-option="D">D. Star</button>
</div>

<div class="question" data-correct="B">
  <p>11. What is the source of energy of the sun and other stars?</p>
  <button data-option="A">A. Combustion of Helium gas</button>
  <button data-option="B">B. Nuclear fusion</button>
  <button data-option="C">C. Nuclear fission</button>
  <button data-option="D">D. Combustion of Hydrogen gas</button>
</div>

<div class="question" data-correct="A">
  <p>12. Which planets do NOT have even one moon?</p>
  <button data-option="A">A. Venus and Mercury</button>
  <button data-option="B">B. Neptune and Mars</button>
  <button data-option="C">C. Uranus and Neptune</button>
  <button data-option="D">D. Jupiter and Saturn</button>
</div>

<div class="question" data-correct="C">
  <p>13. Total solar eclipse occurs when:</p>
  <button data-option="A">A. Moon is at maximum distance from earth</button>
  <button data-option="B">B. Moon enters the earth's shadow</button>
  <button data-option="C">C. Sun, Moon and Earth are in a straight line</button>
  <button data-option="D">D. Sun, Moon and Earth should not be in a straight line</button>
</div>

<div class="question" data-correct="D">
  <p>14. The shape of earth is:</p>
  <button data-option="A">A. Circular</button>
  <button data-option="B">B. Flattened</button>
  <button data-option="C">C. Spherical</button>
  <button data-option="D">D. Elongated (Geoid)</button>
</div>

<div class="question" data-correct="B">
  <p>15. When three quarters of the Moon is visible, what is it called?</p>
  <button data-option="A">A. Half Moon</button>
  <button data-option="B">B. Gibbous Moon</button>
  <button data-option="C">C. New Moon</button>
  <button data-option="D">D. Full Moon</button>
</div>
  <div class="question" data-correct="C">
  <p>16. Which dwarf asteroid planet is present in the Asteroid belt?</p>
  <button data-option="A">A. Make</button>
  <button data-option="B">B. Pluto</button>
  <button data-option="C">C. Ceres</button>
  <button data-option="D">D. Eris</button>
</div>

<div class="question" data-correct="B">
  <p>17. Halley's comet (Tail star) is visible approximately after how many years?</p>
  <button data-option="A">A. 84</button>
  <button data-option="B">B. 75</button>
  <button data-option="C">C. 24</button>
  <button data-option="D">D. 4</button>
</div>

<div class="question" data-correct="B">
  <p>18. Which of the following statements is INCORRECT about longitudes and latitudes?</p>
  <button data-option="A">A. The latitude lines are parallel to each other</button>
  <button data-option="B">B. Longitudes never intersect each other</button>
  <button data-option="C">C. Latitudes never intersect each other</button>
  <button data-option="D">D. 180° E and 180° W refer to the same longitudinal line</button>
</div>

<div class="question" data-correct="A">
  <p>19. Which is the longest line of latitude on the globe?</p>
  <button data-option="A">A. Equator</button>
  <button data-option="B">B. Tropic of Capricorn</button>
  <button data-option="C">C. The Arctic Circle</button>
  <button data-option="D">D. Tropic of Cancer</button>
</div>

<div class="question" data-correct="A">
  <p>20. From 21st March to 23rd September, sun rays are perpendicular on the Equator. It is known as:</p>
  <button data-option="A">A. Equinox</button>
  <button data-option="B">B. Rotation</button>
  <button data-option="C">C. Winter Solstice</button>
  <button data-option="D">D. Summer Solstice</button>
</div>

<div class="question" data-correct="A">
  <p>21. Which of the following cities lies on the equator?</p>
  <button data-option="A">A. Pontianak</button>
  <button data-option="B">B. Cairo</button>
  <button data-option="C">C. Port Blair</button>
  <button data-option="D">D. Addis Ababa</button>
</div>

<div class="question" data-correct="A">
  <p>22. ______ is the meridian on which Indian Standard Time (IST) is based.</p>
  <button data-option="A">A. 82° ½ E longitude</button>
  <button data-option="B">B. 81° ½ E longitude</button>
  <button data-option="C">C. 84° ½ E longitude</button>
  <button data-option="D">D. 83° ½ E longitude</button>
</div>

<div class="question" data-correct="A">
  <p>23. Which of the following countries has more than one standard meridian?</p>
  <button data-option="A">A. U.S.A</button>
  <button data-option="B">B. India</button>
  <button data-option="C">C. Japan</button>
  <button data-option="D">D. Afghanistan</button>
</div>

<div class="question" data-correct="C">
  <p>24. The Tropic of Cancer does NOT pass through which of the following states?</p>
  <button data-option="A">A. Assam</button>
  <button data-option="B">B. Rajasthan</button>
  <button data-option="C">C. Mizoram</button>
  <button data-option="D">D. Jharkhand</button>
</div>

<div class="question" data-correct="B">
  <p>25. The asthenosphere is the highly viscous, mechanically weak and ductilely deforming region of the upper ______ of Earth.</p>
  <button data-option="A">A. Crust</button>
  <button data-option="B">B. Mantle</button>
  <button data-option="C">C. Crust and Core</button>
  <button data-option="D">D. Core</button>
</div>
    <div class="question" data-correct="D">
  <p>26. The Mohorovičić (Moho) discontinuity separates?</p>
  <button data-option="A">A. Earth's lithosphere and asthenosphere</button>
  <button data-option="B">B. Earth's atmosphere and hydrosphere</button>
  <button data-option="C">C. Earth's crust and the inner core</button>
  <button data-option="D">D. Earth's crust and the mantle</button>
</div>

<div class="question" data-correct="D">
  <p>27. Who among the following is considered the father of Plate Tectonics?</p>
  <button data-option="A">A. Antonie Philips Van Leeuwenhoek</button>
  <button data-option="B">B. James Rennell</button>
  <button data-option="C">C. Antoine Lavoisier</button>
  <button data-option="D">D. Alfred Wegener</button>
</div>

<div class="question" data-correct="C">
  <p>28. Which earthquake waves involve transverse displacement?</p>
  <button data-option="A">A. P-Waves</button>
  <button data-option="B">B. L-Waves</button>
  <button data-option="C">C. S-Waves</button>
  <button data-option="D">D. Rayleigh surface Waves</button>
</div>

<div class="question" data-correct="D">
  <p>29. The Indian plate (where India is situated) split off from which ancient continent?</p>
  <button data-option="A">A. Rodinia</button>
  <button data-option="B">B. Panocia</button>
  <button data-option="C">C. Pangaea</button>
  <button data-option="D">D. Gondwana land</button>
</div>

<div class="question" data-correct="A">
  <p>30. Which of the following options can cause a Tsunami (also known as harbour wave)?</p>
  <button data-option="A">A. An Earthquake within the sea</button>
  <button data-option="B">B. Severe storm</button>
  <button data-option="C">C. Volcanic eruption over Germany</button>
  <button data-option="D">D. Drought (famine)</button>
</div>

<div class="question" data-correct="C">
  <p>31. Which of the following is a warning sign of Tsunami?</p>
  <button data-option="A">A. Stormy weather</button>
  <button data-option="B">B. Shower</button>
  <button data-option="C">C. Water falling back quickly from the beach</button>
  <button data-option="D">D. Pets acting strangely</button>
</div>

<div class="question" data-correct="B">
  <p>32. Which type of rocks are Granite Rocks?</p>
  <button data-option="A">A. Sedimentary Rocks</button>
  <button data-option="B">B. Igneous Rocks</button>
  <button data-option="C">C. Schist Rocks</button>
  <button data-option="D">D. Metamorphic Rocks</button>
</div>

<div class="question" data-correct="D">
  <p>33. Rocks are formed when magma (molten rock) emerges due to volcanic eruptions and takes the form of hard solid rocks:</p>
  <button data-option="A">A. Sedimentary</button>
  <button data-option="B">B. Metamorphic</button>
  <button data-option="C">C. Komatite</button>
  <button data-option="D">D. Igneous</button>
</div>

<div class="question" data-correct="D">
  <p>34. What is an aquifer?</p>
  <button data-option="A">A. Pockets of freshwater in sandy desert beds</button>
  <button data-option="B">B. Water flowing through estuary channels</button>
  <button data-option="C">C. Frozen water sheets in high-altitude caves</button>
  <button data-option="D">D. Water stored underground between layers of hard rock</button>
</div>

<div class="question" data-correct="D">
  <p>35. The term 'lithification' is related to which of the following geographic elements?</p>
  <button data-option="A">A. Rivers</button>
  <button data-option="B">B. Valleys</button>
  <button data-option="C">C. Seas</button>
  <button data-option="D">D. Rocks</button>
</div>
