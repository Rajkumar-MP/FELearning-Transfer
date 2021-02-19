import { html } from 'lit-html';
import '../fe-lang-toggle.js';

export default {
  title: 'Component',
  component: 'fe-lang-toggle',
};

function Template({ EngBtn, DutBtn }) {
  return html`
    <fe-lang-toggle .EngBtn=${EngBtn} .DutBtn=${DutBtn}> </fe-lang-toggle>
  `;
}

export const Toggle = Template.bind({});
Toggle.args = {
  EngBtn: 'EN',
  DutBtn: 'NL',
};
