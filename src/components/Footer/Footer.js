import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsWhatsapp, BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const whatsapp = "+5491158094982";

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="row">
        <hr />
        <h3 link="/" className="col-desksm-4 --center logo">
          LA NACION
        </h3>

        <ul className="col-desksm-4 --left social-icons">
          <li>
            <a
              className="facebook"
              href="https://es-la.facebook.com/"
              target="_black"
            >
              <i className="fa fa-facebook">
                <BsFacebook />
              </i>
            </a>
          </li>
          <li>
            <a
              className="twitter"
              href="https://twitter.com/?lang=es"
              target="_black"
            >
              <i className="fa fa-twitter">
                <BsTwitter />
              </i>
            </a>
          </li>
          <li>
            <a
              className="dribbble"
              href="https://www.instagram.com/"
              target="_black"
            >
              <i className="fa fa-dribbble">
                <BsInstagram />
              </i>
            </a>
          </li>
        </ul>
      </div>
      <hr />
      <div className="container">
        <ul className="footer-links">
          <li>
            <a href="/ultimasnoticias">Últimas noticias </a>
          </li>
          <li>
            <a href="/politica">Política </a>
          </li>
          <li>
            <a href="/economia">Economía </a>
          </li>
          <li>
            <a href="/deportes">Deportes </a>
          </li>
          <li>
            <a href="/espectaculos">Espectáculos </a>
          </li>
          <li>
            <a href="/elmundo">El mundo </a>
          </li>
          <li>
            <a href="/sociedad">Sociedad </a>
          </li>
          <li>
            <a href="/opinion">Opinion </a>
          </li>
        </ul>
      </div>
      <div className="container">
        <p className="copyright-text">
          Copyright 2022 SA LA NACION | Todos los derechos reservados
        </p>
      </div>

      <div className="container">
        <div className="row">
            <p className="copyright-text">
              Design | Iasenza Juan Carlos
            </p>
            <ul className="social-icons">

              <li>
                <a
                  className="facebook"
                  href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsWhatsapp />
                </a>
              </li>
              <li>
                <a
                  className="twitter"
                  href="mailto:iasenzajuancarlos@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MdEmail />
                </a>
              </li>
              <li>
                <a
                  className="dribbble"
                  href="https://github.com/jciasenza"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub />
                </a>
              </li>
              <li>
                <a
                  className="linkedin"
                  href="https://www.linkedin.com/in/juan-carlos-iasenza-8119501a9/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
    </footer>
  );
};
