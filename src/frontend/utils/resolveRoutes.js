const resolveRoutes = (route) => {
  if (route !== 'about') {
    if (route === '/') {
      return route;
    } if (route.length <= 3) {
      return '/:id';
    } if (route.includes('terms')) {
      return '/terms';
    }
  }
  console.log(`se fue por route: ${route}`);
  return `/${route}`;
};

export default resolveRoutes;
