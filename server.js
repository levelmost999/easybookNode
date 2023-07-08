import myexpress from './express'
import presetEnv from './config/config'

let server = myexpress()
let port = presetEnv.port
console.log(process.env.port);
server.listenAsync(port).then(()=>{
  console.log('启动服务')
});