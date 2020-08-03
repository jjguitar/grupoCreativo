import '../assets/styles/Contact.scss';

const Contact = () => {
  const view = `
    <div class="Contact">
      <h1>Contáctanos</h1>
      <p>¿Tienes alguna inquietud o deseas trabajar con nosotros? Escríbenos y te ayudaremos.</p>
      <form class="Contact--form" action="https://formspree.io/myynoegk" method="POST">
        <input class="Contact--form_name" Ctype="text" name="name" placeholder="Nombre">
        <input class="Contact--form_mail" type="text" name="_replyto" placeholder="Correo">
        <span>
          <label>
            mensaje
          </label>
          <textarea name="message"></textarea>
        </span>
        <button type="submit">enviar</button>
      </form>
    </div>
  `;

  return view;
};

export default Contact;
