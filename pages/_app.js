import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '../components/shared/Navbar'
import Hero from '../components/shared/Hero'
import '../styles/index.scss';

function MyApp({ Component, pageProps }) {
    return (
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
    )
}

export default MyApp