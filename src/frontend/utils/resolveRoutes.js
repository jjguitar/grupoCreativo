const resolveRoutes = (route) => {
  if (route !== 'about') {
    if (route === '/') {
      return route;
    } if (route.length <= 3) {
      return '/:id';
    } if (route.includes('page')) {
      return '/:pages';
    }
  }
  console.log(`se fue por route: ${route}`);
  return `/${route}`;
};

export default resolveRoutes;
