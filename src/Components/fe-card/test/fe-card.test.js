import { html, fixture, expect } from '@open-wc/testing';

import '../fe-card.js';

describe('FeCard', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<fe-card></fe-card>`);
  });

  it('render a h1', () => {
    const h1 = element.shadowRoot.querySelector('h1');
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('Title');
    it('renders a h3', () => {
      const h3 = element.shadowRoot.querySelector('h3');
      expect(h3).to.exist;
      expect(h3.textContent).to.equal('Content');
    });
  });

  xit('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
