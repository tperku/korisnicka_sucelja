import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Rezultati = () => (
  <Layout>
    <SEO title="Rezultati" />
    <h1>Danasnji rezultati</h1>
    <p>Ribola-trogir 22:28</p>
    <Link to="/">Početna</Link>
  </Layout>
)

export default Rezultati
