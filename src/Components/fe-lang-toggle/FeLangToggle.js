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

  static get properties() {
    return {};
  }

  langChng(e) {
    e.preventDefault();
    if (e.target.id === 'btn-en') {
      localize.locale = 'en-GB';

      this.shadowRoot
        .querySelector('#btn-en')
        .classList.toggle('selected', true);
      this.shadowRoot
        .querySelector('#btn-nl')
        .classList.toggle('selected', false);
    } else if (e.target.id === 'btn-nl') {
      localize.locale = 'nl-NL';
      this.shadowRoot
        .querySelector('#btn-nl')
        .classList.toggle('selected', true);
      this.shadowRoot
        .querySelector('#btn-en')
        .classList.toggle('selected', false);
    }
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

        .btn:hover,
        {
          color:#000;
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
          class="btn selected"
          id="btn-en"
          @click=${e => this.langChng(e)}
          >EN</lion-button
        >
        <lion-button class="btn" id="btn-nl" @click=${e => this.langChng(e)}
          >NL</lion-button
        >
      </div>
    `;
  }
}
