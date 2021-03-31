import { html } from 'lit-html';
import { defineElement } from '../../../utils.js';
import { SampleToggle } from './sample-toggle.js';

defineElement('sample-toggle', SampleToggle);

export default {
  title: 'Component',
  component: 'sample-toggle',
};

function Template() {
  return html` <sample-toggle></sample-toggle> `;
}

export const Toggle = Template.bind({});
