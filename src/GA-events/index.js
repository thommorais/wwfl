/* eslint-disable camelcase */
function sendGaEvents(event_category, event_label) {
  // eslint-disable-next-line no-undef
  gtag('event', 'click_any_answer', {
    event_category,
    event_label,
    value: 1
  })
}

export default function gaEvents() {
  [].slice.call(document.querySelectorAll('[data-event]')).forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const { eventcategory, eventlabel } = trigger.dataset
      sendGaEvents(eventcategory, eventlabel)
    })
  })
}
