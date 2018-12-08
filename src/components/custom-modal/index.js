import './styles.pcss'
import view from './template.html'
import { html } from '../helper'

export default class ZyngaModal extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' });
  }

  static template() {
    return html`${view}`
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

const template = document.createElement('template')
template.innerHTML = ZyngaModal.template()
