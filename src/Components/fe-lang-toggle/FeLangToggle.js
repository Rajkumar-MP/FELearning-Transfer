import { LionButton } from '@lion/button';
import { ScopedElementsMixin, LitElement, html, css } from '@lion/core';
import { localize, LocalizeMixin } from '@lion/localize';

import defaultStyles from '../../FeApp.style.js';

export class FeLangToggle extends ScopedElementsMixin(
  LocalizeMixin(LitElement)
) {
  static get scopedElements() {
    return {
      'lion-button': LionButton,
    };
  }

  static get localizeNamespaces() {
    return [
      {
        'fe-lang-toggle': locale =>
          import(`./stories/translations/${locale}.js`),
      },
      ...super.localizeNamespaces,
    ];
  }

  firstUpdated() {
    super.firstUpdated();
    if (localize.locale === 'en-GB') {
      this.shadowRoot.querySelector('#en-GB').classList.add('selected');
    } else {
      this.shadowRoot.querySelector('#nl-NL').classList.add('selected');
    }
  }

  toggleLanguage(e, locale) {
    localize.locale = locale;

    const buttons = this.shadowRoot.querySelectorAll(
      this.getScopedTagName('lion-button', this.scopedElements)
    );
    buttons.forEach(button => {
      button.classList.remove('selected');
    });
    e.target.classList.add('selected');
  }

  static get styles() {
    return css`
      ${defaultStyles}
      div {
        display: flex;
        justify-content: flex-end;
      }

      .button:hover {
        background-color: #eea2ad;
      }

      .selected {
        border: 2px double #cc2b5e;
        background-color: #eea2ad;
      }
    `;
  }

  render() {
    return html`
      <div id="mydiv">
        ${this.renderButton({
          id: 'en-GB',
          callbackValue: 'en-GB',
          label: 'EN',
        })}
        ${this.renderButton({
          id: 'nl-NL',
          callbackValue: 'nl-NL',
          label: 'NL',
        })}
      </div>
    `;
  }

  renderButton({ id, callbackValue, label }) {
    return html`
      <lion-button
        class="button"
        id="${id}"
        @click=${e => this.toggleLanguage(e, callbackValue)}
        >${label}</lion-button
      >
    `;
  }
}
