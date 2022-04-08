exports.portfolioQueries = {
  portfolio: async (root, { id }, ctx) => {
    return await ctx.models.Portfolio.getById(id);
  },
  portfolios: async (root, args, ctx) => {
    return await ctx.models.Portfolio.getAll({})
  },
}

exports.portfolioMutations = {
  createPortfolio: async (root, { input }, ctx) => {
    const newPortfolio = await ctx.models.Portfolio.create(input)
    return newPortfolio
  },
  updatePortfolio: async (root, { id, input }, ctx) => {
    const updatedPortfolio = await ctx.models.Portfolio.findAndUpdate(id, input)
    return updatedPortfolio
  },
  deletePortfolio: async (root, { id }, ctx) => {
    const deleted = await ctx.models.Portfolio.findAndDelete(id)
    return deleted._id
  }
}
