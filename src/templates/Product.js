import '../assets/styles/Product.scss'

const Product = ( tittle, img) => {
  const view = `
  <div class="Product">
    <img class="Product--img" src="${img}">
    <h2 class="Product--tittle">${tittle}</h2>
  </div>
  `;
  return view;
}

export default Product;
