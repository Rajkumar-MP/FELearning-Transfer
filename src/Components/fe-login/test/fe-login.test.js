import { html, fixture, expect, aTimeout, oneEvent } from '@open-wc/testing';

import '../fe-login.js';

describe('FeLogin', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<fe-login></fe-login>`);
  });

  it('should trigger proper event when the submit button is clicked', async () => {
    element.primary = 'submit';

    await aTimeout(10);
    const primaryBtnElement = element.shadowRoot.querySelector('lion-form');
    setTimeout(() => primaryBtnElement.click());
    const { type } = await oneEvent(element, 'primary-btn-click');
    expect(type).to.be.equal('primary-btn-click');
    expect(primaryBtnElement).to.have.class('primary');
  });

  it('can await an event', async () => {
    setTimeout(() => element.triggerSubmit());

    const { detail } = await oneEvent(element, 'loginData');

    expect(element.loginData).to.be.true;
    expect(detail).to.be.true;
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
