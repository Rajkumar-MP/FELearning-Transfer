import { html } from 'lit-html';
import { defineElement } from '../../../utils.js';
import { AccountdetailsPage } from '../AccountdetailsPage.js';

defineElement('account-details-page', AccountdetailsPage);

export default {
  title: 'Page',
};

function Template() {
  return html`
    <account-details-page .loginid=${'925548553975232'}> </account-details-page>
  `;
}

export const Accountdetails = Template.bind({});
