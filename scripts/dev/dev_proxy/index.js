const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/v1/user', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));
app.use('/v1/login', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }));
app.use('/v1/casht', createProxyMiddleware({ target: 'http://localhost:3003', changeOrigin: true }));
app.use('/v1/stock', createProxyMiddleware({ target: 'http://localhost:3004', changeOrigin: true }));
app.use('/v1/stockt', createProxyMiddleware({ target: 'http://localhost:3005', changeOrigin: true }));
app.use('/', createProxyMiddleware({ target: 'http://localhost:5000', changeOrigin: true }));
app.listen(8080);
