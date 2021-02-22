import { html, fixture, expect } from '@open-wc/testing';

import '../fe-header.js';

describe('FeHeader', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<fe-header></fe-header>`);
    element.btnLabel = 'Accept';
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
