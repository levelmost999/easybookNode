let express = require('express')
let bodyparse = require('body-parser')
let util = require('util')

export default function (){
  let app = express()
  // 暴露app.listen 把监听方法延迟
  app.listenAsync = util.promisify(app.listen)

  // 跨域
  app.use((req, res, next) =>{
    // 来源 方法 头（token...）
    res.setHeader('Access-Control-Allow-Orgin', '*')
    res.setHeader('Access-Control-Allow-Methods', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    next()
  })


  // 解析前端json格式
  app.use(bodyparse.json())
  // 解析前端发来的表单格式
  app.use(bodyparse.urlencoded({extended: true}))


  app.get('/', (req, res) =>{
    console.log('in');
    res.status(200).send('hello')
  })
  // app.listen(3000, () =>{
  //   console.log('port ok')
  // })
  return app
}
