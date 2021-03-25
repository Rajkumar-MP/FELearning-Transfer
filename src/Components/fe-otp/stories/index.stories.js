import { html } from 'lit-html';
import '../fe-otp.js';

export default {
  title: 'Component',
  component: 'fe-otp',
};

function Template() {
  return html`
    <fe-otp @complete=${() => console.log('Event completed')}> </fe-otp>
  `;
}

export const Otp = Template.bind({});
