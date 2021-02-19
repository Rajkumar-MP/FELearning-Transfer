import { html } from 'lit-html';
import '../fe-header.js';

export default {
  title: 'Component',
  component: 'fe-header',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title , backgroundColor }) {
  return html` <fe-header .title=${title} style="--fe-header-background-color: ${backgroundColor || 'orange'}" > </fe-header> `;
}

export const Header = Template.bind({});
Header.args = {
  
  title: 'ING Bank'
};
