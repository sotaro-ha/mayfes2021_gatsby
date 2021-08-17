import * as React from 'react'
import { Link } from 'gatsby'
import Header from "../components/header"
import Footer from "../components/footer"
import * as Styles from "../components/layout.module.scss"
   


const Layout = ({ pageTitle, children }) => {
  return (
    <div >
        <Header />
      <title>{pageTitle}</title>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout