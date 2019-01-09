/* eslint-disable camelcase */
export function sendGaEvents(event_category, event_label, eventName = '') {
  // eslint-disable-next-line no-undef
  gtag('event', eventName, {
    event_category,
    event_label,
    value: 1
  })

  console.table(event_category, event_label)
}

export default function gaEvents() {
  [].slice.call(document.querySelectorAll('[data-event]')).forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const { eventcategory, eventlabel } = trigger.dataset
      sendGaEvents(eventcategory, eventlabel, 'click-events')
    })
  })
}
