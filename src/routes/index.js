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
}

export default router;
