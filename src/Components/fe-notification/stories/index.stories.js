import { html } from 'lit-html';
import '../fe-notification.js';

export default {
  title: 'Component',
  component: 'fe-notification',
};

function Template({ label, message }) {
  return html`
    <fe-notification label=${label} message=${message}> </fe-notification>
  `;
}

export const Notification = Template.bind({});
Notification.args = {
  label: 'info',
  message: 'Hi, This is the default message',
};
