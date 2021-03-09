import { html } from 'lit-html';
import '../fe-notification.js';

export default {
  title: 'Component',
  component: 'fe-notification',
};

function Template({ type, label }) {
  return html`
    <fe-notification type=${type} label=${label}> </fe-notification>
  `;
}

export const Notification = Template.bind({});
Notification.args = {
  type: 'info',
  label: 'Hi, This is the default message',
};
