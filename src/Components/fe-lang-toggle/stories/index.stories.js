import { html } from 'lit-html';
import '../fe-lang-toggle.js';

export default {
  title: 'Component',
  component: 'fe-lang-toggle',
};

function Template() {
  return html` <fe-lang-toggle> </fe-lang-toggle> `;
}

export const Toggle = Template.bind({});
