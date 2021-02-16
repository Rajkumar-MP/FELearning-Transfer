import { html, fixture, expect } from '@open-wc/testing';

import '../src/fe-app.js';

describe('FeApp', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<fe-app></fe-app>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot.querySelector('h1');
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('Bank Transfer Application');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
