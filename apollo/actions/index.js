import { useQuery, useMutation } from "@apollo/client";

import { GET_PORTFOLIOS, CREATE_PORTFOLIO, DELETE_PORTFOLIO, UPDATE_PORTFOLIO } from "@/apollo/queries";

export const useGetPortfolios = () => useQuery(GET_PORTFOLIOS)

export const useUpdatePortfolio = () => useMutation(UPDATE_PORTFOLIO)

export const useDeletePortfolio = () => useMutation(DELETE_PORTFOLIO, {
  update: (cache, { data: { deletePortfolio } }) => {
    const { portfolios } = cache.readQuery({ query: GET_PORTFOLIOS })
    const newPortfolios = portfolios.filter((portfolio) => portfolio._id !== deletePortfolio)
    cache.writeQuery({
      query: GET_PORTFOLIOS,
      data: { portfolios: newPortfolios }
    })
  }
})

export const useCreatePortfolio = () => useMutation(CREATE_PORTFOLIO, {
  update: (cache, { data: { createPortfolio } }) => {
    const { portfolios } = cache.readQuery({ query: GET_PORTFOLIOS })
    cache.writeQuery({
      query: GET_PORTFOLIOS,
      data: { portfolios: portfolios.concat([createPortfolio]) }
    })
  }
})
