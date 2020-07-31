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
    <div class="Header--nav">
      <a href="#" class="Header--nav_button">Products</a>
      <a href="#" class="Header--nav_button">About</a>
      <a href="#" class="Header--nav_button">Contact</a>
    </div>
  </div>
  `;
  return view;
}

export default Header;