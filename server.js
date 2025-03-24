
const http = require('http');

const server = http.createServer( (req, res)=>{

// test case- 1: Inspect the Req details

    const { headers, url, method } = req;
    
    console.log( headers, url, method);



    res.end('Welcome to 555 CAPM series');

});

server.listen( 3300, ()=> console.log('Listening the to port 3300') );    