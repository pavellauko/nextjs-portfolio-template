import withApolloOriginal from 'next-with-apollo';
// import ApolloClient, { InMemoryCache } from 'apollo-boost';
// import { ApolloProvider } from '@apollo/react-hooks';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

export const withApollo = withApolloOriginal(
  ({ initialState }) => {
    return new ApolloClient({
      uri: 'http://localhost:3000/graphql',
      cache: new InMemoryCache().restore(initialState || {})
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    }
  }
);
