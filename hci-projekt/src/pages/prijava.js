import React, { useState } from "react"
import Layout from "../components/layout"
import PrijavaStyle from "../styles/prijava.module.css"
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  CustomInput,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap"
import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap.min.css"
import classnames from "classnames"

const PrijavaPage = props => {
  const [activeTab, setActiveTab] = useState("1")
  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab)
  }

  return (
    <Layout>
      <SEO title="Prijava" />
      <div className={PrijavaStyle.page}>
        <div className={PrijavaStyle.pageDiv}>
          <h3 className={PrijavaStyle.pageTitle}>Prijava</h3>

          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  toggle("1")
                }}
              >
                <Label for="exampleName" className={PrijavaStyle.label}>
                  Registracija
                </Label>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("2")
                }}
              >
                <Label for="exampleName" className={PrijavaStyle.label}>
                  Prijava
                </Label>
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Form className={PrijavaStyle.form}>
                <div className={PrijavaStyle.forms}>
                  <FormGroup className={PrijavaStyle.formGroup}>
                    <Label for="exampleName" className={PrijavaStyle.label}>
                      Ime
                    </Label>
                    <Input type="name" name="name" id="exampleName" />
                  </FormGroup>
                  <FormGroup className={PrijavaStyle.formGroup}>
                    <Label for="exampleEmail" className={PrijavaStyle.label}>
                      e-mail
                    </Label>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="ime@domena.hr"
                    />
                  </FormGroup>
                </div>
                <div className={PrijavaStyle.forms}>
                  <FormGroup className={PrijavaStyle.formGroup}>
                    <Label for="examplePassword" className={PrijavaStyle.label}>
                      Lozinka
                    </Label>
                    <Input
                      type="password"
                      name="password"
                      id="examplePassword"
                      placeholder=""
                    />
                    <FormText color="muted">
                      Lozinka mora imati najmanje 8 znakova.
                    </FormText>
                  </FormGroup>
                  <FormGroup className={PrijavaStyle.formGroup}>
                    <Label for="examplePassword" className={PrijavaStyle.label}>
                      Potvrdite lozinku
                    </Label>
                    <Input
                      type="password"
                      name="password"
                      id="examplePassword"
                      placeholder=""
                    />
                  </FormGroup>
                </div>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox"
                  label="Prihvaćam uvjete korištenja stranice i
                slažem se s pravilima privatnosti."
                  className={PrijavaStyle.accept}
                />
                <Button className={PrijavaStyle.button} outline color="blue">
                  Registriraj se
                </Button>
              </Form>
            </TabPane>
            <TabPane tabId="2">
              <Form className={PrijavaStyle.form}>
                <div className={PrijavaStyle.forms}>
                  <FormGroup className={PrijavaStyle.formGroup}>
                    <Label for="exampleName" className={PrijavaStyle.label}>
                      Ime ili e-mail
                    </Label>
                    <Input type="name" name="name" id="exampleName" />
                  </FormGroup>
                  <FormGroup className={PrijavaStyle.formGroup}>
                    <Label for="examplePassword" className={PrijavaStyle.label}>
                      Lozinka
                    </Label>
                    <Input
                      type="password"
                      name="password"
                      id="examplePassword"
                      placeholder=""
                    />
                  </FormGroup>
                </div>
                <Button className={PrijavaStyle.button} outline color="blue">
                  Prijavite se
                </Button>
              </Form>
            </TabPane>
          </TabContent>
        </div>
      </div>
    </Layout>
  )
}

export default PrijavaPage
