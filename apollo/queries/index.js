import { gql } from '@apollo/client';

export const GET_PORTFOLIO = gql`
  query Portfolio($id: ID) {
    portfolio(id: $id) {
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
  }
`

export const GET_PORTFOLIOS = gql`
  query Portfolios {
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
  }
`

export const DELETE_PORTFOLIO = gql`
  mutation DeletePortfolio {
    deletePortfolio(id: $id) {
      _id,
      title
      jobTitle
      description,
      startDate,
      endDate
    }
  }
`

export const UPDATE_PORTFOLIO = gql`
  mutation UpdatePortfolio($id: ID) {
    updatePortfolio(id: $id, input: {
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
  }
`

export const CREATE_PORTFOLIO = gql`
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
  }
`
