import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./result.css"

const Result = ({ name, score }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, [name, navigate]);
  return (
    <div className="result">
      <span className="title">Final Score: {score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: "20px"}}
        href="/"

      >Go to Home Page</Button>
    </div>
  );
};

export default Result;
