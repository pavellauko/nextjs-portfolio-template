import 'bootstrap/dist/css/bootstrap.min.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import Navbar from '../components/shared/Navbar'
import Hero from '../components/shared/Hero'
import '../styles/index.scss';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <div className="portfolio-app">
        <Navbar />
        {Component.name === 'Home' && <Hero />}
        <div className="container">
          <Component {...pageProps} />
        </div>
        {Component.name === 'Home' && (
          <footer id="sticky-footer" className="py-4 bg-black text-white-50 py-3">
            <div className="container text-center">
              <small>Copyright &copy; Your Website</small>
            </div>
          </footer>
        )}
      </div>
    </ApolloProvider>
  )
}

export default MyApp
