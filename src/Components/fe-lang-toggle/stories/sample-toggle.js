import { LitElement, html } from 'lit-element';
import { localize, LocalizeMixin } from '@lion/localize';

import '../fe-lang-toggle.js';

export class SampleToggle extends LocalizeMixin(LitElement) {
  static get localizeNamespaces() {
    return [
      { 'sample-toggle': locale => import(`./translations/${locale}.js`) },
      ...super.localizeNamespaces,
    ];
  }

  render() {
    return html`
      <div>${localize.msg('sample-toggle:foo')}</div>
      <div>
        <fe-lang-toggle></fe-lang-toggle>
      </div>
    `;
  }
}

customElements.define('sample-toggle', SampleToggle);
