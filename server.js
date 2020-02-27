//Core Modules
const http = require('http');
const fs = require('fs');
const path = require('path');
const qs = require('querystring');

const server = http.createServer((req, res) =>{
  // res.writeHead(200, {'content-Type' : 'text/plain'})
  // res.write('Hey lady');
  // res.end();
  console.log(`${req.method} request for ${req.url}`);
  if(req.method === 'GET'){
    if (req.url === '/'){
      fs.readFile('./public/index.html','UTF-8',(err, data)=>{
        if(err) throw err;
        res.writeHead(200, {'content-Type' : 'text/html'});
        res.end(data);
      })
    } else if (req.url === '/index.html') {
      fs.readFile('./public/index.html','UTF-8', (err, data)=>{
        if(err) throw err;
        res.writeHead(200, {'content-Type' : 'text/html'});
        res.end(data);
      })
    } else if (req.url === '/about.html') {
      fs.readFile('./public/about.html','UTF-8', (err,data)=>{
        if(err) throw err;
        res.writeHead(200, {'content-Type' : 'text/html'});
        res.end(data);
      })
    } else if (req.url === '/contact.html') {
        fs.readFile('./public/contact.html','UTF-8', (err,data)=>{
          if(err) throw err;
          res.writeHead(200, {'content-Type' : 'text/html'});
          res.end(data);
      })
    } else if (req.url.match('/node_modules/'))  {
        const nodePath = path.join(__dirname, req.url);// make sure the const name is the same as the name in the line below
          fs.readFile(nodePath,'UTF-8', (err,data)=>{
            if(err) throw err;
            res.writeHead(200, {'content-Type' : 'text/css'});
            res.end(data);
      })
    } else if (req.url.match('/css/'))  {//adding style folder
        const cssPath = path.join(__dirname,'public', req.url);
          fs.readFile(cssPath,'UTF-8', (err,data)=>{
            if(err) throw err;
            res.writeHead(200, {'content-Type' : 'text/css'});//change to css
            res.end(data);
      })
    }else if (req.url.match(/.jpeg/)) { //adding an image if you are use the . in (/.jpeg/) instaed of quotes '' eg ('/jpeg/') because you are accessing a file
        const imagePath = path.join(__dirname,'public', req.url);
          fs.readFile(imagePath,(err,data)=>{
            if(err) throw err;
            res.writeHead(200, {'content-Type' : 'image/jpeg'});//change to jpeg or whatever photo is eg// gif
            res.end(data);
        })
    } else if (req.url.match('/js/'))  {//adding style folder
          const jsPath = path.join(__dirname,'public', req.url);
            fs.readFile(jsPath,'UTF-8', (err,data)=>{
              if(err) throw err;
              res.writeHead(200, {'content-Type' : 'text/js'});//change to js
              res.end(data);
        })
    }else {
        res.writeHead(200, {'content-Type' : 'plain/text'});
        res.end('404 error - file not found');
    }
  }else if (req.method === 'POST'){
    if (req.url === '/sendForm') {
      // console.log('form submitted');
      let body ='';

      req.on('data', function(data){
        body +=data; //also means body = body+data
      });

      req.on('end', function(){
        console.log('form data ends');
        console.log(body.toString());
        const formData = qs.parse(body.toString());//parse is converted to string
        console.log(formData);
      })

    }
  }
});
server.listen(3000);
console.log('YOU GOT THIS QUEEN DEV Your server is running!');
