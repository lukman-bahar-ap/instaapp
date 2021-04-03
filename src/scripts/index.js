import 'regenerator-runtime/runtime';
import 'lazysizes/lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/main.scss';
import './views/components/app-bar';
import './views/components/hero-elm';
import './views/components/footer-elm';
import swRegister from './utils/sw-register';
import App from './views/app';

const drawer = document.querySelector('#drawer');
const app = new App({
  open: document.querySelector('#drawer-open'),
  close: document.querySelector('#drawer-close'),
  drawer,
  hero: document.querySelector('.hero'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('load', () => {
  app.renderPage();
});

window.addEventListener('hashchange', (event) => {
  import('./utils/drawer-initiator')
    .then((module) => module.default)
    .then((DrawerInitiator) => DrawerInitiator._closeDrawer(event, drawer))
    .catch((error) => new Error(error));

  app.renderPage();
});

window.addEventListener('DOMContentLoaded', swRegister);
