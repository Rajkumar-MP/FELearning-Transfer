import { html, fixture, expect, aTimeout } from '@open-wc/testing';
import { ajax } from '@lion/ajax';
import sinon from 'sinon';
import { defineElement, getScopedTagName } from '../../../utils.js';
import { AccountdetailsPage } from '../AccountdetailsPage.js';

defineElement('account-details-page', AccountdetailsPage);

describe('AccountdetailsPage', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(
      html`<account-details-page></account-details-page>`
    );
  });

  it('render the title in header', () => {
    const title = element.shadowRoot.querySelector('legend');
    expect(title).to.exist;
    expect(title.textContent).to.equal(
      'Account Information:' || 'Account Gegevens:'
    );
  });

  it('render the title in footer', () => {
    const title = element.shadowRoot.querySelector('#footer');
    expect(title).to.exist;
    expect(title.textContent).to.equal('Transfer Funds:' || 'Geld Overmaken:');
  });

  it('Check if response is returned', async () => {
    const notificationtag = element.shadowRoot.querySelector(
      getScopedTagName(element, 'fe-notification')
    );
    const requestMock = sinon.stub(ajax, 'request');
    requestMock.resolves({ body: 'Success' });

    await aTimeout(150);
    requestMock.restore();

    expect(notificationtag.classList.contains('hidden')).to.be.true;
  });

  it('Check for the error from server', async () => {
    const notificationtag = element.shadowRoot.querySelector(
      getScopedTagName(element, 'fe-notification')
    );

    const requestMock = sinon.stub(ajax, 'request');
    requestMock.rejects({ body: 'Fail' });

    element.getAccountDetaildInformation();

    await aTimeout(150);
    requestMock.restore();

    expect(notificationtag.classList.contains('hidden')).to.be.false;
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
