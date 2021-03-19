import { html, fixture, expect, oneEvent, assert } from '@open-wc/testing';

import '../fe-login.js';

describe('FeLogin', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<fe-login></fe-login>`);
  });

  it('the input validation event should be triggered on clicking submit', async () => {
    const username = element.shadowRoot.querySelector('#username');
    const password = element.shadowRoot.querySelector('#password');

    username.modelValue = 'username';
    password.modelValue = 'password';

    setTimeout(() => element.triggerSubmit());
    const { detail } = await oneEvent(element, 'login-details');
    assert.deepEqual(detail, {
      username: 'username',
      password: 'password',
    });
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
