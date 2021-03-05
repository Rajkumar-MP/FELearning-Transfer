import { html } from 'lit-html';
import '../LandingPage.js';

export default {
  title: 'Page',
};

function Template() {
  return html` <landing-page> </landing-page> `;
}

export const Landing = Template.bind({});
