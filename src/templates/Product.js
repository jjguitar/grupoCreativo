import '../assets/styles/Product.scss'

const Product = ( tittle, img, description) => {
  const view = `
  <div class="Product">
    <img class="Product--img" src="${img}">
    <h2>${tittle}</h2>
    <div class="overlay">
      <h2 class="Product--tittle">${tittle}</h2>
      <p class="Product--description">${description}</p>
      <span class="fa fa-search"></span>
    </div>
  </div>
  `;
  return view;
}

export default Product;
