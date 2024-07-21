// const { createServer } = require('https');
// const { parse } = require('url');
// const next = require('next');
// const fs = require('fs');

// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();

// const httpsOptions = {
//   key: fs.readFileSync('./key.pem'),
//   cert: fs.readFileSync('./cert.pem')
// };

// const port = process.env.PORT || 3000;

// app.prepare().then(() => {
//   createServer(httpsOptions, (req, res) => {
//     const parsedUrl = parse(req.url, true);
//     handle(req, res, parsedUrl);
//   }).listen(port, (err) => {
//     if (err) throw err;
//     console.log(`> Ready on https://localhost:${port}`);
//   });
// });

const express = require('express');
const next = require('next');
const { parse } = require('url');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();


const httpsOptions = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
};

app.prepare().then(() => {
  const server = express(httpsOptions);

  // Serve static files from .next directory
  server.use('/_next', express.static('.next'));

  // Custom route to handle all other routes
  server.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    if (pathname.startsWith('/_next/static/')) {
      handle(req, res, parsedUrl);
    } else {
      handle(req, res, parsedUrl);
    }
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});