import React, { useState } from "react";
import "./questions.css";
import ErrorMessage from "../Error/Error";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Questions = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  score,
  setScore,
}) => {
  const navigate = useNavigate();

  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  const handleSelect = (i) => {
    if (selected === i && selected === correct) return "select";
    else if (selected === i && selected !== correct) return "wrong";
    else if (i === correct) return "select";
    return ""; // Return an empty string when no selection has been made
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) {
      setScore(score + 1);
    }
    setError(false);
  };

  const handleNext = () => {
    if (currQues > 8) {
      navigate("/result");
    } else if (selected) {
      setCurrQues(currQues + 1);
    } else{
        setError("Please select an option");
    }
  };
  const handleQuit = () => {
    if (window.confirm("Are you sure you want to quit?")) {
      navigate("/");
    }
  }; 
  return (
    <div className="question">
      <h1>Question {currQues + 1}</h1>
      <div className="singleQuestion">
        <h2>{questions[currQues].question}</h2>
        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((i) => (
              <button
                type="button"
                onClick={() => handleCheck(i)} // Fixed function call
                className={`singleOption ${selected && handleSelect(i)}`} // Dynamically applying classes
                key={i}
                disabled={!!selected} // Disable buttons after selecting an option
              >
                {i}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: "185px" }}
            href="/"
            onClick={handleQuit}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: "185px" }}
            href="/"
            onClick={handleNext}
          >
            Next Question
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Questions;
