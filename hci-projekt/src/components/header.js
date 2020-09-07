import React from "react"
import { Link } from "gatsby"
import { Navbar, NavbarBrand } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import HeaderStyle from "../components/componentsStyles/header.module.css"
import logo from "../images/hrslogo.png"

const Header = props => {
  return (
    <Navbar
      className={HeaderStyle.navbar}
      fixed="top"
      light
      expand="md"
      width="100px"
    >
      <NavbarBrand className={HeaderStyle.logo} href="/">
        <img
          className={HeaderStyle.logoImg}
          src={logo}
          alt="Logo"
          width="100%"
        />
        <h1 className={HeaderStyle.logoName}>1HRL-JUG</h1>
      </NavbarBrand>
      <div className={HeaderStyle.navbarNames}>
        <Link
          to="/"
          exact="true"
          className={HeaderStyle.navbarName}
          activeClassName={HeaderStyle.navbarName__active}
        >
          NASLOVNICA
        </Link>
        <Link
          to="/rezultati"
          className={HeaderStyle.navbarName}
          activeClassName={HeaderStyle.navbarName__active}
        >
          REZULTATI
        </Link>
        <Link
          to="/tablica"
          className={HeaderStyle.navbarName}
          activeClassName={HeaderStyle.navbarName__active}
        >
          TABLICA
        </Link>
        <Link
          to="/timovi"
          className={HeaderStyle.navbarName}
          activeClassName={HeaderStyle.navbarName__active}
        >
          TIMOVI
        </Link>
        <Link
          to="/novosti"
          className={HeaderStyle.navbarName}
          activeClassName={HeaderStyle.navbarName__active}
        >
          NOVOSTI
        </Link>
        <Link
          to="/prijava"
          className={HeaderStyle.navbarName}
          activeClassName={HeaderStyle.navbarName__active}
        >
          PRIJAVA
        </Link>
      </div>
    </Navbar>
  )
}

export default Header
