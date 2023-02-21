const express = require('express');
const server = express();

//@ enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
//@ so that your API is remotely testable by FCC
var cors = require('cors');
server.use(cors({ optionsSuccessStatus: 200 })); //@ some legacy browsers choke on 204

server.get('/api/whoami', (req, res) => {
  let requestHeader = req.headers;
  res.json({ip: req.ip, 
            language: requestHeader['accept-language'], 
            software: requestHeader['user-agent']
           })
})

server.listen(3000, () => console.log('running'))