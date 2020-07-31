import logo from '../assets/img/logo-gc.png'
import '../assets/styles/Header.scss'

const Header = () => {
  const view = `
  <div class="Header">
    <div class="Header--logo">
      <a href="/" class="Header--logo_ankle">
        <img src="${logo}" alt="logo" class="Header--logo_img" width="300">
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
            <a href="#home" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a href="#servicios" class="nav-link">Products</a>
          </li>
          <li class="nav-item">
            <a href="#footer" class="nav-link">About</a>
          </li>
          <li class="nav-item">
            <a href="#footer" class="nav-link">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  `;
  return view;
}

export default Header;