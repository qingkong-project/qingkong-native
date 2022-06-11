const express = require('express')
const history = require('connect-history-api-fallback')
const { createProxyMiddleware } = require('http-proxy-middleware')
const proxy = require('./config/proxy')

// 读取机器环境配置代理
// 发布到captain上，机器内脚本会给package.json加上 port 和 env，环境枚举为 FAT LPT FWS UAT PROD
// 由于proxy文件中不存在UAT代理，会导致下面的proxy middleware读到undifined

const env = 'PROD'

for (const proxyKey in proxy[env]) {
    app.use(
        proxyKey,
        createProxyMiddleware({
            target: proxy[env][proxyKey].target,
            changeOrigin: proxy[env][proxyKey].changeOrigin,
            pathRewrite: proxy[env][proxyKey].pathRewrite,
        }),
    )
}

const app = express()
app.use(history()) // 这里千万要注意，要在static静态资源上面
app.use(express.static('dist'))



app.listen(8080,()=>{
    console.log('hi')
})
