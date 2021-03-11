import { html, fixture, expect, oneEvent, assert } from '@open-wc/testing';

import '../fe-otp.js';

describe('FeOtp', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<fe-otp></fe-otp>`);
  });

  it('the input validation event should be triggered on clicking submit', async () => {
    const otpcode = element.shadowRoot.querySelector('#otp-code');
    otpcode.modelValue = '123456';

    setTimeout(() => element.triggerSubmit());
    const { detail } = await oneEvent(element, 'input-validation');
    assert.deepEqual(detail, {
      otpcode: '123456',
    });
    // expect(detail).to.equal('otp-code');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
