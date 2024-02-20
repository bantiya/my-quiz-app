import { createContext, useReducer } from "react";

// Define the initial state of the quiz component.
const initialState = {
  currentQuestionIndex: 0,
  question: [],
};

// Reducer function to update the state based on actions.
const reducer = (state, action) => {
  if (action.type === "NEXT_QUESTION") {
    return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
  }
  return state;
};

export const QuizContext = createContext();

// Wrapper that provides the data to all the components
export const QuizProvider = ({ children }) => {
  // Use the useReducer hook to manage state with the reducer function and initial state.
  const value = useReducer(reducer, initialState);
  return <QuizContext.Provider value={value}> {children} </QuizContext.Provider>;
};
