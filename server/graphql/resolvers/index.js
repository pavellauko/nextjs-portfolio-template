
const Portfolio = require('../../database/models/portfolio');

const data = {
  portfolios: [
    {
      _id: "sad87da79ssss",
      title: 'Job in Netcentric',
      company: 'Netcentric',
      companyWebsite: 'www.google.com',
      location: 'Spain, Barcelona',
      jobTitle: 'Engineer',
      description: 'Doing something, programing....',
      startDate: '2014-01-01T23:59Z',
      endDate: '2016-01-01T23:59Z'
    },
    {
      _id: "da789ad1",
      title: 'Job in Siemens',
      company: 'Siemens',
      companyWebsite: 'www.google.com',
      location: 'Slovakia, Kosice',
      jobTitle: 'Software Engineer',
      description: 'Responsoble for parsing framework for JSON medical data.',
      startDate: '2011-01-01T23:59Z',
      endDate: '2013-01-01T23:59Z'
    },
    {
      _id: "sadcxv9",
      title: 'Work in USA',
      company: 'WhoKnows',
      companyWebsite: 'www.google.com',
      location: 'USA, Montana',
      jobTitle: 'Housekeeping',
      description: 'So much responsibility....Overloaaaaaad',
      startDate: '2010-01-01T23:59Z',
      endDate: '2011-01-01T23:59Z'
    }
  ]
}

exports.portfolioQueries = {
  portfolio: async (root, { id }) => {
    return await Portfolio.findById(id)
  },
  portfolios: async () => {
    return await Portfolio.find({})
  },
}


exports.portfolioMutations = {
  createPortfolio: async (root, { input }) => {
    const newPortfolio = await Portfolio.create(input)
    return newPortfolio
  },
  updatePortfolio: async (root, { id, input }) => {
    const updatedPortfolio = await Portfolio.findByIdAndUpdate(id, input, { new: true })
    return updatedPortfolio
  },
  deletePortfolio: async (root, { id }) => {
    const deleted = await Portfolio.findByIdAndRemove(id)
    return deleted._id
  }
}
