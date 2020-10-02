server.get('/post/:slug', (req, res) => {
  const queryParams = { slug: req.params.slug, apiRoute: 'post' };
  app.render(req, res, '/post', queryParams);
});

server.get('/page/:slug', (req, res) => {
  const queryParams = { slug: req.params.slug, apiRoute: 'page' };
  app.render(req, res, '/post', queryParams);
});

server.get('/category/:slug', (req, res) => {
  const queryParams = { slug: req.params.slug };
  app.render(req, res, '/category', queryParams);
});