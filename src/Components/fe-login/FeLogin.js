import { LitElement, html, css } from 'lit-element';
import '@lion/form/lion-form';
import '@lion/input/lion-input';
import { localize, LocalizeMixin } from '@lion/localize';

export class FeLogin extends LocalizeMixin(LitElement) {
  static get localizeNamespaces() {
    return [
      { 'fe-login': locale => import(`./translations/${locale}.js`) },
      ...super.localizeNamespaces,
    ];
  }

  static get styles() {
    return css`
      form {
        width: 600px;
        padding: 20px;
        font-size: 20px;
      }

      h2 {
        margin: 20px;
      }
    `;
  }

  render() {
    return html`
    <h2>Login Details</h2>
    <lion-form>
    <form>
    <lion-input name="username" id="username"
     label=${localize.msg('fe-login:username')}></lion-input><br>
    <lion-input name="password" id="password"
     label=${localize.msg('fe-login:password')}></lion-input> 
    </lion-input>
    </form>
    </lion-form>
  
    `;
  }
}
