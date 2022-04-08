const mongoose = require('mongoose')
const { ApolloServer, gql } = require('apollo-server-express')

const { portfolioTypes } = require('../graphql/types')
const { portfolioQueries, portfolioMutations } = require('../graphql/resolvers')

const Portfolio = require('../graphql/models/Portfolio')

const createApolloServer = () => {
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

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({
      models: {
        Portfolio: new Portfolio(mongoose.model('Portfolio')),
      }
    })
  })

  return apolloServer
}

module.exports = createApolloServer
