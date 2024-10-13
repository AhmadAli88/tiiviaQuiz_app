import React, { useEffect, useState } from "react";
import "./quiz.css";
import { CircularProgress } from "@mui/material";
import Questions from "../../components/Questions/Questions";

const Quiz = ({ name, score, questions, setScore, setQuestions }) => {
  const [options, setOptions] = useState("");
  const [currQues, setCurrQues] = useState(0);
  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    console.log("questions", questions);
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [questions, currQues]);
  console.log("options", options);
  return (
    <div className="quiz">
      <span>Welcome, {name}</span>
      {questions ? (
        <>
          <div className="quizInfo">
            <span>{questions[currQues].category}</span>
            <span>Score : {score}</span>
          </div>
          <Questions
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues].correct_answer}
            score={score}
            setScore={setScore}
           

          />
        </>
      ) : (
        <CircularProgress
          style={{
            margin: "100px",
          }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
};

export default Quiz;
