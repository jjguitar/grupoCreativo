import home from "../assets/img/logo-gc.png";
import Services from '../templates/Services'
import Clients from '../templates/Clients';
import "../assets/styles/Home.scss";

const Home = () => {
  const view = `
  <div class="Home" id="home">
    <div class="Home-image">
      <img src="${home}" alt="Home">
      <p>Somos Grupo CreActivo, una empresa colombiana con más de 10 años de experiencia en la producción de publicidad exterior e interior. Creamos y hacemos realidad las ideas de nuestros clientes con soluciones integrales, altos estándares de calidad y resultados efectivos.</p>
      <div class="Home--CEO">
        <p>“Nuestro compromiso con nuestros clientes es darles siempre la mejor opción, potencializando cada una de sus ideas”</p>
        <h5>Cesar Tarquino - CEO</h4>
      </div>
    </div>
    ${Services()}
    ${Clients()}
  </div>
  `;
  return view;
};

export default Home;
