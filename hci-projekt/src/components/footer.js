import React from "react"
import FooterStyle from "../components/componentsStyles/footer.module.css"
import youtube from "../images/youtube.png"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import twitter from "../images/twitter.png"
import linkedin from "../images/linkedin.png"
import location from "../images/location.png"
import mail from "../images/mail.png"
import phone from "../images/phone.png"

const Footer = () => {
  return (
    <footer className={FooterStyle.footer}>
      <div className={FooterStyle.container}>
        <div className={FooterStyle.findUs}>
          <h5 className={FooterStyle.title}>HRS na društvenim mrežama</h5>
          <div className={FooterStyle.iconsContainer}>
            <a
              href="https://www.facebook.com/hrs.chf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={FooterStyle.img} src={facebook} alt="facebook" />
            </a>
            <a
              href="https://www.instagram.com/hrs_insta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={FooterStyle.img}
                src={instagram}
                alt="instagram"
              />
            </a>
            <a
              href="https://twitter.com/HRStwitt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={FooterStyle.img} src={twitter} alt="twitter" />
            </a>
            <a
              href="https://www.youtube.com/user/HRSmediacentar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={FooterStyle.img} src={youtube} alt="youtube" />
            </a>
            <a
              href="https://www.linkedin.com/company/croatian-handball-federation/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={FooterStyle.img} src={linkedin} alt="linkedin" />
            </a>
          </div>
        </div>
        <div className={FooterStyle.contact}>
          <h5 className={FooterStyle.title}>Kontakt</h5>
          <div className={FooterStyle.location}>
            <img
              className={FooterStyle.imgLocation}
              src={location}
              alt="location"
            />
            <p className={FooterStyle.locationfix}>
              {" "}
              Metalčeva 5, 10000 Zagreb
            </p>
          </div>
          <div className={FooterStyle.number}>
            <img className={FooterStyle.imgPhone} src={phone} alt="phone" />
            <p className={FooterStyle.numberfix}> 01 / 4573 032</p>
          </div>
          <div className={FooterStyle.mail}>
            <img className={FooterStyle.imgMail} src={mail} alt="mail" />
            <p className={FooterStyle.mailfix}>info@hrs.hr</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
