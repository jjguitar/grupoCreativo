import Contact from './Contact';
import phone from '../assets/img/phone.png';
import mail from '../assets/img/gmail.png';
import face from '../assets/img/face.png';
import instagram from '../assets/img/insta.png';
import '../assets/styles/Footer.scss';

const Footer = () => {
  const phoneContact = '+57 321 456 987';
  const mailContact = 'contact@grupocreativo.com';

  const view = `
  <div class="Footer">
    ${Contact()}
    <div class="Footer-contact">
      <a class="Footer-contact__link big">
        <img src="${phone}" alt="phone">
        ${phoneContact}
      </a>
      <a href="mailto:cesar.tarquino@gmail.com" class="Footer-contact__link big">
        <img src="${mail}" alt="phone">
        ${mailContact}
      </a>
      <a href="#" class="Footer-contact__link">
        Contacto
      </a>
      <a href="#" class="Footer-contact__link">
        Terminos y condiciones
      </a>
      <a href="#" class="Footer-contact__link">
        Politica de privacidad
      </a>
    </div>
    <div class="Footer-social">
      <a href="#" class="Footer-contact__link">
        <img src="${face}" alt="Facebook">
      </a>
      <a href="#" class="Footer-contact__link">
        <img class="instagram" src="${instagram}" alt="Instagram">
      </a>
    </div>
  </div>
  `;
  return view;
};

export default Footer;
