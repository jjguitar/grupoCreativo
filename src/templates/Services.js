import Product from "../templates/Product";
import avisos from "../assets/img/avisos.jpg";
import senales from "../assets/img/señales.jpg";
import '../assets/styles/Services.scss'

const Services = () => {
  const view = `
  <div id="servicios" class="Home--services">
      <h1 class="Home--services_tittle">Servicios</h1>
      <h2 class="Home--services_subTittle">Portafolio</h2>
      ${Product("Elaboración avisos", avisos, "luminosos, lonas flexibles, iluminación Led, neón, acrílicos, letras volumétricas en madera, acero, lamina, bronce y aluminio. ")}
      ${Product("Vinilos", senales, "Luminosos, lonas flexibles, iluminación Led, neón, acrílicos, letras volumétricas en madera, acero, lamina, bronce y aluminio. ")}
      ${Product("Material POP", senales,"uminosos, lonas flexibles, iluminación Led, neón, acrílicos, letras volumétricas en madera, acero, lamina, bronce y aluminio. ")}
      ${Product("Estampados", avisos,"luminosos, lonas flexibles, iluminación Led, neón, acrílicos, letras volumétricas en madera, acero, lamina, bronce y aluminio. ")}
      ${Product("Litografía", senales,"luminosos, lonas flexibles, iluminación Led, neón, acrílicos, letras volumétricas en madera, acero, lamina, bronce y aluminio. ")}
      ${Product("Estampados", avisos,"luminosos, lonas flexibles, iluminación Led, neón, acrílicos, letras volumétricas en madera, acero, lamina, bronce y aluminio. ")}
      ${Product("Litografía", senales,"luminosos, lonas flexibles, iluminación Led, neón, acrílicos, letras volumétricas en madera, acero, lamina, bronce y aluminio. ")}
      ${Product("Litografía", senales,"luminosos, lonas flexibles, iluminación Led, neón, acrílicos, letras volumétricas en madera, acero, lamina, bronce y aluminio. ")}
    </div>
    <div class="lightbox">
      <div class="lightbox-content">
        <div class="lightbox-close">&times;</div>
        <img src="" alt="lightbox" class="lightbox-img">
        <div class="lightbox-caption">
          <span class="lightbox-text"></span>
          <span class="lightbox-counter"></span>
        </div>
      </div>
    </div>
  `;
  return view;
};

export default Services;
