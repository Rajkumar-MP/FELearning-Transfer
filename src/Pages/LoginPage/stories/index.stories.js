import { html } from 'lit-html';
import '../LoginPage.js';

export default {
  title: 'Page',
  component: 'login-page',
};

function Template() {
  return html` <login-page> </login-page> `;
}

export const LoginPage = Template.bind({});
