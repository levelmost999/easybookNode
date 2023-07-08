const express = require('express')
const bodyparse = require('body-parser')
const util = require('util')
import routers from './routers/routers'

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
    let  time = new Date();
    req.startTime = time
    next()
  })

  // 解析前端发来的表单格式
  app.use(bodyparse.urlencoded({extended: true}))
  // 解析前端json格式
  app.use(bodyparse.json())
  app.use('/api',routers)

  app.get('*', (req, res) =>{
    console.log('404');
    res.status(404).send({
      code:404,
      data:404
    })
  })
  return app
}
