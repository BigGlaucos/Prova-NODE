// 1

// const http = require('http')
// PORT = 5000
// const os = require('os')




// const server = http.createServer((req, res)=>{


//     if(req.url === '/info'){
   
//         res.setHeader('Content-Type','application/json' )
//         res.write(os.type())
//         res.write(os.freemem())
//         res.write(os.homedir())
        
//         res.end()
//       }
// });

// const objeto =[
// {Sistema:os.type()},
// {Memoria:os.freemem()},
// {Diretorio:os.homedir()},
// ]

// const json = JSON.stringify(objeto)
// console.log(json)
// server.listen(PORT)

//------------------//----------//---------//---------------//-----------------//---------------//

// 2

// const path = require('path');

// const custumPath = 'https://al.senai.br/cursos/tecnico-em-informatica-para-internet/planodecurso.pdf'

// console.log(path.dirname(custumPath)); 

// console.log(path.basename(custumPath));

// console.log(path.extname(custumPath));


// console.log(path.resolve('https://al.senai.br/cursos/tecnico-em-informatica-para-internet/planodecurso.pdf')); 



//------------------//----------//---------//---------------//-----------------//---------------//
// 3
// const url = require('url')
// const myURL =  new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash'); 
// myURL.pathname = '/a/b/c';
// myURL.search = '?d=e';
// myURL.hash = '#fgh'; 


// console.log(myURL);

// console.log(myURL.host)

// console.log(myURL.pathname)

// console.log(myURL.search)

// console.log(myURL.searchParams)


//------------------//----------//---------//---------------//-----------------//---------------//

// 4

// const fs = require('fs');
// fs.rename('arquive.txt','ArquivoRenomeado.txt',function(err){
 
//     if(err) throw err; 
    
//     console.log('Arquivo Renomeado');
// })

//------------------//----------//---------//---------------//-----------------//---------------//

// 5

// const os = require('os');

// console.log(os.cpus());
