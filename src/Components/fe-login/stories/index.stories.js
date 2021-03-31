import { html } from 'lit-html';
import { defineElement } from '../../../utils.js';
import { FeLogin } from '../FeLogin.js';

defineElement('fe-login', FeLogin);

export default {
  title: 'Component',
  component: 'fe-login',
};

function Template() {
  return html`
    <fe-login @login-details=${ev => console.log(ev.detail)}> </fe-login>
  `;
}

export const Login = Template.bind({});
