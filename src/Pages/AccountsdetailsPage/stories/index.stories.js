import { html } from 'lit-html';
import '../AccountdetailsPage.js';


//https://felearning-api.herokuapp.com/accountinfo/925548553975232

export default {
  title: 'Page',
};

 
function Template() {
 
  return html` <account-details-page> </account-details-page> `;
}

export const Accountdetails = Template.bind({});
