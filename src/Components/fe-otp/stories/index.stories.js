import { html } from 'lit-html';
import '../fe-otp.js';

export default {
  title: 'Component',
  component: 'fe-otp',
};

function Template() {
  return html`
    <fe-otp @input-validation=${ev => console.log(ev.detail)}> </fe-otp>
  `;
}

export const Otp = Template.bind({});
