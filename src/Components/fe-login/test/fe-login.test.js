import { html, fixture, expect, oneEvent } from '@open-wc/testing';

import '../fe-login.js';

describe('FeLogin', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<fe-login></fe-login>`);
  });

  it('the input validation event should be triggered on clicking submit', async () => {
    const usernameElement = element.shadowRoot.querySelector('#username');
    // const passwordElement =element.shadowRoot.querySelector('#password');
    usernameElement.modelValue = 'loginId';
    // passwordElement.modelValue='Password';

    const myfunction = element.submitForm;
    const { detail } = await oneEvent(myfunction, 'change');
    expect(detail).to.equal('loginId');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
