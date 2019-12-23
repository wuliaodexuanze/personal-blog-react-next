const Koa = require('koa')
const Router = require('koa-router')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()

  router.get('/article/:id', async (ctx) => {
    const id = ctx.params.id
    await handle(ctx.req, ctx.res, {
      pathname: '/article',
      query: {
        id
      }
    })
    ctx.response = false
  })

  router.get('/tags/:id', async (ctx) => {
    const id = ctx.params.id
    if (Number(id)) {
      await handle(ctx.req, ctx.res, {
        pathname: '/tags',
        query: {
          id
        }
      })
    } else {
      await handle(ctx.req, ctx.res, {
        pathname: '/error'
      })
    }
    
    ctx.response = false
  })

  router.get('/blog/web', async (ctx) => {
    await handle(ctx.req, ctx.res, {
      pathname: '/blog',
      query: {
        type: '/web'
      }
    })
    ctx.response = false
  })

  router.get('/blog/server', async (ctx) => {
    await handle(ctx.req, ctx.res, {
      pathname: '/blog',
      query: {
        type: '/server'
      }
    })
    ctx.response = false
  })

  router.get('/blog', async (ctx) => {
    await handle(ctx.req, ctx.res, {
      pathname: '/blog',
      query: {
        type: '/web'
      }
    })
    ctx.response = false
  })

  server.use(router.routes())

  server.use(async (ctx) => {
    await handle(ctx.req, ctx.res)
    ctx.response = false
  })
  server.listen(3000, () => {
    console.log('server listening on 3000')
  })
})