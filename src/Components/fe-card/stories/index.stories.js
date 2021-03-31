import { html } from 'lit-html';
import { defineElement } from '../../../utils.js';
import { FeCard } from '../FeCard.js';

defineElement('fe-card', FeCard);

export default {
  title: 'Component',
  component: 'fe-card',
};

function Template({ title, content }) {
  return html` <fe-card .title=${title} .content=${content}> </fe-card> `;
}

export const Card = Template.bind({});
Card.args = {
  title: 'label',
  content: 'footer',
};
