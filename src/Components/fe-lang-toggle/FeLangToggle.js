import { LitElement, html, css } from 'lit-element';
import { localize, LocalizeMixin } from '@lion/localize';
import '@lion/button';

export class FeLangToggle extends LocalizeMixin(LitElement) {
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

  static get properties() {
    return {};
  }

  toggleLanguage(locale) {
    localize.locale = locale;
    const buttons = this.shadowRoot.querySelectorAll('lion-button');
    buttons.forEach(button => {
      button.classList.remove('selected');
    });
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        button.classList.add('selected');
      });
    });
  }

  static get styles() {
    return css`
        div{
        display: flex;
        justify-content:flex-end;
            }
  
        .btn {
        background-color:#fff;
        color:#000;
        border-radius;
        border-radius: 5px;
        padding: 10px;
        justify-content:right;
        }

        .btn:hover
        {
          background-color:#eea2ad;
        }

        .selected {
          border: 2px double #cc2b5e;
        }
       `;
  }

  render() {
    return html`
      <div id="mydiv">
        <lion-button
          class="btn"
          id="en-GB"
          @click=${() => this.toggleLanguage('en-GB')}
          >EN</lion-button
        >
        <lion-button
          class="btn"
          id="nl-NL"
          @click=${() => this.toggleLanguage('nl-NL')}
          >NL</lion-button
        >
      </div>
    `;
  }
}
