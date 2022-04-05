import axios from "axios";
import Link from 'next/link'
import { useState } from "react";

import PortfolioCard from "@/components/portfolios/PortfolioCard";

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

const graphCreatePortfolio = () => {
  const query = `
    mutation CreatePortfolio {
      createPortfolio(input: {
        title: "Job in Netcentric",
        company: "Job in Netcentric",
        companyWebsite: "Job in Netcentric",
        location: "Job in Netcentric",
        jobTitle: "Job in Netcentric",
        description: "Job in Netcentric",
        startDate: "12/12/2012",
        endDate: "12/12/2012"
      }) {
        _id,
        title
        jobTitle
        description,
        startDate,
        endDate
      }
    }`

  return axios
    .post('http://localhost:3000/graphql', { query })
    .then(({ data: graph }) => graph)
    .then(({ data }) => data.createPortfolio)
}

const graphUpdatePortfolio = (id) => {
  const query = `
    mutation UpdatePortfolio {
      updatePortfolio(id: "${id}", input: {
        title: "UPDATED Job in Netcentric",
        company: "UPDATED Job in Netcentric",
        companyWebsite: "UPDATED Job in Netcentric",
        location: "UPDATED Job in Netcentric",
        jobTitle: "UPDATED Job in Netcentric",
        description: "UPDATED Job in Netcentric",
        startDate: "12/12/2012",
        endDate: "12/12/2012"
      }) {
        _id,
        title
        jobTitle
        description,
        startDate,
        endDate
      }
    }`

  return axios
    .post('http://localhost:3000/graphql', { query })
    .then(({ data: graph }) => graph)
    .then(({ data }) => data.updatePortfolio)
}

const Portfolios = ({ data }) => {
  const [portfolios, setPortfolios] = useState(data.portfolios || [])
  const createPortfolio = async () => {
    const newPortfolio = await graphCreatePortfolio();
    const newPortfolios = [...portfolios, newPortfolio]
    setPortfolios(newPortfolios)
  }

  const updatePortfolio = async (id) => {
    console.error(id)

    const updated = await graphUpdatePortfolio(id)
    console.error(updated)

    const index = portfolios.findIndex((portfolio) => portfolio._id === id)
    console.error(index)
    // const oldPortfolio = data.portfolios[index]
    const newPortfolios = [ ...data.portfolios ]
    newPortfolios[index] = updated
    console.error(newPortfolios)
    setPortfolios(newPortfolios)
  }

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
              <button className="btn btn-warning" onClick={() => updatePortfolio(portfolio._id)}>Update portfolio</button>
            </div>
          )
          )}
        </div>
      </section>
      <a href="" className="btn btn-main bg-blue ttu">See More Portfolios</a>
    </>
  )
}

Portfolios.getInitialProps = async () => {
  const portfolios = await fetchPortfolios()
  return {
    data: { portfolios }
  }
}

export default Portfolios;
