import '../assets/styles/Product.scss'

const Product = ( tittle, img, description) => {
  const view = `
  <div class="Product">
    <h2 class="Product--tittle">${tittle}</h2>
    <p class="Product--description">${description}</p>
    <img class="Product--img" src="${img}">
  </div>
  `;
  return view;
}

export default Product;
