import React from "react"
import "../styles/style.css"
import IndexStyle from "../styles/index.module.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Naslovnica " />
    <div className={IndexStyle.page}>
      <div className={IndexStyle.pageDiv}>
        <h3 className={IndexStyle.tittle}>
          Dobrodosli na sluzbenu stranicu 1.HRL JUG
        </h3>
        <p className={IndexStyle.tekst}>
          Na ovoj stranici mozete pratiti rezultate i roster momcadi koje
          nastupaju u 1.HRL JUG te vijesti vezane uz rukomet u Hrvatskoj
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
