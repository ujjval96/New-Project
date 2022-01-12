import React, { useEffect, useState } from "react";
import axios from "axios";
import "./game.css"

const Game = () => {

  const [ques, setQues] = useState("");
  const [input, setInput] = useState("");
  const [ans, setAns] = useState("");
  const [result, setResult] = useState("");

  const loadQuestion = () => {
    axios.get("https://jservice.io/api/random")
    .then((data) => {
      console.log(data.data);
      setQues(data.data[0].question);
      setAns(data.data[0].answer)
    });
  }
  const changeHandler: any = (e: any) => {
    setInput(e.target.value)
  }

  const submitHandler = (e: any) => {
    if (input == ans) {
      setInput("")
      setResult("Correct Answer");
      setTimeout(() => {
        loadQuestion();
      }, 100);
    } else {
      setInput("")
      setResult("In-Correct Answer")
    }
  }
  useEffect(() => {
    loadQuestion()
  }, [])
  return (
    <div>
      <h1>Trivia Game</h1>
      <div className="question-div">
        <h2>Question : - <span>{ques}</span></h2>

      </div>
      <h2>Answer {ans}</h2>
      <input value={input} onChange={(e) => changeHandler(e)} />
      <button onClick={(e) => submitHandler(e)}>Submit</button>
      <h4>Result: {result}</h4>
    </div>
  )
}

export default Game;