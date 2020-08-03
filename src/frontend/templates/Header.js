import logo from '../assets/img/logo-gc.png';
import logoWB from '../assets/img/logo-gc-white.png';
import '../assets/styles/Header.scss';

const Header = () => {
  const view = `
  <div class="Header">
    <div class="Header--logo">
      <a href="/" class="Header--logo_ankle">
        <img src="${logo}" alt="logo" class="Header--logo_img_dark" width="300">
        <img src="${logoWB}" alt="logo" class="Header--logo_img_light" width="300">
      </a>
    </div>
    <div class="container">
      <nav class="navbar">
        <div class="hamburger_menu">
          <div class="line line-1"></div>
          <div class="line line-2"></div>
          <div class="line line-3"></div>
        </div>

        <ul class="nav-list">
          <li class="nav-item">
            <a href="#home" class="nav-link">Quiénes somos</a>
          </li>
          <li class="nav-item">
            <a href="#servicios" class="nav-link">Productos</a>
          </li>
          <li class="nav-item">
            <a href="#clients" class="nav-link">Clientes</a>
          </li>
          <li class="nav-item">
            <a href="#footer" class="nav-link">Contacto</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="container-max">
      <nav class="navbar2">
        <ul class="nav-list2">
          <li class="nav-item2">
            <a href="#home" class="nav-link2">Quiénes somos</a>
          </li>
          <li class="nav-item2">
            <a href="#servicios" class="nav-link2">Productos</a>
          </li>
          <li class="nav-item2">
            <a href="#clients" class="nav-link2">Clientes</a>
          </li>
          <li class="nav-item2">
            <a href="#footer" class="nav-link2">Contacto</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  `;
  return view;
};

export default Header;
