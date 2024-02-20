const Answer = ({answerText}) => {
  return (
    <div className="answer">
      <div className="answer-letter">A</div>
      <div className="answer-tex  t"><h1>{answerText}</h1></div>
    </div>
  );
};

export default Answer;
