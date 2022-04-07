import { useQuery, useMutation } from "@apollo/client";
import Link from 'next/link'
import { getDataFromTree } from "@apollo/client/react/ssr";

import { withApollo } from "@/hoc/withApollo"
import PortfolioCard from "@/components/portfolios/PortfolioCard";
import { GET_PORTFOLIOS, CREATE_PORTFOLIO, DELETE_PORTFOLIO, UPDATE_PORTFOLIO } from "@/apollo/queries";

const Portfolios = () => {
  const { data } = useQuery(GET_PORTFOLIOS)
  const [updatePortfolio] = useMutation(UPDATE_PORTFOLIO)
  const [deletePortfolio] = useMutation(DELETE_PORTFOLIO, {
    update: (cache, { data: { deletePortfolio } }) => {
      const { portfolios } = cache.readQuery({ query: GET_PORTFOLIOS })
      const newPortfolios = portfolios.filter((portfolio) => portfolio._id !== deletePortfolio)
      cache.writeQuery({
        query: GET_PORTFOLIOS,
        data: { portfolios: newPortfolios }
      })
    }
  })

  const [createPortfolio] = useMutation(CREATE_PORTFOLIO, {
    update: (cache, { data: { createPortfolio } }) => {
      const { portfolios } = cache.readQuery({ query: GET_PORTFOLIOS })
      cache.writeQuery({
        query: GET_PORTFOLIOS,
        data: { portfolios: portfolios.concat([createPortfolio]) }
      })
    }
  })

  const portfolios = data?.portfolios || []
  return (
    <>
      <section className="section-title">
        <div className="px-2">
          <div className="pt-5 pb-4">
            <h1>Portfolios</h1>
          </div>
        </div>
      </section>

      <section className="pb-5">
        <button className="btn btn-primary" onClick={createPortfolio}>Create new</button>
        <div className="row">
          {portfolios.map((portfolio) => (
            <div key={portfolio._id} className="col-md-4">
              <Link href={`/portfolios/[id]`} as={`/portfolios/${portfolio._id}`}>
                <a className="cardLink">
                  <PortfolioCard portfolio={portfolio} />
                </a>
              </Link>
              <button className="btn btn-warning" onClick={() => updatePortfolio({ variables: { id: portfolio._id }})}>Update portfolio</button>
              <button className="btn btn-danger" onClick={() => deletePortfolio({ variables: { id: portfolio._id }})}>Delete portfolio</button>
            </div>
          )
          )}
        </div>
      </section>
      <a href="" className="btn btn-main bg-blue ttu">See More Portfolios</a>
    </>
  )
}

export default withApollo(Portfolios, { getDataFromTree });
