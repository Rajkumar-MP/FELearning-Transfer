import { html } from 'lit-html';
import '../fe-success.js';

export default {
  title: 'Component',
  component: 'fe-success',
};

function Template() {
  return html` <fe-success> </fe-success> `;
}

export const Success = Template.bind({});
