import { html } from 'lit-html';
import '../TransactionPage.js';

export default {
  title: 'Page',
  component: 'transaction-page',
};

function Template() {
  return html`
    <transaction-page .loginid=${'925548553975232'}></transaction-page>
  `;
}

export const TransactionPage = Template.bind({});
