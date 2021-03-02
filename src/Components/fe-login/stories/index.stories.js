import { html } from 'lit-html';
import '../fe-login.js';

export default {
  title: 'Component',
  component: 'fe-login',
};

function Template({}) {
  return html` <fe-login  @input-validation = ${(ev) => console.log(ev.detail)}> </fe-login> `;

}


export const Login = Template.bind({});
