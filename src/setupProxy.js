const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (app) => {
  app.use(
    createProxyMiddleware('/people', {
      target: 'https://peopleleb.herokuapp.com',
      changeOrigin: true,
    }),
  )
}
