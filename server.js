//core modules
 const http = require('http'); //provides server
 const fs = require('fs'); //use this for file transaction
 const path = require('path');

 const server = http.createServer((req, res)=>{
   // res.writeHead(200 , {'Content-Type' : 'text/plain'})
   // res.write("Hello");
   // res.end();
   console.log(`${req.method} request for ${req.url} `);

   if (req.method === 'GET'){//do something where do you wan to go
     if (req.url === '/') {//chose the URL you want to go to
       fs.readFile('./public/index.html','UTF-8', (err,data)=>{
         if (err) throw err;//if it doesnt go there it will give an error , if it works it will get the data from the file 
         res.writeHead(200, {'Content-Type' : 'text/html'});
         res.end(data);
       })
     } else if (req.url === '/index.html') {
            fs.readFile('./public/index.html','UTF-8', (err,data)=>{
              if (err) throw err;
              res.writeHead(200, {'Content-Type' : 'text/html'});
              res.end(data);
            })
     } else if (req.url === '/about.html') {
          fs.readFile('./public/about.html','UTF-8', (err,data)=>{
            if (err) throw err;
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.end(data);
          })
        }
   } //method

 });

 server.listen(3000);
 console.log("running node server at port 3000");
