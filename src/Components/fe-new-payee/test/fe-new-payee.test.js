import { html, fixture, expect, oneEvent, assert } from '@open-wc/testing';

import '../fe-new-payee.js';

describe('FeNewPayee', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<fe-new-payee></fe-new-payee>`);
  });

  it('renders a english button Label', async () => {
    const nickname = element.shadowRoot.querySelector('#nickname');
    const accountholdername = element.shadowRoot.querySelector(
      '#accountholdername'
    );
    const accountnumber = element.shadowRoot.querySelector('#accountnumber');
    const ifsc = element.shadowRoot.querySelector('#ifsc');
    nickname.modelValue = 'nickname';
    accountholdername.modelValue = 'accountholder';
    accountnumber.modelValue = 123456;
    ifsc.modelValue = 'ifsccode';
    const form = element.shadowRoot.querySelector('lion-form');
    setTimeout(() => form.submit());
    const { detail } = await oneEvent(element, 'input-validation');
    assert.deepEqual(detail, {
      nickname: 'nickname',
      accountholdername: 'accountholder',
      accountnumber: 123456,
      ifsc: 'ifsccode',
    });
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
