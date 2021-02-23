import { LitElement, html, css } from 'lit-element';
import { localize, LocalizeMixin } from '@lion/localize';
import '@lion/button';

export class FeLangToggle extends LocalizeMixin(LitElement) {
  static get localizeNamespaces() {
    return [
      { 'fe-lang-toggle': locale => import(`./translations/${locale}.js`) },
      ...super.localizeNamespaces,
    ];
  }

  static get properties() {
    return {};
  }

  static langChng(e) {
    e.preventDefault();
    if (e.target.id === 'btn-en' && e.target.className === 'over') {
      localize.locale = 'en-GB';
    } else if (e.target.id === 'btn-nl' && e.target.className === 'over') {
      e.target.className = 'active';
      localize.locale = 'nl-NL';
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

    
       .btn:hover
       {
          background-color:#dfb5e8;
        }

        .btn:active{
          background-color:#c146db;
        }
        
        
       

       `;
  }

  render() {
    return html`
      <div id="mydiv">
        <lion-button
          class="btn"
          id="btn-en"
          @click=${e => FeLangToggle.langChng(e)}
          >EN</lion-button
        >
        <lion-button
          class="btn"
          id="btn-nl"
          @click=${e => FeLangToggle.langChng(e)}
          >NL</lion-button
        >
      </div>
    `;
  }
}
