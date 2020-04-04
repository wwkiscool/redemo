const proxy = require('http-proxy-middleware');
console.log('213',proxy);
module.exports = function (app) {
  app.use(
    '/api',
    proxy.createProxyMiddleware(
      {
        target: 'http://localhost:3001',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    )
  );
};