import { html } from 'lit-html';
import '../fe-new-payee.js';

export default {
  title: 'Component',
  component: 'Add-Payee',
};

function Template() {
  return html` <fe-new-payee></fe-new-payee> `;
}

export const NewPayee = Template.bind({});
