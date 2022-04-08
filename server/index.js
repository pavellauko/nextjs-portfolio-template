const express = require('express')
const next = require('next')

const createApolloServer = require('./graphql')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// Connect to DB
const db = require('./database')
db.connect();

app.prepare().then(async () => {
  const server = express();

  const apolloServer = createApolloServer();
  await apolloServer.start()
  apolloServer.applyMiddleware({ app: server })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
