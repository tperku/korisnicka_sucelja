import React from "react"
import RezultatiStyle from "../styles/rezultati.module.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Rezultati = () => (
  <Layout>
    <SEO title="Rezultati" />
    <div className={RezultatiStyle.page}>
      <div className={RezultatiStyle.pageDiv}>
        <h3 className={RezultatiStyle.tittle}>REZULTATI </h3>
        <h4 className={RezultatiStyle.naslov}>REZULTATI PROSLOG KOLA:</h4>
        <p className={RezultatiStyle.tekst}>KARLOVAC 26:25 BUZET</p>
        <p className={RezultatiStyle.tekst}>SOLIN 31:23 CRIKVENICA</p>
        <p className={RezultatiStyle.tekst}>SENJ 29:28 KOZALA</p>
        <p className={RezultatiStyle.tekst}>AKADEMIJA 24:16 LABIN</p>
        <p className={RezultatiStyle.tekst}>DRAGOVOLJAC 17:27 TROGIR</p>
        <p className={RezultatiStyle.tekst}>KASTELA 26:26 METKOVIC</p>
      </div>
    </div>
  </Layout>
)

export default Rezultati
