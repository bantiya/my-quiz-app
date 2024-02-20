import Question from "./Question";
import "../index.css";

import { useContext } from "react";
import { QuizContext } from "../context/quiz";


// The Quiz component using function syntax.
const Quiz = () => {
    const [quizState,dispatch] = useContext(QuizContext)
    console.log(quizState)

  // Render method of the Quiz component.
  return (
    <div className="quiz">
      <div>
        {/* Display a static score. Ideally, this could be dynamic based on the state. */}
        <div className="score">Question 1/8</div>
        {/* Render the Question component. */}
        <Question />
        {/* Button to move to the next question. */}
        <div className="next-button" onClick={() => dispatch({type: "NEXT_QUESTION"})}>
          Next Question {quizState.currentQuestionIndex}
        </div>
      </div>
    </div>
  );
};

// Export the Quiz component for use in other parts of the application.
export default Quiz;
