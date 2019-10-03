const productRouter = require('./productsRouter');

const routes = [
  {
    path: '/api/product',
    file: productRouter,
  },
];

module.exports = (api) => {
  routes.forEach((router) => api.use(router.path, router.file));
};
