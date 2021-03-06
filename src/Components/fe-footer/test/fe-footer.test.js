import { html, fixture, expect, aTimeout, oneEvent } from '@open-wc/testing';
import { defineElement, getScopedTagName } from '../../../utils.js';

import { FeFooter } from '../FeFooter.js';

defineElement('fe-footer', FeFooter);

describe('FeFooter', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<fe-footer></fe-footer>`);
  });

  it('should display both buttons when both params are passed', async () => {
    element.primary = 'Next';
    element.secondary = 'Back';
    await aTimeout(10);
    const buttonCount = element.shadowRoot.querySelectorAll(
      getScopedTagName(element, 'lion-button')
    ).length;
    const [
      primaryBtnElement,
      secondaryBtnElement,
    ] = element.shadowRoot.querySelectorAll(
      getScopedTagName(element, 'lion-button')
    );
    expect(buttonCount).to.be.equal(2);
    expect(primaryBtnElement.textContent).to.be.equal('Next');
    expect(secondaryBtnElement.textContent).to.be.equal('Back');
  });

  it('should display primary button when one parameter is passed', async () => {
    element.primary = 'Next';

    await aTimeout(10);
    const buttonCount = element.shadowRoot.querySelectorAll(
      getScopedTagName(element, 'lion-button')
    ).length;
    const [primaryBtnElement] = element.shadowRoot.querySelectorAll(
      getScopedTagName(element, 'lion-button')
    );
    expect(buttonCount).to.be.equal(1);
    expect(primaryBtnElement.textContent).to.be.equal('Next');
  });

  it('should display secondary button when second parameter is passed', async () => {
    element.primary = 'Back';

    await aTimeout(10);
    const buttonCount = element.shadowRoot.querySelectorAll(
      getScopedTagName(element, 'lion-button')
    ).length;
    const [secondaryBtnElement] = element.shadowRoot.querySelectorAll(
      getScopedTagName(element, 'lion-button')
    );
    expect(buttonCount).to.be.equal(1);
    expect(secondaryBtnElement.textContent).to.be.equal('Back');
  });

  it('nothing to display when no params are passed in the component', async () => {
    await aTimeout(10);
    const buttonCount = element.shadowRoot.querySelectorAll(
      getScopedTagName(element, 'lion-button')
    ).length;
    const [noBtnElement] = element.shadowRoot.querySelectorAll(
      getScopedTagName(element, 'lion-button')
    );
    expect(buttonCount).to.be.equal(0);
    expect(noBtnElement).to.be.equal(undefined);
  });

  it('should trigger proper event when the specific button is clicked', async () => {
    element.primary = 'Next';
    element.secondary = 'Back';
    await aTimeout(10);
    const [primaryBtnElement] = element.shadowRoot.querySelectorAll(
      getScopedTagName(element, 'lion-button')
    );
    setTimeout(() => primaryBtnElement.click());
    const { type } = await oneEvent(element, 'primary-btn-click');
    expect(type).to.be.equal('primary-btn-click');
  });

  it('should trigger proper event when the spe button is clicked', async () => {
    element.primary = 'Next';
    element.secondary = 'Back';
    await aTimeout(10);
    const [, secondaryBtnElement] = element.shadowRoot.querySelectorAll(
      getScopedTagName(element, 'lion-button')
    );
    setTimeout(() => secondaryBtnElement.click());
    const { type } = await oneEvent(element, 'secondary-btn-click');
    expect(type).to.be.equal('secondary-btn-click');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
