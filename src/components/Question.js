import Answer from "./Answer";

const Question = () => {
  return (
    <div>
      <h1 className="question">Text of our question</h1>
      <div className="answers">
        <Answer />
        <Answer />
        <Answer />
        <Answer />
      </div>   
    </div>
  );
};

export default Question;
