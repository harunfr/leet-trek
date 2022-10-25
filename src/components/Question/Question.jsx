import React from "react";
import { ReactComponent as AddToExamineIcon } from "../../images/to_examine.svg";
import { ReactComponent as AddToExaminedIcon } from "../../images/to_examined.svg";
import { ReactComponent as AddToSolvedIcon } from "../../images/to_solved.svg";

import "./Question.css";
const leetBaseUrl = "https://leetcode.com/problems/";

function Question(props) {
  const { urlSlug, displayId, difficulty, status, changeStatusTo } = props;
  // console.log(urlSlug)
  const title =
    displayId +
    " " +
    urlSlug
      .split("-")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");

  return (
    <div className="question">
      <div
        className={`question-body ${
          difficulty === 1 ? "easy" : difficulty === 2 ? "medium" : "hard"
        }`}
      >
        <a
          href={`${leetBaseUrl}${urlSlug}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      </div>
      <div className="question-icons">
        {status === "examined" ? (
          <div onClick={() => changeStatusTo("solved", displayId)}>
            <AddToSolvedIcon height={20} width={20} />
          </div>
        ) : status === "examineLater" ? (
          <>
            <div onClick={() => changeStatusTo("solved", displayId)}>
              <AddToSolvedIcon height={20} width={20} />
            </div>
            <div onClick={() => changeStatusTo("examined", displayId)}>
              <AddToExaminedIcon height={20} width={20} />
            </div>
          </>
        ) : status === "inProgress" ? (
          <>
            <div onClick={() => changeStatusTo("solved", displayId)}>
              <AddToSolvedIcon height={20} width={20} />
            </div>
            <div onClick={() => changeStatusTo("examineLater", displayId)}>
              <AddToExamineIcon height={20} width={20} />
            </div>
            <div onClick={() => changeStatusTo("examined", displayId)}>
              <AddToExaminedIcon height={20} width={20} />
            </div>
          </>
        ) : status === "solved" ? null : (
          <div>fatal error</div>
        )}
      </div>
    </div>
  );
}

export default Question;
/*
onClick={() => changeStatusTo('solved')}
onClick={() => changeStatusTo('examined')}
onClick={() => changeStatusTo('examineLater')}
onClick={() => changeStatusTo('inProgress')}
<AddToExaminedIcon height={20} width={20}/>



*/
