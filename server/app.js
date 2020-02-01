const Koa = require('koa')
const app = new Koa()
const cors = require('koa2-cors')
const fileUpload = require('./upload')

app.use(cors())

app.use(async ctx => {
    console.log(ctx.url, ctx.method)

    if (ctx.url === '/upload' && ctx.method === 'POST') {
        const { params, files } = await fileUpload(ctx.req)

        console.log(6666, params, files)

        return ctx.body = {
            code: 0,
            message: 'ok'
        }
    }

    return ctx.body = {
        code: 0,
        message: '123'
    }
})

app.listen(3600)
console.log('Koa server listen on 3600')
