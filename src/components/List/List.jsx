import React from "react";

import { ReactComponent as AddToExamineIcon } from "../../images/to_examine.svg";
import { ReactComponent as AddToExaminedIcon } from "../../images/to_examined.svg";
import { ReactComponent as AddToSolvedIcon } from "../../images/to_solved.svg";

import "./List.css";
import Question from "../Question/Question";

function List(props) {
  const { title, questions, changeStatusHandler } = props;
  let listIcon;
  if (title === "Solved") {
    listIcon = <AddToSolvedIcon width={22} height={22} />;
  } else if (title === "Examine Later") {
    listIcon = <AddToExamineIcon width={22} height={22} />;
  } else if (title === "Examined") {
    listIcon = <AddToExaminedIcon width={22} height={22} />;
  }

  return (
    <div className="List">
      <h4 className="title">
        {listIcon} {title}
      </h4>
      <div className="questions">
        {questions?.map(({ urlSlug, displayId, difficulty, status }, idx) => {
          return (
            <Question
              key={idx}
              urlSlug={urlSlug}
              displayId={displayId}
              difficulty={difficulty}
              status={status}
              changeStatusTo={changeStatusHandler}
            />
          );
        })}
      </div>
    </div>
  );
}

export default List;
