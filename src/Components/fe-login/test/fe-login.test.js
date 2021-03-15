import { html, fixture, expect, oneEvent, assert } from '@open-wc/testing';
import sinon from 'sinon';
import { ajax } from '@lion/ajax';
import '../fe-login.js';

describe('FeLogin', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<fe-login></fe-login>`);
  });

  it('checks whether the response is returned', async () => {
    const username = element.shadowRoot.querySelector('#username');
    const password = element.shadowRoot.querySelector('#password');
    const notification = element.shadowRoot.querySelector('fe-notification');
    const requestMock = sinon.stub(ajax, 'requestJson');
    requestMock.resolves({ body: 'SuccessResponse' });

    username.modelValue = 'username';
    password.modelValue = 'password';

    setTimeout(() => element.triggerSubmit());
    const { detail } = await oneEvent(element, 'input-validation');
    assert.deepEqual(detail, {
      username: 'username',
      password: 'password',
    });
    requestMock.restore();
    expect(username.modelValue).to.equal('');
    expect(password.modelValue).to.equal('');
    expect(notification.classList.contains('hidden')).to.be.true;
  });

  it('checks for the error in the server', async () => {
    const username = element.shadowRoot.querySelector('#username');
    const password = element.shadowRoot.querySelector('#password');
    const notification = element.shadowRoot.querySelector('fe-notification');
    const requestMock = sinon.stub(ajax, 'requestJson');
    requestMock.rejects({});
    username.modelValue = 'username';
    password.modelValue = 'password';

    setTimeout(() => element.triggerSubmit());
    const { detail } = await oneEvent(element, 'input-validation');
    assert.deepEqual(detail, {
      username: 'username',
      password: 'password',
    });

    requestMock.restore();
    expect(username.modelValue).to.equal('');
    expect(password.modelValue).to.equal('');
    expect(notification.classList.contains('hidden')).to.be.true;
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
