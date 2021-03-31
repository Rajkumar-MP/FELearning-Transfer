import { html, fixture, expect, oneEvent, assert } from '@open-wc/testing';

import { defineElement } from '../../../utils.js';
import { FeNewPayee } from '../FeNewPayee.js';

defineElement('fe-new-payee', FeNewPayee);

describe('FeNewPayee', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<fe-new-payee></fe-new-payee>`);
  });

  it('the input validation event should be triggered on clicking submit', async () => {
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

    setTimeout(() => element.triggerSubmit());
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
