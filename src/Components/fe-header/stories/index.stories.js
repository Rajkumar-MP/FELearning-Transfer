import { html } from 'lit-html';
import { defineElement } from '../../../utils.js';
import { FeHeader } from '../FeHeader.js';

defineElement('fe-header', FeHeader);

export default {
  title: 'Component',
  component: 'fe-header',
};

function Template({ title }) {
  return html` <fe-header .title=${title}> </fe-header> `;
}

export const Header = Template.bind({});
Header.args = {
  title: 'ING Bank',
};
