import { html } from 'lit-html';
import '../fe-login.js';

export default {
  title: 'Component',
  component: 'fe-login',
};

function Template({ title }) {
  return html` <fe-login .title=${title}> </fe-login> `;
}

export const Login = Template.bind({});
Login.args = {
  username: 'username',
  password: 'password',
};
