import React, { useState, useEffect } from "react";

import { Button } from "@lumx/react";

import { getQuestion, sortAnswer } from "../../utils/quizzData";

export const Quizz = () => {
  const [question, setQuestion] = useState(getQuestion());
  const [answersOrder, setAnswersOrder] = useState();
  const [result, setResult] = useState();

  useEffect(() => {
    setAnswersOrder(sortAnswer());
  }, [question]);

  useEffect(() => {
    if (result) {
      setTimeout(() => {
        setQuestion(getQuestion());
        setResult();
      }, 1500);
    }
  }, [result]);

  const getResult = (result) => {
    if (result === question.correctAnswer) {
      setResult("✅ Well done");
    } else {
      setResult(`❌ Wrong answer, it was : ${question.correctAnswer}`);
    }
  };

  return (
    <article className="quizz-container">
      <h3>Let's quizz</h3>
      <h4>{question?.question}</h4>
      <div className="quizz-answer-container">
        {answersOrder &&
          answersOrder.map((order, index) => (
            <Button
              key={index}
              className="quizz-answer-button"
              value={question.answers[order]}
              onClick={(e) => getResult(e.target.value)}
              aria-label={`answer ${question.answers[order]}`}
            >
              {question.answers[order]}
            </Button>
          ))}
      </div>
      <p className="result-text">{result && result}</p>
    </article>
  );
};
