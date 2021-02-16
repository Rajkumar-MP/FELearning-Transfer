import { html } from 'lit-html';
import '../fe-header.js';

export default {
  title: 'Component',
  component: 'fe-header',
};

function Template({ btnLabel }) {
  return html` <fe-header .btnLabel=${btnLabel}> </fe-header> `;
}

export const Header = Template.bind({});
Header.args = {
  btnLabel: 'Submit',
};
