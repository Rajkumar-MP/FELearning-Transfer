import { html, fixture, expect } from '@open-wc/testing';

import '../fe-card.js';

describe('FeCard', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<fe-card></fe-card>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot.querySelector('h1');
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('title');
  });

  it('renders a h2', () => {
    const h2 = element.shadowRoot.querySelector('h2');
    expect(h2).to.exist;
    expect(h2.textContent).to.equal('content');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
