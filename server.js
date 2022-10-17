// server.js
import myexpress from './config/express'

let server = myexpress()
let port = process.env.PORT || 7777
console.log(process.env);
server.listenAsync(port).then(()=>{
  console.log('启动服务')
});