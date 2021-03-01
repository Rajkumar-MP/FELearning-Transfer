import { html, fixture, expect } from '@open-wc/testing';

import '../fe-login.js';

describe('FeLogin', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<fe-login></fe-login>`);
  });

  it('renders a username', () => {
    element.username = 'username';
    const username = element.shadowRoot.querySelector('#username');
    expect(username).to.exist;
    expect(username.textContent).to.equal('username');
  });

  it('renders a password', () => {
    element.password = 'password';
    const password = element.shadowRoot.querySelector('#password');
    expect(password).to.exist;
    expect(password.textContent).to.equal('password');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
