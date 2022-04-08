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
  mutation DeletePortfolio($id: ID) {
    deletePortfolio(id: $id)
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
      startDate: "2017-01-01T23:59Z",
      endDate: "2018-01-01T23:59Z"
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
      startDate: "2016-02-23T23:59Z",
      endDate: "2017-03-14T23:59Z"
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
