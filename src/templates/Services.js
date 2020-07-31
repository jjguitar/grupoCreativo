import Product from "../templates/Product";
import avisos from "../assets/img/avisos.jpg";
import senales from "../assets/img/señales.jpg";
import '../assets/styles/Services.scss'

const Services = () => {
  const view = `
  <div id="servicios" class="Home--services">
      <h1 class="Home--services_tittle">Servicios</h1>
      <h2 class="Home--services_subTittle">Portafolio</h2>
      ${Product("Elaboración avisos", avisos)}
      ${Product("Vinilos", senales)}
      ${Product("Material POP", senales)}
      ${Product("Estampados", avisos)}
      ${Product("Litografía", senales)}
      ${Product("Estampados", avisos)}
      ${Product("Litografía", senales)}
    </div>
  `;
  return view;
};

export default Services;
