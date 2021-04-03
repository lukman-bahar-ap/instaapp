import IMG from '../../globals/assets';

class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="appbar" id="appbar">
                <button id="drawer-open" class="header__button" aria-label="navigation menu">
                    <i class="material-icons">menu</i>
                </button>
                <div class="header__inner">
                    <picture>
                        <source type="image/webp" srcset="${IMG.LOGO_WEBP}">
                        <source type="image/jpeg" srcset="${IMG.LOGO_LARGE}">
                            <img src="${IMG.LOGO_LARGE}"
                            srcset="${IMG.LOGO_SMALL} 480w, ${IMG.LOGO_LARGE} 1080w"
                            sizes="(max-width: 600px) 480px, 1080px"
                            width="190px" height="39px"
                            class="logo lazyload" alt="logo diresto">
                    </picture>
                </div>
                <nav id="drawer" class="nav">
                    <ul class="nav__list" aria-label="navigation menu">
                        <li class="nav__item show-mobile-only center-text">
                            <button id="drawer-close" class="header__button" 
                            aria-label="close navigation menu" accesskey="c">
                                <i class="material-icons">north_west</i>
                            </button>
                        </li>
                        <li class="nav__item">
                            <a href="#/home" aria-label="Home page" accesskey="h">
                                <i class="material-icons show-mobile-tab-only">fastfood</i>
                                <div class="hide-tab-only">Home</div>
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#/fav" aria-label="access to favorite page" accesskey="f">
                                <i class="material-icons show-mobile-tab-only">favorite</i>
                                <div class="hide-tab-only">Favorite</div>
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="https://www.linkedin.com/in/lukman-bahar-agung-p-aaa9276b/" 
                            target="_blank" rel="noopener" aria-label="acces to about us page"
                            accesskey="a">
                            <i class="material-icons show-mobile-tab-only">account_circle</i>
                                <div class="hide-tab-only">About Us</div>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>    
        `;
  }
}
customElements.define('app-bar', AppBar);
