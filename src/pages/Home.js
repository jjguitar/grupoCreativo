import avisos from '../assets/img/avisos.jpg';
import senales from '../assets/img/señales.jpg';
import home from '../assets/img/home.png';
import Product from '../templates/Product';
import '../assets/styles/Home.scss'

const Home = () => {
  const view = `
  <div class="Home">
    <div class="Home-image">
      <img src="${home}" alt="Home">
    </div>
    ${Product('Avisos', avisos, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum facilisis lorem vel tincidunt. In at eleifend nisi. Proin vel purus vitae turpis venenatis congue.')}
    ${Product('Señales', senales, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum facilisis lorem vel tincidunt. In at eleifend nisi. Proin vel purus vitae turpis venenatis congue.')}
  </div>
  `;
  return view;
}

export default Home;