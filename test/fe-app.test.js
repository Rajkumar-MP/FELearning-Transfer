import { html, fixture, expect } from '@open-wc/testing';

import '../src/fe-app.js';

describe('FeApp', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<fe-app></fe-app>`);
  });


  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
