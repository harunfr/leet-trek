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
  if (!urlSlug) {
    return;
  } else {
    questionData = questionsData.find((question) => {
      return question.urlSlug === urlSlug;
    });
  }
  return questionData;
}

export function addQuestionToLocal(questionData) {
  const newQuestion = {
    ...questionData,
    status: "inProgress",
  };

  let localData = JSON.parse(localStorage.getItem("localQuestions"));

  // handle no localData
  if (localData === null) {
    localStorage.setItem("localQuestions", JSON.stringify([]));
    console.log("local storage initialized...");
    localData = [];
  }

  localData.push(newQuestion);

  localStorage.setItem("localQuestions", JSON.stringify(localData));
}
