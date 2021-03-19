import { html, fixture, expect, aTimeout } from '@open-wc/testing';
import { ajax } from '@lion/ajax';
import sinon from 'sinon';
import '../LoginPage.js';

describe('LoginPage', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<login-page></login-page>`);
  });

  it('Check if response is returned', async () => {
    const notificationtag = element.shadowRoot.querySelector('fe-notification');
    const requestMock = sinon.stub(ajax, 'requestJson');
    requestMock.resolves({ body: 'SuccessResponse' });
    requestMock.restore();

    expect(notificationtag.classList.contains('hidden')).to.be.true;
  });

  it('Check for the error from server', async () => {
    const notificationtag = element.shadowRoot.querySelector('fe-notification');
    const requestMock = sinon.stub(ajax, 'requestJson');
    requestMock.rejects({});
    element.login();
    await aTimeout(10);
    requestMock.restore();
    expect(notificationtag.classList.contains('hidden')).to.be.false;
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
