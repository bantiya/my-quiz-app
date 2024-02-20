import Question from "./Question";
import "../index.css";
import { useState } from "react";

const Quiz = () => {
  // In the useState hook, we pass in an initial value of 1 for the currentQuestionIndex variable.
  // This value will be used to keep track of the current question in the quiz. We can then update this value to move to the next question use the setter function(setQuestionIndex).
  const [state, setState] = useState({
    currentQuestionIndex: 0,
    questions: ["Question 1"],
  });

  // What if you have a lot of different properties in the state it will become very difficult to maintain it so what we use is  : useReducer hook
  const increaseQuestion = () => {
    setState({
      ...state,
      currentQuestionIndex: state.currentQuestionIndex + 1,
    });
  };

  return (
    <div className="quiz">
        {console.log(state.questions)}
      <div>
        <div className="score">Question {state.currentQuestionIndex}/8</div>
        <Question />
        <div className="next-button" onClick={increaseQuestion}>
          Next Question
        </div>
      </div>
    </div>
  );
};

export default Quiz;
