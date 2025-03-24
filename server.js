
const http = require('http');

const server = http.createServer( (req, res)=>{

// test case- 1: Inspect the Req details

    const { headers, url, method } = req;
    
    console.log( server);



    

    // test case 2 : sending rsponse type

  //  res.setHeader('Content-Type', 'text/html');

   // res.end('<h1>Welcome to 555 CAPM series</h1>');


   // test case 3

//    res.setHeader('Content-Type', 'application/json');
//    res.end( JSON.stringify({
//      "Couse-Name" : "CAPM Course"

//    }));

// test 4

 if(req.method === 'POST'){

  var data = [];
  req.on( 'data' , (chunk)=>{
    Data.push(chunk);

  }).on('end' ,()=>{

      const bodyString = Buffer.concat(data).toString();
      res.end(JSON.stringify(bodyString));
  })

 }


});

server.listen( 3300, ()=> console.log('Listening the to port 3300') );    