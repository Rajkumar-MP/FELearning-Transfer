import { html } from 'lit-html';
import '../TransactionPage.js';

export default {
  title: 'Page',
  component: 'transaction-page',
};

function Template() {
  return html` <transaction-page></transaction-page> `;
}

export const TransactionPage = Template.bind({});
