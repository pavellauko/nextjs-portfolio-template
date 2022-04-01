const express = require('express')
const next = require('next')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')
const { portfolioTypes } = require('./graphql/types')
const { portfolioResolvers } = require('./graphql/resolvers')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// Connect to DB
// const db = require('./database')
// db.connect();

app.prepare().then(() => {
  const server = express();

  // Construct a schema using GRAPHQL schema language
  const schema = buildSchema(`
    ${portfolioTypes}

    type Query {
      hello: String
      portfolio(id: ID): Portfolio
      portfolios: [Portfolio]
    }

    type Mutation {
      createPortfolio(input: PortfolioInput): Portfolio
    }
  `);

  // the root provides a resolver for each API endpoint
  const root = {
    ...portfolioResolvers,
  }

  server.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  }))
  // require('./middlewares').init(server, db);

  // const apolloServer = require('./graphql').createApolloServer();
  // apolloServer.applyMiddleware({app: server})

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
