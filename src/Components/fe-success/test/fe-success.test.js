import { html, fixture, expect } from '@open-wc/testing';

import '../fe-success.js';

describe('FeSuccess', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<fe-success></fe-success>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot.querySelector('h1');
    expect(h1).to.exist;
    expect(h1.textContent).to.equal(
      'TRANSACTION COMPLETED' || 'TRANSACTIE VOLTOOID'
    );
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
