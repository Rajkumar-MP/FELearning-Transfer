import { ajax } from '@lion/ajax';
import { html, fixture, expect, oneEvent, aTimeout } from '@open-wc/testing';
import sinon from 'sinon';

import { defineElement, getScopedTagName } from '../../../utils.js';
import { FeOtp } from '../FeOtp.js';

defineElement('fe-otp', FeOtp);

describe('FeOtp', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<fe-otp></fe-otp>`);
  });

  it('Check if response is returned', async () => {
    const otpcode = element.shadowRoot.querySelector('#otp-code');
    const notificationtag = element.shadowRoot.querySelector(
      getScopedTagName(element, 'fe-notification')
    );
    const requestMock = sinon.stub(ajax, 'requestJson');
    requestMock.resolves({ body: 'SuccessResponse' });

    otpcode.modelValue = '123456';
    setTimeout(() => element.triggerSubmit());
    const { type } = await oneEvent(element, 'complete');
    expect(type).to.be.equal('complete');

    requestMock.restore();
    expect(otpcode.modelValue).to.equal('');
    expect(notificationtag.classList.contains('hidden')).to.be.true;
  });

  it('Check for the error from server', async () => {
    const otpcode = element.shadowRoot.querySelector('#otp-code');
    const notificationtag = element.shadowRoot.querySelector(
      getScopedTagName(element, 'fe-notification')
    );
    const requestMock = sinon.stub(ajax, 'requestJson');
    requestMock.rejects({});

    element.checkOTP();
    await aTimeout(10);
    requestMock.restore();
    expect(notificationtag.classList.contains('hidden')).to.be.false;
    expect(otpcode.modelValue).to.equal('');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
