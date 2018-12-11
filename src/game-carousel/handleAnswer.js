/* eslint-disable camelcase */
const frames = [{ transform: 'scale3d(0, 1, 1)' }, { transform: 'scale3d(1, 1, 1)' }]

function isTheRightOne(answer, answers) {
  const { isRight } = answers.find(item => item.title === answer)
  return isRight
}

export default function handleAnswer({ answerElements, answersData }, modal, carousel, oxfordLink, answersTpl, question) {
  const timer = oxfordLink.querySelector('.progress')
  answerElements.forEach(({ answerWrpTmp }) => {
    const { answer } = answerWrpTmp.dataset

    answerWrpTmp.addEventListener('click', () => {
      if (isTheRightOne(answer, answersData)) {
        answerWrpTmp.classList.add('right')
      } else {
        answerWrpTmp.classList.add('wrong')
      }

      answersTpl.classList.add('answered')

      // eslint-disable-next-line no-undef
      gtag('event', 'click_any_answer', {
        event_category : question,
        event_label    : answer,
        value          : 1
      })

      const progressButton = timer.animate(frames, { duration: 1000, easing: 'cubic-bezier(0.5, 0, 0.5, 1)' })

      progressButton.onfinish = () => {
        if (carousel.isEnd) {
          modal.open('prepared-to-play')
        }
        carousel.slideNext()
      }
    })
  })
}
