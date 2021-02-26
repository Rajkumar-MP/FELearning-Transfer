
import { html, fixture, expect } from '@open-wc/testing';

import '../fe-footer.js';

describe('FeFooter', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<fe-footer></fe-footer>`);
  });

  it('renders a footer', () => {
    
    const footer = element.shadowRoot.querySelector('footer');
   
    expect(footer).to.have.class('prime');
  
   
  });

  it('renders a class', () => {
    
    const div = element.shadowRoot.querySelector('div');
   
    expect(div).to.have.class('primary');
  
   
  });

 
  
  

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
