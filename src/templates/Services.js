import Product from '../templates/Product';
import avisos from '../assets/img/services/avisos.png';
import estampados from '../assets/img/services/estampados.png';
import stands from '../assets/img/services/stands.png';
import adhesivos from '../assets/img/services/adhesivos.png';
import litografia from '../assets/img/services/litografia.png';
import materialpop from '../assets/img/services/materialpop.png';
import promocional from '../assets/img/services/promocional.png';
import senalizacion from '../assets/img/services/senalizacion.png';
import '../assets/styles/Services.scss';

const Services = () => {
  const view = `
  <div id="servicios" class="Home--services">
      <h1 class="Home--services_tittle">Servicios</h1>
      <h2 class="Home--services_subTittle">Portafolio</h2>
      ${Product(
        'Elaboración avisos',
        avisos,
        'Elaboración Avisos – Luminosos, lonas flexibles, iluminación Led, neón, acrílicos, letras volumétricas en madera, acero, lamina, bronce y aluminio. '
      )}
      ${Product(
        'Vinilos',
        adhesivos,
        'Vinilos adhesivos – Para vehículos, murales, gigantografías, calcomanías, decoración de interiores, vitrinismo, plotter de corte.'
      )}
      ${Product(
        'Señalización',
        senalizacion,
        'Señalización – Interior y exterior. Señalización de normas establecidas en hospitales, instituciones comerciales, bancarias o industriales.'
      )}
      ${Product(
        'Material POP',
        materialpop,
        'Material POP – Tropezones, siluetas publicitarias, floorgraphics, móviles, dummies inflables, pendones y porta pendones. '
      )}
      ${Product(
        'Material Promocional',
        promocional,
        'Material Promocional – Esferos, mugs, botones, mousepads, camisetas, gorras, tapetes publicitarios, sombrillas, etc. '
      )}
      ${Product(
        'Exhibidores y stands',
        stands,
        'Exhibidores y stands – Diseño y fabricación de módulos de exhibición personalizados para cualquier producto. Usamos diferentes materiales según el diseño (MDF – TABLEX, vidrio, cartón, poliestireno y acrílico). '
      )}
      ${Product(
        'Estampados',
        estampados,
        'Estampados – Sobre textiles, plástico, cartón, papel y otros. Usamos diferentes técnicas dependiendo de la superficie a estampar. '
      )}
      ${Product(
        'Litografía',
        litografia,
        'luminosos, lonas flexibles, iluminación Led, neón, acrílicos, letras volumétricas en madera, acero, lamina, bronce y aluminio. '
      )}
      ${Product(
        'Otros',
        litografia,
        'Otros – Nuestra experiencia en el manejo de diferentes materiales y herramientas nos permite innovar frente a la producción. Si tienes una idea y no sabes cómo producirla, nosotros podemos ayudarte. '
      )}
    </div>
    <div class="lightbox">
      <div class="lightbox-content">
        <!-- <img src="" alt="lightbox" class="lightbox-img"> -->
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
