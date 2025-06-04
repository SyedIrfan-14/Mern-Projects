// const http =  require('http')

// function rqlistener(req,res){

// }

// http.createServer(rqlistener)

const http = require('http')
const myserver = http.createServer((req,res)=>{
 
  res.setHeader('content-type','text/html')
  res.write('<html>')
  res.write('<head><title> hello node </title></head>')
  res.write('<body><h1> Hello from node js </h1></body>')
  res.write('</html>')
  res.end()
})

myserver.listen(3000)