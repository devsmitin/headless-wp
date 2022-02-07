import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <header className="global-header">
        {isHomePage ? (
          <h1 className="main-heading">
            <Link to="/">{parse(title)}</Link>
          </h1>
        ) : (
          <Link className="header-link-home" to="/">
            {title}
          </Link>
        )}
      </header>

      <main>{children}</main>
      <nav className="main-navigation">
        <ul className="main-navigation-list">
          <li className="main-navigation-list-item">
            <Link to="/">Home</Link>
          </li>
          <li className="main-navigation-list-item">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <footer>
        <a
          href="https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-blog/"
          target="_blank"
          rel="noreferrer"
        >
          Gatsby starter blog
        </a>{" "}
        updated by{" "}
        <a href="https://devsmit.in/" target="_blank" rel="noreferrer">
          Smit Modi
        </a>
      </footer>
    </div>
  )
}

export default Layout
