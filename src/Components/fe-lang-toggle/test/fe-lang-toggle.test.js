import { localize } from '@lion/localize';
import { html, fixture, expect } from '@open-wc/testing';

import '../fe-lang-toggle.js';

describe('FeLangToggle', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<fe-lang-toggle></fe-lang-toggle>`);
  });

  it('renders a english button Label', () => {
    const EngButton = element.shadowRoot.querySelector('#en-GB');
    expect(EngButton).to.exist;
    expect(EngButton.textContent).to.equal('EN');
  });

  it('renders a dutch button Label', () => {
    const DutchButton = element.shadowRoot.querySelector('#nl-NL');
    expect(DutchButton).to.exist;
    expect(DutchButton.textContent).to.equal('NL');
  });

  it('should preselect language based on locale', () => {
    const selectedButtonElement = element.shadowRoot.querySelector('.selected');
    expect(selectedButtonElement.id).to.be.equal('en-GB');
  });

  it('should update language when EN button clicked', () => {
    const EngButton = element.shadowRoot.querySelector('#en-GB');
    expect(EngButton.classList.contains('selected')).to.be.true;
    expect(localize.locale).to.be.equal('en-GB');
  });
  it('should update language when NL button clicked', () => {
    const DutchButton = element.shadowRoot.querySelector('#nl-NL');
    expect(DutchButton.classList.contains('selected')).to.be.false;
    DutchButton.click();
    expect(DutchButton.classList.contains('selected')).to.be.true;
    expect(localize.locale).to.be.equal('nl-NL');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
