import { createContext, useReducer } from "react";
import questions from "../data";
import { shuffleAnswers } from "../helper";

// Define the initial state of the quiz component.
const initialState = {
  currentQuestionIndex: 0,
  questions,
  showResults: false,
  answers:shuffleAnswers(questions[0]),
};

// Reducer function to update the state based on actions.
const reducer = (state, action) => {
    if (action.type === "NEXT_QUESTION") {
        const showresult =
          state.currentQuestionIndex === state.questions.length - 1;
        const currentQuestionIndex = showresult
          ? state.currentQuestionIndex
          : state.currentQuestionIndex + 1;
        const answers = state.showResults ? [] : shuffleAnswers(state.questions[currentQuestionIndex])
        return {
          ...state,
          currentQuestionIndex: currentQuestionIndex,
          showResults: showresult,
          answers: answers,
        };
    }
    
    if (action.type === "RESTART") {
      return initialState;
    }
     
};

export const QuizContext = createContext();

// Wrapper that provides the data to all the components
export const QuizProvider = ({ children }) => {
  // Use the useReducer hook to manage state with the reducer function and initial state.
  const value = useReducer(reducer, initialState);
  return (
    <QuizContext.Provider value={value}> {children} </QuizContext.Provider>
  );
};
