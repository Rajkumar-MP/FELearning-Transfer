import { html, fixture, expect } from '@open-wc/testing';

import '../fe-lang-toggle.js';

describe('FeLangToggle', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<fe-lang-toggle></fe-lang-toggle>`);
  });

  it('renders a first button Label', () => {
    const button = element.shadowRoot.querySelector('#en-GB');
    expect(button).to.exist;
  });

  it('renders a first button Label', () => {
    const button2 = element.shadowRoot.querySelector('#nl-NL');
    expect(button2).to.exist;
  });

  it('Checks the content of button', () => {
    const button = element.shadowRoot.querySelector('#en-GB');
    const button2 = element.shadowRoot.querySelector('#nl-NL');
    expect(button2.textContent).to.equal('NL');
    expect(button.textContent).to.equal('EN');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
