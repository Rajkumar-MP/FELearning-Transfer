import { html, fixture, expect, oneEvent, assert } from '@open-wc/testing';

import '../fe-fund-transfer.js';

describe('FeFundTransfer', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<fe-fund-transfer></fe-fund-transfer>`);
  });

  it('should give error when form is not filled', () => {
    const form = element.shadowRoot.querySelector('lion-form').hasFeedbackFor;
    expect(form).to.exist;
    expect(form).to.includes('error');
  });

  it('should not have any predefined value in the form', () => {
    const form = element.shadowRoot.querySelector('lion-form').value;
    expect(form).to.exist;
    expect(form.value).to.be.equal(undefined);
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

    const form = element.shadowRoot.querySelector('lion-form');

    setTimeout(() => form.submit());

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
