import { html } from 'lit-html';
import { defineElement } from '../../../utils.js';
import { FeNewPayee } from '../FeNewPayee.js';

defineElement('fe-new-payee', FeNewPayee);
export default {
  title: 'Component',
  component: 'Add-Payee',
};

function Template() {
  return html`
    <fe-new-payee
      @input-validation=${ev => console.log(ev.detail)}
    ></fe-new-payee>
  `;
}

export const NewPayee = Template.bind({});
