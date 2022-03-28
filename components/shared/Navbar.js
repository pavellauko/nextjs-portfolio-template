import { Navbar, Nav } from 'react-bootstrap'
import Link from 'next/link'

const AppLink = ({ children, className, href }) => (
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
)

const AppNavbar = () => (
    <div className="navbar-wrapper">
      <Navbar expand="lg" className="navbar-dark fj-mw9" navbarScroll>
        <AppLink className="navbar-brand mr-3 font-weight-bold" href="/">
          Ruff
        </AppLink>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto my-2 my-lg-0">
            <AppLink className="nav-link mr-3" href="/portfolios">
              Portfolio
            </AppLink>
            <AppLink className="nav-link mr-3" href="/cv">
              Cv
            </AppLink>
            <AppLink className="nav-link mr-3" href="/forum/categories">
              Forum
            </AppLink>
          </Nav>
          <Nav>
            <AppLink className="nav-link mr-3" href="/register">
              Sign Up
            </AppLink>
            <AppLink className="nav-link btn btn-success bg-green-2 bright" href="/login">
              Sign In
            </AppLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
)

export default AppNavbar;