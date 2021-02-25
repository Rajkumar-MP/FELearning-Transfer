import { LitElement, html, css } from 'lit-element';

export class FeLogin extends LitElement {
  static get properties() {
    return {
      username: { type: String },
      password: { type: String },
    };
  }

  static get styles() {
    return css`
      form {
        width: 100%;
        padding: 20px;
        font-size: 20px;
      }
      input[type='text'] {
        width: 100%;
        padding: 5px;
      }
    `;
  }

  render() {
    return html`
      <h1>Login Details</h1>
      <form>
        <label for="name">Username</label>
        <br />
        <input type="text" name="name" id="username" /><br />
        <br />
        <label for="password">Password</label>
        <br />
        <input type="text" name="name" id="password" />
      </form>
    `;
  }
}
