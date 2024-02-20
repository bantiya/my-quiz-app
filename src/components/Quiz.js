import Question from "./Question";
import "../index.css";
import { useState } from "react";

const Quiz = () => {
  // In the useState hook, we pass in an initial value of 1 for the currentQuestionIndex variable.
  // This value will be used to keep track of the current question in the quiz. We can then update this value to move to the next question use the setter function(setQuestionIndex).
  const [currentQuestionIndex, setQuestionIndex] = useState(1);
  const testClick = () => {
    console.log("Next Question button Clicked");
    setQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <div className="quiz">
      <div>
        <div className="score">Question {currentQuestionIndex}/8</div>
        <Question />
        <div className="next-button" onClick={testClick}>
          Next Question
        </div>
      </div>
    </div>
  );
};

export default Quiz;
