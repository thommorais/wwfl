/* eslint-disable camelcase */
export default function handleAnswer({ answerWrpTmp, is_right }, modal, carousel, oxfordLink, answers) {
  const timer = oxfordLink.querySelector('.progress')

  answerWrpTmp.addEventListener('click', () => {
    if (is_right) {
      answerWrpTmp.classList.add('right')
    } else {
      answerWrpTmp.classList.add('wrong')
    }

    answers.classList.add('answered')

    const frames = [{ transform: 'scale3d(0, 1, 1)' }, { transform: 'scale3d(1, 1, 1)' }]
    const progressButton = timer.animate(frames, { duration: 300, easing: 'cubic-bezier(0.5, 0, 0.5, 1)' })

    progressButton.onfinish = () => {
      if (carousel.isEnd) {
        modal.open('prepared-to-play')
      }
      carousel.slideNext()
    }
  })
}
