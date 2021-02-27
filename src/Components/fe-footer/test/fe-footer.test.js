import { html, fixture, expect, aTimeout, oneEvent } from '@open-wc/testing';

import '../fe-footer.js';

describe('FeFooter', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<fe-footer></fe-footer>`);
  });

  xit('renders a footer', () => {
    const footer = element.shadowRoot.querySelector('footer');

    expect(footer).to.have.class('container');
  });

  xit('renders a class', () => {
    const div = element.shadowRoot.querySelector('div');

    expect(div).to.have.id('button');
  });

  it('should display both buttons when both params are passed', async () => {
    element.primary = 'Next';
    element.secondary = 'Back';
    await aTimeout(10);
    const buttonCount = element.shadowRoot.querySelectorAll('lion-button')
      .length;
    const [
      primaryBtnElement,
      secondaryBtnElement,
    ] = element.shadowRoot.querySelectorAll('lion-button');
    expect(buttonCount).to.be.equal(2);
    expect(primaryBtnElement.textContent).to.be.equal('Next');
    expect(secondaryBtnElement.textContent).to.be.equal('Back');
  });

  it('should display primary button when i pass primary parameter alone', () => {});
  it('should display secondary button when i pass secondary parameter alone', () => {});
  it('nothing to display when no params are passed in the component', () => {});
  it('should trigger proper event when the specific button is clicked', async () => {
    element.primary = 'Next';
    element.secondary = 'Back';
    await aTimeout(10);
    const [primaryBtnElement] = element.shadowRoot.querySelectorAll(
      'lion-button'
    );
    setTimeout(() => primaryBtnElement.click());
    const { type } = await oneEvent(element, 'primary-btn-click');
    expect(type).to.be.equal('primary-btn-click');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
