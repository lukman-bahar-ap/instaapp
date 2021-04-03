import IMG from '../../globals/assets';
import CONFIG from '../../globals/config';

class RestoItem extends HTMLElement {
  set resto(resto) {
    this._resto = resto;
    this.render();
  }

  render() {
    const {
      id, pictureId, rating, city, name, description,
    } = this._resto;

    this.innerHTML = `
      <img class="discover-item__thumbnail lazyload"
      data-src="${pictureId ? CONFIG.BASE_IMAGE_URL_SMALL + pictureId : IMG.CIRCLE}"
      alt="${name}" crossorigin="anonymous">
      <div class="discover-item__card-img"></div>  

      <div class="discover-item__info">
          <p class="discover-item__rate">
              ⭐️ ${rating} | 
              <i class="material-icons">location_on</i> ${city}
          </p>
      </div>
      
      <div class="discover-item__content">
          <h3 class="discover-item__title">
              <a href="${`/#/detail/${id}`}" aria-label="${name} click to view content">
                  ${name}
              </a>
          </h3>
          <p class="discover-item__description">${description}</p>
          <button id="btnReadMore${id}" class="discover-item__readmore" 
          aria-label="Click to read more ${name}">Read More</button>
      </div>
    `;

    this.querySelector(`#btnReadMore${id}`).addEventListener('click', (e) => {
      e.preventDefault();
      window.location = `/#/detail/${id}`;
    });
  }
}

customElements.define('resto-item', RestoItem);
