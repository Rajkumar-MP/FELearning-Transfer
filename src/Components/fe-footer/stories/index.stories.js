import { html } from 'lit-html';
import '../fe-footer.js';

export default {
  title: 'Component',
  component: 'fe-footer',
};

function Template({ primary, secondary }) {
  return html`
    <fe-footer
      .primary=${primary}
      .secondary=${secondary}
      @primary-btn-clicked=${() => console.log('primary clicked')}
      @secondary-btn-clicked=${() => console.log('secondary clicked')}
    >
    </fe-footer>
  `;
}

export const Footer = Template.bind({});
Footer.args = {
  primary: 'back',
  secondary: 'home',
};
