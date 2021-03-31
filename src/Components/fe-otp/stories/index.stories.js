import { html } from 'lit-html';
import { defineElement } from '../../../utils.js';
import { FeOtp } from '../FeOtp.js';

defineElement('fe-otp', FeOtp);

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
