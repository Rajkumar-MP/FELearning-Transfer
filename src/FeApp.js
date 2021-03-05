import { html, css, LitElement } from 'lit-element';
import { Router } from '@vaadin/router';
import defaultStyles from './FeApp.style.js';
import './Components/fe-header/fe-header.js';
import './Pages/LandingPage.js';

export class FeApp extends LitElement {
  static get styles() {
    return css`
      ${defaultStyles}
    `;
  }

  static get properties() {
    return {};
  }

  render() {
    return html`
      <fe-header></fe-header>
      <div id="display-container" class="container-fluid container"></div>
    `;
  }

  firstUpdated() {
    this.triggerRouter();
  }

  triggerRouter() {
    const outlet = this.shadowRoot.getElementById('display-container');
    const router = new Router(outlet);
    router.setRoutes([{ path: '/', component: 'landing-page' }]);
  }
}
