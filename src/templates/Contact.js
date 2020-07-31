import '../assets/styles/Contact.scss'

const Contact = () => {
  const view = `
    <div class="Contact">
      <h1>Contáctanos</h1>
      <p>¿Tienes alguna inquietud o deseas trabajar on nosotros? Escribenos y te ayudaremos.</p>
      <form action="https://formspree.io/myynoegk" method="POST">
        <input type="text" name="name" placeholder="Nombre">
        <input type="text" name="_replyto" placeholder="Correo">
        <label>
          mensaje
        </label>
        <textarea name="message"></textarea>
        <button type="submit">enviar</button>
        <input type="hidden" name="_next" value="https://grupocreativo.netlify.app/" />
      </form>
    </div>
  `;

  return view;
};

export default Contact;
