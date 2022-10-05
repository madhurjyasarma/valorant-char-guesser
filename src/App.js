import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      // Viper
      role: "Controller",
      description: "Toxic Screen, Snake Bite, Poison Cloud, Viper's PIT",
      options: [
        { id: 0, text: "Sova", isCorrect: false },
        { id: 1, text: "Breach", isCorrect: false },
        { id: 2, text: "Viper", isCorrect: true },
        { id: 3, text: "Raze", isCorrect: false },
      ],
    },
    {
      // Astra
      role: "Controller",
      description: "Aftershock ,Flashpoint, Fault Lines, Ultimate: Rolling Thunder",
      options: [
        { id: 0, text: "astra", isCorrect: true },
        { id: 1, text: "Neon", isCorrect: false },
        { id: 2, text: "Phoenix", isCorrect: false },
        { id: 3, text: "Jett", isCorrect: false },
      ],
    },
    {
      // Breach
      role: "Initiators",
      description: "Aftershock, Flashpoint, Fault Lines, Ultimate: Rolling Thunder",
      options: [
        { id: 0, text: "Sova", isCorrect: false },
        { id: 1, text: "Breach", isCorrect: true },
        { id: 2, text: "Phoenix", isCorrect: false },
        { id: 3, text: "Raze", isCorrect: false },
      ],
    },
    {
      // sage
      role: "Sentinels",
      description: "Slow Orb, Barrier Orb, Healing Orb , Ultimate: Resurrection",
      options: [
        { id: 0, text: "Killjoy", isCorrect: false },
        { id: 1, text: "sage", isCorrect: true },
        { id: 2, text: "KAY/O", isCorrect: false },
        { id: 3, text: "Raze", isCorrect: false },
      ],
    },
    {
      // phonix
      role: "Duelists",
      description: "Hot Hands, Blaze ,Curveball, Ultimate: Run it Back",
      options: [
        { id: 0, text: "Viper", isCorrect: false },
        { id: 1, text: "Yoru", isCorrect: false },
        { id: 2, text: "Killjoy", isCorrect: false },
        { id: 3, text: "Phoenix", isCorrect: true },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      

      {/* 2. Current Score  */}
      

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          <h1 id="header">Guess the Character</h1>
            <h3 id="score">Score: {score}</h3>
          {/* Current Question  */}
          <h3 className="total_qsn">
            Question: {currentQuestion + 1} out of {questions.length}
          </h3>
          <h4>The character has the following abilities:</h4>

          <div className="question">
            <h3 className="question-text">Role: {questions[currentQuestion].role}</h3>
            <p id="description">{questions[currentQuestion].description}</p>

            {/* List of possible answers  */}
            <ul>
              {questions[currentQuestion].options.map((option) => {
                return (
                  <li
                    key={option.id}
                    onClick={() => optionClicked(option.isCorrect)}
                  >
                    {option.text}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
