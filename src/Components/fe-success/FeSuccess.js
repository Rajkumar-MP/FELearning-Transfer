import { LitElement, html, css } from 'lit-element';
import { localize, LocalizeMixin } from '@lion/localize';
import defaultStyles from '../../FeApp.style.js';

export class FeSuccess extends LocalizeMixin(LitElement) {
  static get localizeNamespaces() {
    return [
      { 'fe-success': locale => import(`./translations/${locale}.js`) },
      ...super.localizeNamespaces,
    ];
  }

  static get styles() {
    return css`
      ${defaultStyles}

      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `;
  }

  render() {
    return html`
      <h1>${localize.msg('fe-success:message')}</h1>
      <fe-footer primary=${localize.msg('fe-success:home')} }></fe-footer>
    `;
  }
}
