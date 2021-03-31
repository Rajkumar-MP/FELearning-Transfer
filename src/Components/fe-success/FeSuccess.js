import { ScopedElementsMixin, LitElement, css, html } from '@lion/core';

import { localize, LocalizeMixin } from '@lion/localize';
import defaultStyles from '../../FeApp.style.js';
import { FeFooter } from '../fe-footer/FeFooter.js';

export class FeSuccess extends ScopedElementsMixin(LocalizeMixin(LitElement)) {
  static get scopedElements() {
    return {
      'fe-footer': FeFooter,
    };
  }

  static get localizeNamespaces() {
    return [
      { 'fe-success': locale => import(`./translations/${locale}.js`) },
      ...super.localizeNamespaces,
    ];
  }

  home() {
    this.dispatchEvent(new CustomEvent('home-trigger', { bubbles: true }));
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
      <fe-footer
        primary=${localize.msg('fe-success:home')}
        @primary-btn-click=${() => this.home()}
        }
      ></fe-footer>
    `;
  }
}
