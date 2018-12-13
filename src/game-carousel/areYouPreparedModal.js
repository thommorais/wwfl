import Modal from '../components/custom-modal'
import { sendGaEvents } from '../GA-events'

export default function areYouPreparedToPlay() {
  const modal = new Modal()
  const buttons = [].slice.call(document.querySelectorAll('[data-id="prepared-to-play"] .response'))

  buttons.forEach(btn => btn.addEventListener('click', (event) => {
    modal.open('map')
    const { response, question } = event.target.dataset
    sendGaEvents(question, response, 'click_final_answer')
  }))
}
