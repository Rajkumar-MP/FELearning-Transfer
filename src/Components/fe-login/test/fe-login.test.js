import { html, fixture, expect } from '@open-wc/testing';

import '../fe-login.js';

describe('FeLogin', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<fe-login></fe-login>`);
  });

  it('renders a username', () => {
    const username = element.shadowRoot.querySelector('#username');
    expect(username).to.exist;
    expect(username.textContent).to.equal('Username');
  });

  it('renders a password', () => {
    const password = element.shadowRoot.querySelector('#password');
    expect(password).to.exist;
    expect(password.textContent).to.equal('Password');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
