import jsonServer from 'json-server'

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
server.use(router)
server.use(middlewares)
server.listen(3001, () => {
  console.log('JSON Server is running')
})
