import { html } from 'lit-html';
import '../fe-login.js';

export default {
  title: 'Component',
  component: 'fe-login',
};

function Template({ username, password }) {
  return html`
    <fe-login .username:${username} .password ${password}></fe-login>
  `;
}

export const Login = Template.bind({});
Login.args = {
  username: 'username',
  password: 'password',
};
