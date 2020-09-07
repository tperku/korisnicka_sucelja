import React from "react"
import { Table } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TablicaStyle from "../styles/tablica.module.css"
import trogir from "../images/logo/trogir.png"
import solin from "../images/logo/solin.jpg"
import dragovoljac from "../images/logo/dragovoljac.jpg"
import kastela from "../images/logo/kastela.png"
import buzet from "../images/logo/buzet.png"
import metkovic from "../images/logo/metkovic.jpg"
import kozala from "../images/logo/kozala.jpeg"
import akademija from "../images/logo/akademija.jpg"
import senj from "../images/logo/senj.jpg"
import labin from "../images/logo/labin.jpg"
import karlovac from "../images/logo/karlovac.jpg"
import crikvenica from "../images/logo/crikvenica.jpg"

const Tablica = () => (
  <Layout>
    <SEO title="Tablica" />
    <div className={TablicaStyle.tablica}>
      <div className={TablicaStyle.tablicaDiv}>
        <h3 className={TablicaStyle.tablicaTitle}>Tablica</h3>
        <div>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Klub</th>
                <th>Odigrane</th>
                <th>Pobjede</th>
                <th>Nerijeseno</th>
                <th>Porazi</th>
                <th>Postignuti</th>
                <th>Primljeni</th>
                <th>+/- </th>
                <th>Bodovi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td className={TablicaStyle.idKluba}>
                  <img
                    className={TablicaStyle.logoKluba}
                    src={trogir}
                    alt="Logo"
                  />
                  <p>Trogir</p>
                </td>
                <td>15</td>
                <td>13</td>
                <td>1</td>
                <td>1</td>
                <td>452</td>
                <td>344</td>
                <td>+108</td>
                <td>27</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td className={TablicaStyle.idKluba}>
                  <img
                    className={TablicaStyle.logoKluba}
                    src={kozala}
                    alt="Logo"
                  />
                  <p>Kozala</p>
                </td>
                <td>15</td>
                <td>9</td>
                <td>2</td>
                <td>4</td>
                <td>442</td>
                <td>417</td>
                <td>+25</td>
                <td>20</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td className={TablicaStyle.idKluba}>
                  <img
                    className={TablicaStyle.logoKluba}
                    src={kastela}
                    alt="Logo"
                  />
                  <p>Kastela</p>
                </td>
                <td>15</td>
                <td>8</td>
                <td>2</td>
                <td>5</td>
                <td>389</td>
                <td>371</td>
                <td>+18</td>
                <td>18</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td className={TablicaStyle.idKluba}>
                  <img
                    className={TablicaStyle.logoKluba}
                    src={buzet}
                    alt="Logo"
                  />
                  <p>Buzet</p>
                </td>
                <td>15</td>
                <td>8</td>
                <td>1</td>
                <td>6</td>
                <td>415</td>
                <td>384</td>
                <td>+31</td>
                <td>17</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td className={TablicaStyle.idKluba}>
                  <img
                    className={TablicaStyle.logoKluba}
                    src={metkovic}
                    alt="Logo"
                  />
                  <p>Metkovic</p>
                </td>
                <td>15</td>
                <td>7</td>
                <td>2</td>
                <td>6</td>
                <td>391</td>
                <td>385</td>
                <td>+6</td>
                <td>16</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td className={TablicaStyle.idKluba}>
                  <img
                    className={TablicaStyle.logoKluba}
                    src={akademija}
                    alt="Logo"
                  />
                  <p>Akademija</p>
                </td>
                <td>15</td>
                <td>8</td>
                <td>0</td>
                <td>7</td>
                <td>414</td>
                <td>413</td>
                <td>+1</td>
                <td>16</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td className={TablicaStyle.idKluba}>
                  <img
                    className={TablicaStyle.logoKluba}
                    src={senj}
                    alt="Logo"
                  />
                  <p>Senj</p>
                </td>
                <td>15</td>
                <td>7</td>
                <td>1</td>
                <td>7</td>
                <td>395</td>
                <td>408</td>
                <td>-13</td>
                <td>15</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td className={TablicaStyle.idKluba}>
                  <img
                    className={TablicaStyle.logoKluba}
                    src={dragovoljac}
                    alt="Logo"
                  />
                  <p>Dragovoljac</p>
                </td>
                <td>15</td>
                <td>6</td>
                <td>1</td>
                <td>8</td>
                <td>358</td>
                <td>385</td>
                <td>-27</td>
                <td>13</td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td className={TablicaStyle.idKluba}>
                  <img
                    className={TablicaStyle.logoKluba}
                    src={labin}
                    alt="Logo"
                  />
                  <p>Labin</p>
                </td>
                <td>15</td>
                <td>6</td>
                <td>0</td>
                <td>9</td>
                <td>359</td>
                <td>368</td>
                <td>-9</td>
                <td>12</td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td className={TablicaStyle.idKluba}>
                  <img
                    className={TablicaStyle.logoKluba}
                    src={karlovac}
                    alt="Logo"
                  />
                  <p>Karlovac</p>
                </td>
                <td>15</td>
                <td>5</td>
                <td>2</td>
                <td>8</td>
                <td>356</td>
                <td>385</td>
                <td>-29</td>
                <td>12</td>
              </tr>
              <tr>
                <th scope="row">11</th>
                <td className={TablicaStyle.idKluba}>
                  <img
                    className={TablicaStyle.logoKluba}
                    src={solin}
                    alt="Logo"
                  />
                  <p>Solin</p>
                </td>
                <td>15</td>
                <td>5</td>
                <td>0</td>
                <td>10</td>
                <td>369</td>
                <td>413</td>
                <td>-44</td>
                <td>10</td>
              </tr>
              <tr>
                <th scope="row">12</th>
                <td className={TablicaStyle.idKluba}>
                  <img
                    className={TablicaStyle.logoKluba}
                    src={crikvenica}
                    alt="Logo"
                  />
                  <p>Crikvenica</p>
                </td>
                <td>15</td>
                <td>2</td>
                <td>0</td>
                <td>13</td>
                <td>367</td>
                <td>434</td>
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
