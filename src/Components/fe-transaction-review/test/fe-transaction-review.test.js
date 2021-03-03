import { html, fixture, expect, aTimeout } from '@open-wc/testing';

import '../fe-transaction-review.js';

describe('FeTransactionReview', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(
      html`<fe-transaction-review> </fe-transaction-review>`
    );
  });

  it('renders a from label', async () => {
    element.from = '123456';
    await aTimeout(10);
    const from = element.shadowRoot.querySelector('#from');
    const labelcount = element.shadowRoot.querySelectorAll('p').length;
    expect(labelcount).to.be.equal(1);
    expect(from).to.exist;
  });

  it('renders a to-label', async () => {
    element.to = '123456';
    await aTimeout(10);
    const to = element.shadowRoot.querySelector('#to');
    const labelcount = element.shadowRoot.querySelectorAll('p').length;
    expect(labelcount).to.be.equal(1);
    expect(to).to.exist;
  });

  it('renders a amount label', async () => {
    element.amount = 5000;
    await aTimeout(15);
    const amount = element.shadowRoot.querySelector('#amount');
    const labelcount = element.shadowRoot.querySelectorAll('p').length;
    expect(labelcount).to.be.equal(1);
    expect(amount).to.exist;
  });

  it('renders a remarks label', async () => {
    element.remarks = 'Fund Transfer';
    await aTimeout(20);
    const remarks = element.shadowRoot.querySelector('#remarks');
    const labelcount = element.shadowRoot.querySelectorAll('p').length;
    expect(labelcount).to.be.equal(1);
    expect(remarks).to.exist;
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
