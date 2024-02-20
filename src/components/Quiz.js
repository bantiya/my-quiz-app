// Import the Question component and CSS styles for the quiz.
import Question from "./Question";
import "../index.css";

// Import the useReducer hook from React for state management.
import { useReducer } from "react";


// Define the initial state of the quiz component.
const initialState = {
  currentQuestionIndex: 0, // Index of the current question being displayed
  question: [], // Array to potentially hold question objects (though not used in this snippet)
};


// Reducer function to update the state based on actions.
const reducer = (state, action) => {
  // Checks the action type
  if (action.type === "NEXT_QUESTION") {
    // If the action is to move to the next question, update the currentQuestionIndex.
    return {...state, currentQuestionIndex: state.currentQuestionIndex + 1};
  }
  // Returns the current state if no action matches.
  return state;
};


// The Quiz component using function syntax.
const Quiz = () => {
  // Use the useReducer hook to manage state with the reducer function and initial state.
  const [state, dispatch] = useReducer(reducer, initialState);
  // Log the current state for debugging purposes.
  console.log("render", state);

  // Function to handle click events, dispatching the NEXT_QUESTION action.
//   const testClick = () => {
//     console.log("Clicked");
//     dispatch({type: "NEXT_QUESTION"});
//   };

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
          Next Question {state.currentQuestionIndex}
        </div>
      </div>
    </div>
  );
};

// Export the Quiz component for use in other parts of the application.
export default Quiz;
