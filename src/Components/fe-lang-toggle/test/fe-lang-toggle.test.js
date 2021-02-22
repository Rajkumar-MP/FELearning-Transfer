import { html, fixture, expect } from '@open-wc/testing';

import '../fe-lang-toggle.js';

describe('FeLangToggle', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<fe-lang-toggle></fe-lang-toggle>`);
  });

  it('renders a button Label', () => {
    const button = element.shadowRoot.querySelector('#btn-en');
    const button2 = element.shadowRoot.querySelector('#btn-nl');
    expect(button).to.exist;
    expect(button2).to.exist;
    expect(button.textContent).to.equal('EN');
    expect(button2.textContent).to.equal('NL');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
