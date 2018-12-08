import view from './template.html'
import { html } from '../helper'
import './styles.pcss'

export default class InteractiveGame extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' });
  }

  static template() {
    return html`
      ${view}
    `
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

const template = document.createElement('template')
template.innerHTML = InteractiveGame.template()
