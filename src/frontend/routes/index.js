import Header from '../templates/Header';
import Footer from '../templates/Footer';
import Home from '../pages/Home';
import Error404 from '../pages/Error404';
import logo from '../assets/img/logo-gc.png'
import '../assets/styles/App.scss';

const routes = {
  '/': Home,
  '/about': 'About',
};

const router = async () => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');
  const footer = null || document.getElementById('footer');

  function setFavicon(favImg) {
    let headTitle = document.querySelector('head');
    let setFavicon = document.createElement('link');
    setFavicon.setAttribute('rel', 'shortcut icon');
    setFavicon.setAttribute('href', favImg);
    headTitle.appendChild(setFavicon);
  }
  setFavicon(logo);

  header.innerHTML = await Header();
  content.innerHTML = await Home();
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
  const lightBoxImg = document.querySelector('.lightbox-img');
  const portfolioItems = document.querySelectorAll('.Product');
  const lightClose = document.querySelector('.lightbox-close');
  const lightText = document.querySelector('.lightbox-text');
  let index;
  // let imgSrc;

  lightBoxContainer.addEventListener('click', () => {
    lightBoxContainer.classList.remove('open');
  });

  for (let i = 0; i < portfolioItems.length; i++) {
    portfolioItems[i].addEventListener('click', () => {
      index = i;
      // console.log(portfolioItems[i].querySelector('.Product--description'))
      lightBox();
      changeImage();
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
      '.Product--description'
    ).innerHTML;
  };
};

export default router;
