import { ajax } from '@lion/ajax';
import { html, fixture, expect, oneEvent, assert } from '@open-wc/testing';
import sinon from 'sinon';

import '../fe-otp.js';

describe('FeOtp', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<fe-otp></fe-otp>`);
  });

  it('Check if response is returned', async () => {
    const otpcode = element.shadowRoot.querySelector('#otp-code');
    const notificationtag = element.shadowRoot.querySelector('fe-notification');
    const requestMock = sinon.stub(ajax, 'requestJson');
    requestMock.resolves({ body: 'SuccessResponse' });

    otpcode.modelValue = '123456';
    setTimeout(() => element.triggerSubmit());
    const { detail } = await oneEvent(element, 'complete');
    assert.deepEqual(detail, {
      otpcode: '123456',
    });

    requestMock.restore();
    expect(otpcode.modelValue).to.equal('');
    expect(notificationtag.classList.contains('hidden')).to.be.true;
  });

  it('Check for the error from server', async () => {
    const otpcode = element.shadowRoot.querySelector('#otp-code');
    const notificationtag = element.shadowRoot.querySelector('fe-notification');
    const requestMock = sinon.stub(ajax, 'requestJson');
    requestMock.rejects({});

    requestMock.restore();
    expect(otpcode.modelValue).to.equal('');
    expect(notificationtag.classList.contains('hidden')).to.be.false;
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
