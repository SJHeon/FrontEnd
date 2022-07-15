const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://3.87.224.78:8080",
      changeOrigin: true,
    })
  );
};
