import { html } from 'lit-html';
import '../src/fe-app.js';

export default {
  title: 'FeApp',
  component: 'fe-app',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <fe-app
      style="--fe-app-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </fe-app>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
