import { html, css, LitElement } from 'lit-element';
import { Router } from '@vaadin/router';
import defaultStyles from './FeApp.style.js';
import './Components/fe-header/fe-header.js';
import './Pages/LandingPage.js';
import './Pages/LoginPage/LoginPage.js';
import './Pages/AccountsdetailsPage/AccountdetailsPage.js';

function navigateTo({ detail }) {
  Router.go(detail.path);
}

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

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('navigate-to', navigateTo);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('navigate-to', navigateTo);
  }

  firstUpdated() {
    this.triggerRouter();
  }

  triggerRouter() {
    const outlet = this.shadowRoot.getElementById('display-container');
    const router = new Router(outlet);
    router.setRoutes([
      { path: '/', component: 'landing-page' },
      { path: '/login', component: 'login-page' },
      { path: '/overview/:id', component: 'account-details-page' },
    ]);
  }
}
