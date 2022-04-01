import axios from "axios";
import Link from 'next/link'

import PortfolioCard from "../../components/portfolios/PortfolioCard";

const fetchPortfolios = () => {
  const query = `query Portfolios {
    portfolios {
      _id,
      title,
      company,
      companyWebsite,
      location,
      jobTitle,
      description,
      startDate,
      endDate
    }
  }`

  return axios
    .post('http://localhost:3000/graphql', { query })
    .then(({ data: graph }) => graph)
    .then(({ data }) => data.portfolios)
    .then((portfolios) => portfolios)
}

const Portfolios = ({ portfolios }) => (
  <>
    <section className="section-title">
      <div className="px-2">
        <div className="pt-5 pb-4">
          <h1>Portfolios</h1>
        </div>
      </div>
    </section>

    <section className="pb-5">
      <div className="row">
        {portfolios.map((portfolio) => (
          <div className="col-md-4">
            <Link href={`/portfolios/[id]`} as={`/portfolios/${portfolio._id}`}>
              <a className="cardLink">
                <PortfolioCard key={portfolio._id} portfolio={portfolio} />
              </a>
            </Link>
          </div>
        )
        )}
      </div>
    </section>
    <a href="" className="btn btn-main bg-blue ttu">See More Portfolios</a>
  </>
)

Portfolios.getInitialProps = async () => {
  const portfolios = await fetchPortfolios()
  return {
    portfolios
  }
}

export default Portfolios;
