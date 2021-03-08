import { html, fixture, expect, oneEvent, assert } from '@open-wc/testing';

import '../fe-fund-transfer.js';

describe('FeFundTransfer', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<fe-fund-transfer></fe-fund-transfer>`);
  });

  it('renders the proper ids', async () => {
    const fromaccount = element.shadowRoot.querySelector('#fromaccount');
    const toaccount = element.shadowRoot.querySelector('#toaccount');
    const amount = element.shadowRoot.querySelector('#amount');
    const remarks = element.shadowRoot.querySelector('#remarks');
    fromaccount.modelValue = 'savings';
    toaccount.modelValue = 'current';
    amount.modelValue = 123456;
    remarks.modelValue = 'verygood';

    setTimeout(() => element.triggerSubmit());

    const { detail } = await oneEvent(element, 'fund-validation');

    assert.deepEqual(detail, {
      fromaccount: 'savings',
      toaccount: 'current',
      amount: 123456,
      remarks: 'verygood',
    });
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
