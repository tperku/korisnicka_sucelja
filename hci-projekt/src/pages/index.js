import React from "react"
import { Link } from "gatsby"
import "../styles/style.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Naslovnica " />
    <h1>Hi people sigmunds</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
    <h5>
      <Link to="/prijava/">Prijava</Link>
    </h5>
    <p>foieoirfoirejvroijv</p>
    <p>foieoirfoirejvroijv</p>
    <p>foieoirfoirejvroijv</p>
    <p>foieoirfoirejvroijv</p>
    <p>foieoirfoirejvroijv</p>
    <h5>
      <Link to="/404/">Error page</Link>
    </h5>
    <h5>
      <Link to="/rezultati/">Rezultati</Link>
    </h5>
    <h5>
      <Link to="/tablica/">Tablica</Link>
    </h5>
    <h5>
      <Link to="/timovi/">Timovi</Link>
    </h5>
    <h5>
      <Link to="/novosti/">Obavijesti</Link>
    </h5>
    <p>foieoirfoirejvroijv</p>
    <p>foieoirfoirejvroijv</p>
  </Layout>
)

export default IndexPage
