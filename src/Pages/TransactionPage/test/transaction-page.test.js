import { html, fixture, expect, aTimeout } from '@open-wc/testing';
import { ajax } from '@lion/ajax';
import '../TransactionPage.js';
import sinon from 'sinon';

describe('TransactionPage', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<transaction-page></transaction-page>`);
  });

  it('Check if response is returned', async () => {
    const notificationtag = element.shadowRoot.querySelector('fe-notification');

    const requestMock = sinon.stub(ajax, 'request');
    requestMock.resolves({ body: 'Success' });

    await aTimeout(150);
    requestMock.restore();

    expect(notificationtag.classList.contains('hidden')).to.be.true;
  });

  it('Check for the error from server', async () => {
    const notificationtag = element.shadowRoot.querySelector('fe-notification');
    const requestMock = sinon.stub(ajax, 'request');
    requestMock.rejects({ body: 'Fail' });

    element.getAccountDetails();

    await aTimeout(150);
    requestMock.restore();

    expect(notificationtag.classList.contains('hidden')).to.be.false;
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
