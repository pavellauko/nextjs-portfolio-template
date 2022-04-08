const express = require('express')
const next = require('next')
const { ApolloServer, gql } = require('apollo-server-express')
const { portfolioTypes } = require('./graphql/types')
const { portfolioQueries, portfolioMutations } = require('./graphql/resolvers')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// Connect to DB
const db = require('./database')
db.connect();

app.prepare().then(async () => {
  const server = express();

  // Construct a schema using GRAPHQL schema language
  const typeDefs = gql`
    ${portfolioTypes}

    type Query {
      portfolio(id: ID): Portfolio
      portfolios: [Portfolio]
    }

    type Mutation {
      createPortfolio(input: PortfolioInput): Portfolio
      updatePortfolio(id: ID, input: PortfolioInput): Portfolio
      deletePortfolio(id: ID): ID
    }
  `;

  // the root provides a resolver for each API endpoint
  const resolvers = {
    Query: {
      ...portfolioQueries,
    },
    Mutation: {
      ...portfolioMutations,
    },
  }

  const apolloServer = new ApolloServer({ typeDefs, resolvers })
  // require('./graphql').createApolloServer();
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
