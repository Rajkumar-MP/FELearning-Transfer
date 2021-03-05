import { html, fixture, expect } from '@open-wc/testing';

import '../fe-otp.js';

describe('FeOtp', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<fe-otp></fe-otp>`);
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
