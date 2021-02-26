import { LitElement, html, css } from 'lit-element';
import '@lion/form/lion-form';
import '@lion/input/lion-input';

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
        width: 600px;
        padding: 20px;
        font-size: 20px;
      }

      h1 {
        font-size: 20px;
        margin: 20px;
      }
    `;
  }

  render() {
    return html`
    <h1>Login Details</h1>
    <lion-form>
    <form>
    <lion-input name="username" id="username" label="Username"></lion-input><br>
    <lion-input name="password"  id="password" label="Password"></lion-input> 
    
    </lion-input>
    </form>
    </lion-form>
  
    `;
  }
}
