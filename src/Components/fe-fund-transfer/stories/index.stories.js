import { html } from 'lit-html';
import '../fe-fund-transfer.js';

export default {
  title: 'Component',
  component: 'fe-fund-transfer',
};

function Template() {
  return html`
    <fe-fund-transfer @fund-validation=${ev => console.log(ev.detail)}>
    </fe-fund-transfer>
  `;
}

export const FeFundTransfer = Template.bind({});
