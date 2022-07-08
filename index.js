// Express application
import express from 'express';
import { argv } from 'node:process'

// configuration
const
  cfg = {
    port: argv.length>2 ? argv[2] || 3000 : 3000
  };

// Express initiation
const app = express();

// home page route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// wtf route
app.get('/wtf/', (req, res) => {
  res.send('WTF World!');
});

// serve static assets
app.use(express.static( 'static' ));

// start server
app.listen(cfg.port, () => {
  console.log(`Example app listening at http://localhost:${ cfg.port }`);
});
