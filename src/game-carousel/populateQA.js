/* eslint-disable camelcase */
import handleAnswer from './handleAnswer'

export default function populateQA(arr, game, modal) {
  const questionTpl = document.querySelector('#question')
  const answerTpl = document.querySelector('#answer')
  const linkTpl = document.querySelector('#oxford-link')
  let theRightOne = null

  return arr.map(({ title, zynga_question_options, dictionary_link }) => {
    const cloneQuestion = document.importNode(questionTpl.content, true)
    const titleQuestion = cloneQuestion.querySelector('.question')
    const answersTpl = cloneQuestion.querySelector('.answers')
    const question = title.rendered
    titleQuestion.innerText = question

    const cloneLink = document.importNode(linkTpl.content, true)
    const a = cloneLink.querySelector('.oxford-explains-btn')
    a.href = dictionary_link

    zynga_question_options.forEach((data) => {
      const { is_right } = data
      const cloneAnswer = document.importNode(answerTpl.content, true)
      const answerWrpTmp = cloneAnswer.querySelector('.answer')

      answerWrpTmp.style.setProperty('--size', `${Math.floor(Math.random() * 99) + 1}%`)

      if (is_right) {
        theRightOne = answerWrpTmp
      }

      const titleAnswerTmp = cloneAnswer.querySelector('h6')
      const countAnswerTmp = cloneAnswer.querySelector('.count')
      const answer = data.title
      titleAnswerTmp.innerText = answer
      countAnswerTmp.innerText = data.total_events
      answersTpl.appendChild(cloneAnswer)
      handleAnswer(
        {
          answerWrpTmp,
          is_right,
          question,
          answer
        },
        modal,
        game,
        a,
        answersTpl,
        theRightOne
      )
    })

    answersTpl.appendChild(cloneLink)

    return cloneQuestion
  })
}
