import { LitElement, html, css } from 'lit-element';
import '@lion/form/lion-form';
import '@lion/input/lion-input';
import '@lion/button/lion-button';
import { LocalizeMixin } from '@lion/localize';
import { Required, MinLength } from '@lion/form-core';

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
          <lion-input
            name="user_name"
            label="Username"
            .validators="${[
              new Required(null, { getMessage: () => 'Please Enter Username' }),
              new MinLength(8, {
                getMessage: () => 'Minimu 8 Characters are required',
              }),
            ]}"
          ></lion-input
          ><br />
          <lion-input
            name="password"
            label="Password"
            .validators="${[
              new Required(null, { getMessage: () => 'Please Enter Password' }),
              new MinLength(8),
            ]}"
          ></lion-input
          ><br />
          <lion-button raised>Submit</lion-button>
        </form>
      </lion-form>
    `;
  }
}
