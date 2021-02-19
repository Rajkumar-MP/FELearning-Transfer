import { LitElement, html, css } from 'lit-element';
import { localize, LocalizeMixin } from '@lion/localize';

export class FeLangToggle extends LocalizeMixin(LitElement) {
  static get localizeNamespaces() {
    return [
      { 'fe-lang-toggle': locale => import(`./translations/${locale}.js`) },
      ...super.localizeNamespaces,
    ];
  }

  static get properties() {
    return {
      EngBtn: { type: String },
      DutBtn: { type: String },
    };
  }

  constructor() {
    super();
    this.EngBtn = 'EN';
    this.DutBtn = 'NL';
  }

  static get styles() {
    return css`
        div{
        display: flex;
        justify-content:flex-end;
            }
  
        button {
        background-color:#fff;
        color:#000;
        border-radius;
        border-radius: 5px;
        padding: 10px;
        justify-content:right;
        }

       button:hover {
        background:#edbae5;
        }
    button:focus{
        background: #b52ed1;
        }
        

       `;
  }

  render() {
    return html`
      <main>
        <h1>${localize.msg('fe-lang-toggle:foo')}</h1>

        <div>
          <button class="btn" id="btn-en" @click=${e => this.langChng(e)}>
            ${this.EngBtn}
          </button>
          <button class="btn" id="btn-nl" @click=${e => this.langChng(e)}>
            ${this.DutBtn}
          </button>
        </div>
      </main>
    `;
  }

  static langChng(e) {
    if (e.target.id === 'btn-en') {
      localize.locale = 'en-GB';
    } else if (e.target.id === 'btn-nl') {
      localize.locale = 'nl-NL';
    }
  }
}
