import { html } from 'lit-html';
import '../AccountdetailsPage.js';

export default {
  title: 'Page',
};

function Template() {
  return html`
    <account-details-page .loginid=${'925548553975232'}> </account-details-page>
  `;
}

export const Accountdetails = Template.bind({});
