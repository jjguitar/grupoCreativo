import '../assets/styles/Product.scss';
import '../assets/styles/Lightbox.scss';
import search from '../assets/img/search.png';

const Product = (tittle, img, description) => {
  const view = `
  <div class="Product">
    <img class="Product--img" src="${img}" width="90">
    <h2 class="hide">${tittle}</h2>
    <div class="overlay">
      <h2 class="Product--tittle">${tittle}</h2>
      <p class="Product--description">${description}</p>
      <img src="${search}" width="35" class="search" loading="lazy">
    </div>
  </div>
  `;
  return view;
};

export default Product;
