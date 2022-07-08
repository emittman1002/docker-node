// Express application
import express from 'express';

// configuration
const
  cfg = {
    port: process.env.PORT || 3000
  };

// Express initiation
const app = express();

// home page route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// another route
app.get('/wtf/', (req, res) => {
  res.send('WTF World!');
});

// serve static assets
app.use(express.static( 'static' ));

// start server
app.listen(cfg.port, () => {
  console.log(`Example app listening at http://localhost:${ cfg.port }`);
});
