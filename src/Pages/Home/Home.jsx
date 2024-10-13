import React from "react";
import "./home.css";
import { Button, MenuItem, TextField } from "@mui/material";
import Categories from "../../Data/Categories";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/Error/Error";

const Home = ({ name, setName, fetchQuestions }) => {
  const navigate = useNavigate();
  const [category, setCategory] = React.useState("");
  const [difficulty, setDifficulty] = React.useState("");
  const [error, setError] = React.useState(false);

  const handleSubmit=()=>{
   
    if(!category || !difficulty || !name){
      setError(true);
      return;
    }
    else{
      setError(false);
      // Navigate to the quiz page with the selected category and difficulty
      fetchQuestions(category, difficulty)
      navigate("/quiz")
    }

  }
  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: "30px" }}>Quiz Settings</span>
        {error && <ErrorMessage>Please Fill all fields</ErrorMessage>}
        <TextField
          label="Enter your name"
          variant="outlined"
          className="inputField_Size"
          style={{ marginBottom: "25px", width: "100%" }}
          onChange={(e) => setName(e.target.value)}
        />

        <div>
          <TextField
            select
            label="Select category"
            variant="outlined"
            style={{ marginBottom: "30px", width: "100%" }}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          <TextField
            select
            label="Select Difficulty"
            variant="outlined"
            style={{ marginBottom: "30px", width: "100%" }}
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
        </div>
        <div style={{ width: "100%" }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: "100%" }}
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
      <img
        src="../../src/assets/images/quiz.svg"
        className="banner"
        alt="quiz img"
      />
    </div>
  );
};

export default Home;
