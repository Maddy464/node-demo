const http = require('http');

const server = http.createServer((req, res) => {

    // Ex-1 Inspect the Request details
    // const { headers , url , method} = req;
    // console.log( headers, url, method);
    // res.end('Welcome to CAP test series');

    //Ex-2 
    // res.setHeader('Content-Type', 'text/plain');
    // res.end('Welcome to CAP test series');

    // res.setHeader('Content-Type', 'text/html');
    // res.end('<h1>Welcome to CAP test series</h1>');

    // Ex-3 sending response in Json format

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
        'CAPM Data ': 'Learing Data'
    }));

    // Ex- 4 Posting Records

    if (req.method === 'POST') {

        var Data = [];
        req.on('data', (chunk) => {

            Data.push(chunk)
        }).on('end', () => {

            const bodyString = Buffer.concat(Data).toString()
            res.end(JSON.stringify(bodyString))

        })


    }



});

server.listen(3009, () => console.log('Listening to Port 3004dd'))