import { html } from 'lit-html';
import { defineElement } from '../../../utils.js';
import { FeSuccess } from '../FeSuccess.js';

defineElement('fe-success', FeSuccess);

export default {
  title: 'Component',
  component: 'fe-success',
};

function Template() {
  return html` <fe-success> </fe-success> `;
}

export const Success = Template.bind({});
