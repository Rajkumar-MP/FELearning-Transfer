import { html, fixture, expect, aTimeout } from '@open-wc/testing';
import { defineElement } from '../../../utils.js';
import { FeNotification } from '../FeNotification.js';

defineElement('fe-notification', FeNotification);

describe('FeNotification', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<fe-notification></fe-notification>`);
  });

  it('should render only info class and info message if info property is passed', async () => {
    element.type = 'info';
    element.label = 'Hi , this is info message';
    await aTimeout(10);
    const info = element.shadowRoot.querySelector('div');

    expect(info.classList.contains('info')).to.be.true;
    expect(info.classList.contains('notification')).to.be.true;
    expect(info.textContent).to.be.equal('Hi , this is info message');
  });

  it('should render only warning class and warning message if warning property is passed', async () => {
    element.type = 'warning';
    element.label = 'Hi , this is warning message';
    await aTimeout(10);
    const info = element.shadowRoot.querySelector('div');

    expect(info.classList.contains('warning')).to.be.true;
    expect(info.classList.contains('notification')).to.be.true;
    expect(info.textContent).to.be.equal('Hi , this is warning message');
  });

  it('should render only success class and success message if success property is passed', async () => {
    element.type = 'success';
    element.label = 'Hi , this is success message';
    await aTimeout(10);
    const info = element.shadowRoot.querySelector('div');

    expect(info.classList.contains('success')).to.be.true;
    expect(info.classList.contains('notification')).to.be.true;
    expect(info.textContent).to.be.equal('Hi , this is success message');
  });
  it('should render only error class and error message if error property is passed', async () => {
    element.type = 'error';
    element.label = 'Hi , this is error message';
    await aTimeout(10);
    const info = element.shadowRoot.querySelector('div');

    expect(info.classList.contains('error')).to.be.true;
    expect(info.classList.contains('notification')).to.be.true;
    expect(info.textContent).to.be.equal('Hi , this is error message');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
