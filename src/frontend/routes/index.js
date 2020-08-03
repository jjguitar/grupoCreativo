/* eslint-disable prefer-const */
import Header from '../templates/Header';
import Footer from '../templates/Footer';
import Home from '../pages/Home';
import Terms from '../templates/Terms';
import Error404 from '../pages/Error404';
import logo from '../assets/img/logo-gc.png';
import getHash from '../utils/getHash';
import '../assets/styles/App.scss';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
  '/': Home,
  '/terms': Terms,
  '/about': 'About',
};

const router = async () => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');
  const footer = null || document.getElementById('footer');

  function setFavicon(favImg) {
    const headTitle = document.querySelector('head');
    const setFavicon = document.createElement('link');
    setFavicon.setAttribute('rel', 'shortcut icon');
    setFavicon.setAttribute('href', favImg);
    headTitle.appendChild(setFavicon);
  }
  setFavicon(logo);

  header.innerHTML = await Header();
  let hash = getHash();
  console.log(hash);
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();
  footer.innerHTML = await Footer();

  const menuIcon = document.querySelector('.hamburger_menu');
  const navbar = document.querySelector('.navbar');
  const navLink = document.querySelector('.nav-list');

  menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change');
  });

  navLink.addEventListener('click', () => {
    navbar.classList.remove('change');
  });

  const lightBoxContainer = document.querySelector('.lightbox');
  // const lightBoxImg = document.querySelector('.lightbox-img');
  const portfolioItems = document.querySelectorAll('.Product');
  // const lightClose = document.querySelector('.lightbox-close');
  const lightText = document.querySelector('.lightbox-text');
  let index;
  // let imgSrc;
  if (route === '/') {
    lightBoxContainer.addEventListener('click', () => {
      lightBoxContainer.classList.remove('open');
    });
  }

  const lightBox = () => {
    lightBoxContainer.classList.toggle('open');
  };

  const changeImage = () => {
    // imgSrc = portfolioItems[index].querySelector('img').getAttribute('src');
    // // console.log(imgSrc)
    // lightBoxImg.src = imgSrc
    lightText.innerHTML = portfolioItems[index].querySelector(
      '.Product--description',
    ).innerHTML;
  };
  for (let i = 0; i < portfolioItems.length; i++) {
    portfolioItems[i].addEventListener('click', () => {
      index = i;
      // console.log(portfolioItems[i].querySelector('.Product--description'))
      lightBox();
      changeImage();
    });
  }

};

export default router;
