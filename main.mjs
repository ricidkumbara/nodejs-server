import http from 'http';

const server = http.createServer((req, res) => {
    console.log('Request accepted...');
    
    res.write(JSON.stringify({code: 200}));
    res.end();
})

server.listen(3001);