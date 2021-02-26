import { html, fixture, expect } from '@open-wc/testing';

import '../fe-transaction-review.js';

describe('FeTransactionReview', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(
      html`<fe-transaction-review> </fe-transaction-review>`
    );
  });

  it('renders a heading', () => {
    const h3 = element.shadowRoot.querySelector('h3');
    expect(h3).to.exist;
    expect(h3.textContent).to.equal('Transaction Details');
  });

  it('renders a from label', () => {
    const from = element.shadowRoot.querySelector('#from');
    expect(from).to.exist;
  });

  it('renders a to label', () => {
    const to = element.shadowRoot.querySelector('#to');
    expect(to).to.exist;
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
