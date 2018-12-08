export default function handleAnswer(answer, carousel) {
  answer.addEventListener('click', (event) => {
    setTimeout(() => carousel.slideNext(), 10)
    event.preventDefault()
  })
}
