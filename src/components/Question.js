import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import Answer from "./Answer";


const Question = () => {
    const [quizState] = useContext(QuizContext)
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex].question
  return (
    <div>
      <h1 className="question">{currentQuestion}</h1>
      <div className="answers">
        {quizState.answers.map((answer, index) => (
            <Answer answerText={answer} key={index}/>
        ))}
      </div>   
    </div>
  );
};

export default Question;
