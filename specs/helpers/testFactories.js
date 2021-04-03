import LikeButtonPresenter from '../../src/scripts/views/pages/detail/utility/like-button-presenter';
import FavoriteRestoIdb from '../../src/scripts/data/favorite-resto-idb';
import launchToast from '../../src/scripts/utils/toast';

const createLikeButtonPresenterWithResto = async (resto) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestoes: FavoriteRestoIdb,
    resto,
    notification: launchToast,
  });
};

export { createLikeButtonPresenterWithResto };
