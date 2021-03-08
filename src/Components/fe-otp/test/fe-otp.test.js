import { html, fixture, expect, oneEvent } from '@open-wc/testing';

import '../fe-otp.js';

describe('FeOtp', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<fe-otp></fe-otp>`);
  });

  it('the input validation event should be triggered on clicking submit', async () => {
    const otpcode = element.shadowRoot.querySelector('#otp-code');
    otpcode.modelValue = 'otp-code';
    const form = element.shadowRoot.querySelector('lion-form');
    setTimeout(() => element.triggerSubmit());
    const { detail } = await oneEvent(element, 'input-validation');
    expect(detail, { otpcode: 'otpcode' }).to.exist;
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
