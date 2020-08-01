import '../assets/styles/Clients.scss';
import c1 from '../assets/img/clients/1.png';
import c2 from '../assets/img/clients/2.png';
import c3 from '../assets/img/clients/3.png';
import c4 from '../assets/img/clients/4.png';
import c5 from '../assets/img/clients/5.png';
import c6 from '../assets/img/clients/6.png';
import c7 from '../assets/img/clients/7.png';
import c8 from '../assets/img/clients/8.png';
import c9 from '../assets/img/clients/9.png';

const Clients = () => {
  const view = `
    <section class="Home--clients">
      <h1>clientes</h1>
      <span>
        <img src="${c1}">
      </span>
      <span>
        <img src="${c2}">
      </span>
      <span>
        <img src="${c3}">
      </span>
      <span>
        <img src="${c4}">
      </span>
      <span>
        <img src="${c5}">
      </span>
      <span>
        <img src="${c6}">
      </span>
      <span>
        <img src="${c7}">
      </span>
      <span>
        <img src="${c8}">
      </span>
      <span class="last-child">
        <img src="${c9}">
      </span>
    </section>
  `;
  return view;
};

export default Clients;
