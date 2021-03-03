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

    username.modelValue = 'loginId';
    password.modelValue = 'password';
    const form = element.shadowRoot.querySelector('lion-form');
    setTimeout(() => form.submit());
    const { detail } = await oneEvent(element, 'input-validation');
    assert.deepEqual(detail, {
      username: 'loginId',
      password: 'password',
    });
  });

  it(function (done) {
    done();
    this.timeout(10000);
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
