import { html, fixture, expect } from '@open-wc/testing';

import '../fe-transaction-review.js';

describe('FeTransactionReview', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(
      html`<fe-transaction-review> </fe-transaction-review>`
    );
  });

  it('renders a from label', () => {
    element.from = '123456';
    const from = element.shadowRoot.querySelector('#from');
    expect(from).to.exist;
  });

  it('renders a to label', () => {
    element.to = '123456';
    const to = element.shadowRoot.querySelector('#to');
    expect(to).to.exist;
  });

  it('renders a amount label', () => {
    element.amount = 5000;
    const amount = element.shadowRoot.querySelector('#amount');
    expect(amount).to.exist;
  });

  it('renders a remarks label', () => {
    element.remarks = 'Fund Transfer';
    const remarks = element.shadowRoot.querySelector('#remarks');
    expect(remarks).to.exist;
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
