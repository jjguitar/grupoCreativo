import Header from '../templates/Header';
import Footer from '../templates/Footer';
import Home from '../pages/Home';
import Error404 from '../pages/Error404';
import '../assets/styles/App.scss'

const routes = {
  '/': Home,
  '/about': 'About',
};

const router = async () => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');
  const footer = null || document.getElementById('footer');

  header.innerHTML = await Header();
  content.innerHTML = await Home();
  footer.innerHTML = await Footer();
  console.log('hello');
  const menuIcon = document.querySelector('.hamburger_menu');
  const navbar = document.querySelector('.navbar')
  const navLink =document.querySelector('.nav-list')
  menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change')
  })
  navLink.addEventListener('click', () => {
    navbar.classList.remove('change')
  })
}

export default router;
