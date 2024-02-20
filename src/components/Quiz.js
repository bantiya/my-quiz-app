import Question from "./Question";
import "../index.css";

import { useContext } from "react";
import { QuizContext } from "../context/quiz";

// The Quiz component using function syntax.
const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log(quizState);

  // Render method of the Quiz component.
  return (
    <div className="quiz">
      {quizState.showResults && (
        <div className="results">
          <div className="congratulations">Congratulations</div>
          <div className="result-info">
            <div>You have completed the quiz</div>
            <div>You've got 4 of {quizState.questions.length}</div>
          </div>
          <div className="next-button" onClick={() => dispatch({ type : "RESTART" })}> Restart </div>
        </div>
      )}
      {!quizState.showResults && (
        <div>
          {/* Display a static score. Ideally, this could be dynamic based on the state. */}
          <div className="score">
            Question {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}
          </div>
          {/* Render the Question component. */}
          <Question />
          {/* Button to move to the next question. */}
          <div
            className="next-button"
            onClick={() => dispatch({ type: "NEXT_QUESTION" })}
          >
            Next Question
          </div>
        </div>
      )}
    </div>
  );
};

// Export the Quiz component for use in other parts of the application.
export default Quiz;
