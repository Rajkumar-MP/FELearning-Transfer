import { html } from 'lit-html';
import '../LoginPage.js';

export default {
  title: 'Page',
  component: 'login-page',
};

function Template() {
  return html`
    <login-page @customer-id=${ev => console.log(ev.detail)}> </login-page>
  `;
}

export const LoginPage = Template.bind({});
