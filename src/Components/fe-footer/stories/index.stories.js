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
      @primary-btn-click=${() => console.log('primary clicked')}
      @secondary-btn-click=${() => console.log('secondary clicked')}
    >
    </fe-footer>
  `;
}

export const Footer = Template.bind({});
Footer.args = {
  primary: 'back',
  secondary: 'home',
};
