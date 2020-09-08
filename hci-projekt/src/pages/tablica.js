import React from "react"
import { Table } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TablicaStyle from "../styles/tablica.module.css"

const Tablica = () => (
  <Layout>
    <SEO title="Tablica" />
    <div className={TablicaStyle.tablica}>
      <div>
        <h3 className={TablicaStyle.tablicaTitle}>Tablica</h3>
        <div className={TablicaStyle.tablicaDiv}>
          <Table responsive hover>
            <thead>
              <tr className={TablicaStyle.mainTable}>
                <th>#</th>
                <th>KLUB</th>
                <th>P</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th className={TablicaStyle.responsiveTable}>GS</th>
                <th className={TablicaStyle.responsiveTable}>GC</th>
                <th>+/- </th>
                <th>BODOVI</th>
              </tr>
            </thead>
            <tbody>
              <tr className={TablicaStyle.secondaryTable}>
                <th scope="row">1</th>
                <td>TROGIR</td>
                <td>15</td>
                <td>13</td>
                <td>1</td>
                <td>1</td>
                <td className={TablicaStyle.responsiveTable}>452</td>
                <td className={TablicaStyle.responsiveTable}>344</td>
                <td>+108</td>
                <td>27</td>
              </tr>
              <tr className={TablicaStyle.secondaryTable}>
                <th scope="row">2</th>
                <td>KOZALA</td>
                <td>15</td>
                <td>9</td>
                <td>2</td>
                <td>4</td>
                <td className={TablicaStyle.responsiveTable}>442</td>
                <td className={TablicaStyle.responsiveTable}>417</td>
                <td>+25</td>
                <td>20</td>
              </tr>
              <tr className={TablicaStyle.secondaryTable}>
                <th scope="row">3</th>
                <td>KASTELA</td>
                <td>15</td>
                <td>8</td>
                <td>2</td>
                <td>5</td>
                <td className={TablicaStyle.responsiveTable}>389</td>
                <td className={TablicaStyle.responsiveTable}>371</td>
                <td>+18</td>
                <td>18</td>
              </tr>
              <tr className={TablicaStyle.secondaryTable}>
                <th scope="row">4</th>
                <td>BUZET</td>
                <td>15</td>
                <td>8</td>
                <td>1</td>
                <td>6</td>
                <td className={TablicaStyle.responsiveTable}>415</td>
                <td className={TablicaStyle.responsiveTable}>384</td>
                <td>+31</td>
                <td>17</td>
              </tr>
              <tr className={TablicaStyle.secondaryTable}>
                <th scope="row">5</th>
                <td>METKOVIC</td>
                <td>15</td>
                <td>7</td>
                <td>2</td>
                <td>6</td>
                <td className={TablicaStyle.responsiveTable}>391</td>
                <td className={TablicaStyle.responsiveTable}>385</td>
                <td>+6</td>
                <td>16</td>
              </tr>
              <tr className={TablicaStyle.secondaryTable}>
                <th scope="row">6</th>
                <td>AKADEMIJA</td>
                <td>15</td>
                <td>8</td>
                <td>0</td>
                <td>7</td>
                <td className={TablicaStyle.responsiveTable}>414</td>
                <td className={TablicaStyle.responsiveTable}>413</td>
                <td>+1</td>
                <td>16</td>
              </tr>
              <tr className={TablicaStyle.secondaryTable}>
                <th scope="row">7</th>
                <td>SENJ</td>
                <td>15</td>
                <td>7</td>
                <td>1</td>
                <td>7</td>
                <td className={TablicaStyle.responsiveTable}>395</td>
                <td className={TablicaStyle.responsiveTable}>408</td>
                <td>-13</td>
                <td>15</td>
              </tr>
              <tr className={TablicaStyle.secondaryTable}>
                <th scope="row">8</th>
                <td>DRAGOVOLJAC</td>
                <td>15</td>
                <td>6</td>
                <td>1</td>
                <td>8</td>
                <td className={TablicaStyle.responsiveTable}>358</td>
                <td className={TablicaStyle.responsiveTable}>385</td>
                <td>-27</td>
                <td>13</td>
              </tr>
              <tr className={TablicaStyle.secondaryTable}>
                <th scope="row">9</th>
                <td>LABIN</td>
                <td>15</td>
                <td>6</td>
                <td>0</td>
                <td>9</td>
                <td className={TablicaStyle.responsiveTable}>359</td>
                <td className={TablicaStyle.responsiveTable}>368</td>
                <td>-9</td>
                <td>12</td>
              </tr>
              <tr className={TablicaStyle.secondaryTable}>
                <th scope="row">10</th>
                <td>KARLOVAC</td>
                <td>15</td>
                <td>5</td>
                <td>2</td>
                <td>8</td>
                <td className={TablicaStyle.responsiveTable}>356</td>
                <td className={TablicaStyle.responsiveTable}>385</td>
                <td>-29</td>
                <td>12</td>
              </tr>
              <tr className={TablicaStyle.secondaryTable}>
                <th scope="row">11</th>
                <td>SOLIN</td>
                <td>15</td>
                <td>5</td>
                <td>0</td>
                <td>10</td>
                <td className={TablicaStyle.responsiveTable}>369</td>
                <td className={TablicaStyle.responsiveTable}>413</td>
                <td>-44</td>
                <td>10</td>
              </tr>
              <tr className={TablicaStyle.secondaryTable}>
                <th scope="row">12</th>
                <td>CRIKVENICA</td>
                <td>15</td>
                <td>2</td>
                <td>0</td>
                <td>13</td>
                <td className={TablicaStyle.responsiveTable}>367</td>
                <td className={TablicaStyle.responsiveTable}>434</td>
                <td>-67</td>
                <td>4</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  </Layout>
)

export default Tablica
