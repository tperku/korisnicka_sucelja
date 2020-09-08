import React, { useState } from "react"
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Collapse,
  Button,
  ListGroup,
  ListGroupItem,
} from "reactstrap"
import TimoviStyle from "../styles/timovi.module.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import trogir from "../images/logo/trogir.png"
import solin from "../images/logo/solin.jpg"
import kozala from "../images/logo/kozala.jpeg"

const Timovi = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Layout>
      <SEO title="Timovi" />
      <h3 className={TimoviStyle.title}>Timovi</h3>
      <div className={TimoviStyle.zaslon}>
        <Card className={TimoviStyle.kartica}>
          <CardImg
            className={TimoviStyle.slika}
            width="100px"
            src={trogir}
            alt="trogir"
          />
          <CardBody>
            <CardTitle>MRK TROGIR</CardTitle>
            <Button
              color="primary"
              onClick={toggle}
              style={{ marginBottom: "1rem" }}
            >
              ROSTER 2019/2020
            </Button>
            <Collapse isOpen={isOpen}>
              <ListGroup>
                <ListGroupItem>Mate Matic</ListGroupItem>
                <ListGroupItem>Jure Juric</ListGroupItem>
                <ListGroupItem>Ante Jureskin</ListGroupItem>
                <ListGroupItem>Dino Petric</ListGroupItem>
                <ListGroupItem>Mate Matic</ListGroupItem>
                <ListGroupItem>Jure Juric</ListGroupItem>
                <ListGroupItem>Ante Jureskin</ListGroupItem>
                <ListGroupItem>Dino Petric</ListGroupItem>
                <ListGroupItem>Mate Matic</ListGroupItem>
                <ListGroupItem>Jure Juric</ListGroupItem>
                <ListGroupItem>Ante Jureskin</ListGroupItem>
                <ListGroupItem>Dino Petric</ListGroupItem>
              </ListGroup>
            </Collapse>
          </CardBody>
        </Card>
        <Card className={TimoviStyle.kartica}>
          <CardImg
            className={TimoviStyle.slika}
            width="100px"
            src={solin}
            alt="solin"
          />
          <CardBody>
            <CardTitle>RK SOLIN</CardTitle>
            <Button
              color="primary"
              onClick={toggle}
              style={{ marginBottom: "1rem" }}
            >
              ROSTER 2019/2020
            </Button>
            <Collapse isOpen={isOpen}>
              <ListGroup>
                <ListGroupItem>Mate Matic</ListGroupItem>
                <ListGroupItem>Jure Juric</ListGroupItem>
                <ListGroupItem>Ante Jureskin</ListGroupItem>
                <ListGroupItem>Dino Petric</ListGroupItem>
                <ListGroupItem>Mate Matic</ListGroupItem>
                <ListGroupItem>Jure Juric</ListGroupItem>
                <ListGroupItem>Ante Jureskin</ListGroupItem>
                <ListGroupItem>Dino Petric</ListGroupItem>
                <ListGroupItem>Mate Matic</ListGroupItem>
                <ListGroupItem>Jure Juric</ListGroupItem>
                <ListGroupItem>Ante Jureskin</ListGroupItem>
                <ListGroupItem>Dino Petric</ListGroupItem>
              </ListGroup>
            </Collapse>
          </CardBody>
        </Card>
        <Card className={TimoviStyle.kartica}>
          <CardImg
            className={TimoviStyle.slika}
            width="100px"
            src={kozala}
            alt="kozala"
          />
          <CardBody>
            <CardTitle>RK KOZALA</CardTitle>
            <Button
              color="primary"
              onClick={toggle}
              style={{ marginBottom: "1rem" }}
            >
              ROSTER 2019/2020
            </Button>
            <Collapse isOpen={isOpen}>
              <ListGroup>
                <ListGroupItem>Mate Matic</ListGroupItem>
                <ListGroupItem>Jure Juric</ListGroupItem>
                <ListGroupItem>Ante Jureskin</ListGroupItem>
                <ListGroupItem>Dino Petric</ListGroupItem>
                <ListGroupItem>Mate Matic</ListGroupItem>
                <ListGroupItem>Jure Juric</ListGroupItem>
                <ListGroupItem>Ante Jureskin</ListGroupItem>
                <ListGroupItem>Dino Petric</ListGroupItem>
                <ListGroupItem>Mate Matic</ListGroupItem>
                <ListGroupItem>Jure Juric</ListGroupItem>
                <ListGroupItem>Ante Jureskin</ListGroupItem>
                <ListGroupItem>Dino Petric</ListGroupItem>
              </ListGroup>
            </Collapse>
          </CardBody>
        </Card>
      </div>
    </Layout>
  )
}

export default Timovi
