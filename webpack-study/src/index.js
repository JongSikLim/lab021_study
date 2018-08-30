  import express from 'express'
  import myAppModule from 'app.module.js'

  const port = process.env.PORT || 3030
  const app = express()
  const angular = require('angular');

  app.get('/', (req, res) => {
    res.sendfile(__dirname + '/index.html');
  })

  app.use(express.static(__dirname));

  app.listen(port, () => console.log(`listening on port ${port}`))