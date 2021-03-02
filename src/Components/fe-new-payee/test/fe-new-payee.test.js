import { html, fixture, expect } from '@open-wc/testing';

import '../fe-new-payee.js';

describe('FeNewPayee', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<fe-new-payee></fe-new-payee>`);
  });

  xit('renders a english button Label', () => {
    const EngButton = element.shadowRoot.querySelector('#en-GB');
    expect(EngButton).to.exist;
    expect(EngButton.textContent).to.equal('EN');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
