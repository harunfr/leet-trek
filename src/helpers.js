export function getSlug(url) {
  let slug = ''
  for (let i = 0; i < url.length; i++) {
    if (url[i] === '.') {
      slug = url.slice(i + 14, url.length - 1)
      return slug
    }
  }
  return false
}

export function getQuestionData(urlSlug, questionsData) {
  let questionData = {}

  questionData = questionsData.find((question) => {
    return question.urlSlug === urlSlug
  })

  const localData = JSON.parse(localStorage.getItem('localQuestions'))
  const isLocalQuestion = localData.some((question) => {
    return question.urlSlug === urlSlug
  })

  if (questionData && !isLocalQuestion) {
    return questionData
  } else {
    console.log(
      `You have already added this question before.
      Or this is bad input.
      Example input: https://leetcode.com/problems/two-sum/`
    )
  }
}

export function addQuestionToLocal(questionData) {
  const newQuestion = {
    ...questionData,
    status: 'inProgress',
  }
  let localData = JSON.parse(localStorage.getItem('localQuestions'))
  localData.push(newQuestion)
  localStorage.setItem('localQuestions', JSON.stringify(localData))
}

export function synchLocal(input) {
  // turning string to json
  const userData = JSON.parse(input)
  // validating input
  if (userData.stat_status_pairs === undefined) {
    console.log(
      'invalid data!!!\ngo to https://leetcode.com/api/problems/all/\nand copy data'
    )
    return
  }

  const localQuestions = JSON.parse(localStorage.getItem('localQuestions'))
  const localQuestionsMap = {}
  const userQuestions = userData.stat_status_pairs
  const statusMap = {
    ac: 'solved',
    notac: 'examineLater',
  }

  // prepare hashmap of local questions to faster lookup
  for (let i = 0; i < localQuestions.length; i++) {
    localQuestionsMap[localQuestions[i].displayId] = i
  }

  // if user has no relation with question, skip next iteration stepx
  for (let i = 0; i < userQuestions.length; i++) {
    if (!userQuestions[i].status) {
      continue
    }

    const question = userQuestions[i]
    const questionStats = question.stat
    const questionId = questionStats.frontend_question_id
    const isFoundInLocal = localQuestionsMap.hasOwnProperty(questionId)

    // if there is same question in local, only change its status
    if (isFoundInLocal) {
      const localQuestionIndex = localQuestionsMap[questionId]
      console.log({ localQuestionIndex, question })
      localQuestions[localQuestionIndex].status = statusMap[question.status]
    } else {
      const newQuestion = {
        urlSlug: questionStats.question__title_slug,
        displayId: questionId,
        difficulty: question.difficulty.level,
        status: statusMap[question.status],
      }
      localQuestions.push(newQuestion)
    }
  }

  localStorage.setItem('localQuestions', JSON.stringify(localQuestions))
}
