const fs = require('fs');

const requestHandler = (req,res) => {
    
    const url = req.url;
    const method = req.method;
    
if(url === '/'){

    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<h1>Hello World from LOCAL</h1>');
    res.write('</html>');
    res.end();

}else if(url === '/test'){
    
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<h1>Test</h1>');
    res.write('</html>');
    res.end();

}else if(url === '/message' && method === 'POST'){
    const body = [];
    req.on('data',(chunk) =>{
        console.log(chunk);
        body.push(chunk);
    });
    req.on('end',() =>{
        const parseBody = Buffer.concat(body).toString();
        console.log(parseBody);
        fs.writeFileSync('message.txt',parseBody);
    });
    
    res.statusCode = 302;
    res.setHeader('Location','/');
    res.end();
}


// process.exit();
    
}

// module.exports = requestHandler; // single


module.exports = { // multi 
    handler: requestHandler,
    description: 'my routers'
}

// module.exports.handler = requestHandler;
// module.exports.description = 'my routers';

// exports.handler = requestHandler;
// exports.description = 'my routers';