export function getSlug(url) {
  let slug = "";
  for (let i = 0; i < url.length; i++) {
    if (url[i] === ".") {
      slug = url.slice(i + 14, url.length - 1);
      return slug;
    }
  }
  return false;
}

export function getQuestionData(urlSlug, questionsData) {
  let questionData = {};

  questionData = questionsData.find((question) => {
    return question.urlSlug === urlSlug;
  });

  const localData = JSON.parse(localStorage.getItem("localQuestions"));
  const isLocalQuestion = localData.some((question) => {
    return question.urlSlug === urlSlug;
  });

  if (questionData && !isLocalQuestion) {
    return questionData;
  } else {
    console.log(
      "You have already added this question before.\nOr this is bad input.\nExample input: https://leetcode.com/problems/two-sum/"
    );
  }
}

export function addQuestionToLocal(questionData) {
  const newQuestion = {
    ...questionData,
    status: "inProgress",
  };
  let localData = JSON.parse(localStorage.getItem("localQuestions"));
  localData.push(newQuestion);
  localStorage.setItem("localQuestions", JSON.stringify(localData));
}
