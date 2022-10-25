import React, { useEffect, useState } from "react";

import "./App.css";
import questionsData from "./questionsData";
import real_dummy_data from "./mock_data/real_dummy_data";
import List from "./components/List/List";
import { addQuestionToLocal, getQuestionData, getSlug } from "./helpers";

function App() {
  // prettier-ignore
  const [questions, setQuestions] = useState({solved:[], examined:[], examineLater:[], inProgress:[]})
  const [inputValue, setInputValue] = useState("");
  const [isLocalMutated, setIsLocalMutated] = useState(false);

  // console.log(questions);

  useEffect(() => {
    const solved = [];
    const examined = [];
    const examineLater = [];
    const inProgress = [];

    const localData = JSON.parse(localStorage.getItem("localQuestions"));

    if (localData) {
      for (const question of localData) {
        if (question.status === "examined") {
          examined.push(question);
        } else if (question.status === "solved") {
          solved.push(question);
        } else if (question.status === "examineLater") {
          examineLater.push(question);
        } else if (question.status === "inProgress") {
          inProgress.push(question);
        } else {
          console.log("Fatal error! Look at App.js");
        }
      }
    } else {
      localStorage.setItem("localQuestions", JSON.stringify([]));
    }
    // @prettier-ignore
    setQuestions({ solved, examined, examineLater, inProgress });
  }, [isLocalMutated]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFocus = (event) => {
    navigator.clipboard
      .readText()
      .then((text) => {
        // console.log('Pasted content: ', text)
        const urlSlug = getSlug(text);
        const questionData = getQuestionData(urlSlug, questionsData);
        if (questionData) {
          addQuestionToLocal(questionData);
          setIsLocalMutated(!isLocalMutated);
          setInputValue("");
        }
      })
      .catch((err) => {
        console.error("Failed to read clipboard contents: ", err);
      });
  };
  // https://leetcode.com/problems/long-pressed-name/
  const handleSubmit = (event) => {
    event.preventDefault();

    const urlSlug = getSlug(inputValue);
    const questionData = getQuestionData(urlSlug, questionsData);
    if (questionData) {
      addQuestionToLocal(questionData);
      setIsLocalMutated(!isLocalMutated);
      setInputValue("");
    }
  };

  const handleChangeStatusTo = (status, displayId) => {
    // console.log('handleChangeStatusTo invoked with parameter: '+ status + '\nand displayId: ' + displayId);
    //
    const localData = JSON.parse(localStorage.getItem("localQuestions"));
    // console.log(localData);
    const selectedQuestion = localData.find((question) => {
      return question.displayId === displayId;
    });
    // console.log(selectedQuestion);
    selectedQuestion.status = status;
    localStorage.setItem("localQuestions", JSON.stringify(localData));
    setIsLocalMutated(!isLocalMutated);
  };

  const handleDummyData = (shouldUseDummy) => {
    if (shouldUseDummy) {
      console.log("Fill dummy data");
      localStorage.setItem("localQuestions", JSON.stringify(real_dummy_data));
    } else {
      console.log("Drop local storage");
      localStorage.clear();
    }
    setIsLocalMutated(!isLocalMutated);
  };

  return (
    <div className="App">
      <div className="Lists">
        <List
          title="Questions Stack"
          questions={questions.inProgress}
          changeStatusHandler={handleChangeStatusTo}
        />
        <List
          title="Solved"
          questions={questions.solved}
          changeStatusHandler={handleChangeStatusTo}
        />
        <List
          title="Examine Later"
          questions={questions.examineLater}
          changeStatusHandler={handleChangeStatusTo}
        />
        <List
          title="Examined"
          questions={questions.examined}
          changeStatusHandler={handleChangeStatusTo}
        />
      </div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          onChange={handleChange}
          onFocus={handleFocus}
          value={inputValue}
          tabIndex={999}
          placeholder="Sadece tab'a basarak ekleyebilirsin.."
        />
        <input type="submit" value="Add" />
      </form>
      <button onClick={() => handleDummyData(1)}>Dummy Data</button>
      <button onClick={() => handleDummyData()}>CE</button>
    </div>
  );
}

export default App;
