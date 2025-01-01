import React, { useState, useEffect, useCallback } from "react";
import { fetchQuestions } from "../utils/api";
import Question from "./Question";

const Game = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [difficulty, setDifficulty] = useState("easy");
  const [category, setCategory] = useState(""); // Default category
  const [unlockedLevels, setUnlockedLevels] = useState(["easy"]); // Tracks unlocked levels
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [loading, setLoading] = useState(false);

  const resetGameState = useCallback(() => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setGameOver(false);
  }, []);

  const loadQuestions = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchQuestions(category, difficulty); // Fetch based on category and difficulty
      setQuestions(data.questions);
      resetGameState();
    } catch (error) {
      console.error("Failed to load questions:", error);
    } finally {
      setLoading(false);
    }
  }, [category, difficulty, resetGameState]);

  useEffect(() => {
    if (gameStarted) {
      loadQuestions();
    }
  }, [gameStarted, loadQuestions]);

  const handleAnswer = (score) => {
    setScore((prevScore) => prevScore + score);

    if (currentQuestionIndex + 1 <  10) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setGameOver(true);
      handleLevelUnlock();
    }
  };

  const handleLevelUnlock = async () => {
    if (score >= 60) {
      const levels = ["easy", "medium", "hard", "impossible"];
      const nextLevel = levels[levels.indexOf(difficulty) + 1];

      if (nextLevel && !unlockedLevels.includes(nextLevel)) {
        setUnlockedLevels((prevLevels) => [...prevLevels, nextLevel]);

        try {
          await fetch(`/api/questions/updatePoints`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ points: 1 }), // Award 1 point
          });
          alert(`Congratulations! You've unlocked ${nextLevel.toUpperCase()} level and earned a point.`);
        } catch (error) {
          console.error("Failed to update user points:", error);
        }
      }
    }
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setGameStarted(false); // Reset the game if the category changes
  };

  const handleDifficultyChange = (newDifficulty) => {
    if (unlockedLevels.includes(newDifficulty)) {
      setDifficulty(newDifficulty);
      setGameStarted(false);
    } else {
      alert(`You need to score at least 60 in ${difficulty.toUpperCase()} to unlock this level.`);
    }
  };

  const handleStartGame = () => {
    setGameStarted(true);
  };

  return (
     <div>
      <div className="flex overflow-hidden flex-col px-14 py-8 text-3xl font-semibold text-black bg-white max-md:px-5 max-md:py-24">
        <div className="self-center max-md:max-w-full">
          Enhance your knowledge by solving real life scenario based quiz
        </div>
        <div className="self-start mt-7 ml-3.5 max-md:ml-2.5">
          <label htmlFor="category-section" className="sr-only">
            Select category
          </label>
          Select category:
        </div>
        
        {!gameStarted && (
          <div>
              <div className="flex flex-wrap gap-2.5 justify-center items-center px-2.5 py-1.5 mt-3 text-2xl min-h-[70px] text-stone-800 max-md:max-w-full">
            {["investment and saving ", "Debt management", "Credit scores", "Budgeting" ,"Taxes"].map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`gap-2.5 self-stretch px-2.5 py-3.5 mx-6 my-auto bg-white rounded-xl border border-black border-solid min-h-[59px] `}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
            </div>
            
          <div className="self-start mt-7 ml-4 max-md:ml-2.5">
          <label htmlFor="difficulty-section" className="sr-only">
            Select difficulty
          </label>
          Select difficulty:
        </div>
            <div className="flex flex-wrap gap-2.5 justify-center items-center self-start px-2.5 py-1.5 mt-3 text-2xl whitespace-nowrap min-h-[70px] text-stone-800 max-md:max-w-full">
            {["easy", "medium", "hard", "impossible"].map((level) => (
              <button
              className={`gap-2.5 self-stretch px-2.5 py-3.5 my-auto mx-6 bg-white rounded-xl border border-black border-solid min-h-[59px] `}
                key={level}
                disabled={!unlockedLevels.includes(level)}
                onClick={() => handleDifficultyChange(level)}
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </button>
            ))}
            </div>
            <div className="flex items-center justify-center">
          <button
          onClick={handleStartGame}
          className={`gap-2.5 text-center self-center px-2.5 py-4 mt-14 max-w-full text-2xl bg-cyan-300 rounded-xl min-h-[65px] text-stone-800 w-[432px] max-md:mt-10`}
          aria-disabled={!category || !difficulty}
        >
          Start Game
        </button>
        </div>
        </div>
        )}
        </div>
        <div>
        {gameStarted && loading && <p>Loading questions...</p>}
  
        {gameStarted && questions.length > 0 && !gameOver && (
          <Question
            data={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
          />
        )}
  
        {gameOver && (
          <div className="flex flex-col">
            <div className="self-center max-md:max-w-full">
          Game Over!
        </div>
            <div className="self-center max-md:max-w-full">Your Score: {score}</div>
            <button onClick={() => setGameStarted(false)}
              className={`gap-2.5 text-center self-center px-2.5 py-4 mt-6 max-w-full text-1xl bg-cyan-300 rounded-xl min-h-[65px] text-stone-800 w-[332px] max-md:mt-10`}
              >Back to Levels</button>
          </div>
        )}
        </div>
        </div>
      
    );
  };

export default Game;
