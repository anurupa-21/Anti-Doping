import React, { useState } from "react";
import "./Quizzes.css"; // Link to your CSS file

const Quizzes = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0); // Track the score
  const [quizData] = useState([
    {
      question: "Is using performance-enhancing drugs allowed in sports?",
      type: "trueFalse",
      options: ["True", "False"],
      correctAnswer: "False",
      explanation: "Performance-enhancing drugs are banned in most sports because they provide unfair advantages and can be harmful to health.",
      hint: "HINT: Think about the fairness and health risks involved."
    },
    {
      question: "Which of the following substances is prohibited in sports?",
      type: "mcq",
      options: ["Caffeine", "Creatine", "Erythropoietin (EPO)", "Vitamin C"],
      correctAnswer: "Erythropoietin (EPO)",
      explanation: "Erythropoietin (EPO) is banned because it enhances oxygen delivery to muscles, improving endurance performance unfairly.",
      hint: "HINT: It's a hormone used to boost red blood cell production."
    },
    {
      question: "Which of the following statements is true about anti-doping regulations?",
      type: "trueFalse",
      options: ["True", "False"],
      correctAnswer: "True",
      explanation: "Anti-doping regulations aim to protect the health of athletes and ensure fairness in competitions.",
      hint: "HINT: Consider the health and ethical reasons for regulations."
    },
    {
      question: "Which of the following substances is considered a stimulant in sports?",
      type: "mcq",
      options: ["Caffeine", "Coca-Cola", "Ginseng", "Caffeine-Free Drinks"],
      correctAnswer: "Caffeine",
      explanation: "Caffeine is a stimulant that can enhance performance but is considered banned in high doses in some sports.",
      hint: "HINT: Look for the substance that increases alertness and focus."
    },
    {
      question: "Is blood doping a banned practice in sports?",
      type: "trueFalse",
      options: ["True", "False"],
      correctAnswer: "True",
      explanation: "Blood doping involves increasing the red blood cell count to improve athletic performance and is banned in most sports.",
      hint: "HINT: Think about practices that are used to enhance oxygen delivery to muscles."
    },
    {
      question: "What is the primary reason behind anti-doping policies?",
      type: "mcq",
      options: ["Health and safety", "Level playing field", "Both health and safety and fairness", "Performance enhancement"],
      correctAnswer: "Both health and safety and fairness",
      explanation: "Anti-doping policies are in place to ensure both the safety of athletes and a fair competition.",
      hint: "HINT: It's about maintaining both fairness and safety."
    },
    {
      question: "Which of the following is an example of a banned substance in sports?",
      type: "mcq",
      options: ["Ibuprofen", "Steroids", "Vitamin D", "Magnesium Supplements"],
      correctAnswer: "Steroids",
      explanation: "Steroids are commonly used to enhance muscle mass and strength but are banned due to unfair advantages they provide.",
      hint: "HINT: Consider substances that help build muscle mass quickly."
    },
    {
      question: "Are athletes required to undergo drug tests during major competitions?",
      type: "trueFalse",
      options: ["True", "False"],
      correctAnswer: "True",
      explanation: "Athletes are tested to ensure they are not using banned substances to enhance their performance during major competitions.",
      hint: "HINT: Think about the measures taken to maintain fairness."
    },
    {
      question: "What does the term 'anti-doping' refer to?",
      type: "mcq",
      options: ["The process of monitoring sports results", "The practice of preventing drug use in sports", "The legal framework for sports competitions", "The method of determining winners in sports"],
      correctAnswer: "The practice of preventing drug use in sports",
      explanation: "Anti-doping refers to the efforts made to prevent athletes from using banned substances to enhance their performance.",
      hint: "HINT: It's about ensuring fairness in sports."
    },
    {
      question: "Which of the following can be considered an example of a banned performance-enhancing drug?",
      type: "mcq",
      options: ["Creatine", "Erythropoietin (EPO)", "Multivitamins", "Fish Oil"],
      correctAnswer: "Erythropoietin (EPO)",
      explanation: "Erythropoietin (EPO) is banned because it boosts the production of red blood cells to enhance endurance.",
      hint: "HINT: It is a hormone that influences red blood cell production."
    },
    // Add more questions as needed
  ]);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);

    // Check if the answer is correct and update the score
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1); // Increment the score
    }
  };

  const handleNextQuestion = () => {
    setIsSubmitted(false);
    setSelectedAnswer(null);
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleFinishQuiz = () => {
    alert(`Quiz Completed! Your final score is: ${score}/${quizData.length}`);
  };

  return (
    <div className="quiz-container">
      <h1>Anti-Doping Quiz</h1>
      <div className="quiz-question">
        <h2>{quizData[currentQuestion].question}</h2>
        <p>{quizData[currentQuestion].hint}</p>

        <div className="options">
          {quizData[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelection(option)}
              disabled={isSubmitted}
              className={selectedAnswer === option ? "selected" : ""}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {isSubmitted ? (
        <div className="result">
          <h3>Your Answer: {selectedAnswer}</h3>
          <h3>Correct Answer: {quizData[currentQuestion].correctAnswer}</h3>
          <p>{quizData[currentQuestion].explanation}</p>
          {currentQuestion < quizData.length - 1 ? (
            <button onClick={handleNextQuestion}>Next Question</button>
          ) : (
            <button onClick={handleFinishQuiz}>Finish Quiz</button>
          )}
        </div>
      ) : (
        <button className="submit" onClick={handleSubmit}>
          Submit Answer
        </button>
      )}
    </div>
  );
};

export default Quizzes;
