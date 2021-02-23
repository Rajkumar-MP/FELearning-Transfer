import { html } from 'lit-html';
import './sample-toggle.js';

export default {
  title: 'Component',
  component: 'sample-toggle',
};

function Template() {
  return html` <sample-toggle></sample-toggle> `;
}

export const Toggle = Template.bind({});
