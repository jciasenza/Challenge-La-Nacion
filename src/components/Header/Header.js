import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { WiDayCloudy } from "react-icons/wi";
import { Link } from "react-router-dom";
import Modals from "../Formulario/Modals";
import LoginModal from "../Formulario/LoginModal";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0px";
  }

  return (
    <>
      <div className="header">
        <div id="mySidepanel" className="sidepanel">
        <button
          className="closebtn"
          onClick={() => closeNav()}
        >
          &times;
        </button>

          <ul>
            <Link
              to="/"
              title="Ir a la página principal"
              className="logo_menu"
              onClick={() => closeNav()}
            >
              LA NACION
            </Link>
            <hr />
            <li>
              <Link
                to="/ultimasnoticias"
                className="link__item"
                onClick={() => closeNav()}
              >
                Últimas noticias
              </Link>
            </li>
            <li>
              <Link
                to="/politica"
                className="link__item"
                onClick={() => closeNav()}
              >
                Política
              </Link>
            </li>
            <li>
              <Link
                to="/economia"
                className="link__item"
                onClick={() => closeNav()}
              >
                Economía
              </Link>
            </li>
            <li>
              <Link
                to="/deportes"
                className="link__item"
                onClick={() => closeNav()}
              >
                Deportes
              </Link>
            </li>
            <li>
              <Link
                to="/espectaculos"
                className="link__item"
                onClick={() => closeNav()}
              >
                Espectáculos
              </Link>
            </li>
            <li>
              <Link
                to="/elmundo"
                className="link__item"
                onClick={() => closeNav()}
              >
                El mundo
              </Link>
            </li>
            <li>
              <Link
                to="/sociedad"
                className="link__item"
                onClick={() => closeNav()}
              >
                Sociedad
              </Link>
            </li>
            <li>
              <Link
                to="/opinion"
                className="link__item"
                onClick={() => closeNav()}
              >
                Opinión
              </Link>
            </li>
          </ul>
        </div>

        <button className="openbtn" onClick={() => openNav()}>
          &#9776; &nbsp; SECCIONES &nbsp;
        </button>

        <button
          className="btn_buscar"
          onClick={() => setIsSearchOpen((prev) => !prev)}
        >
          <FiSearch className="lupa" />
          &nbsp; BUSCAR
        </button>
        <h1>
          <Link to="/" title="Ir a la página principal" className="logo">
            LA NACION
          </Link>{" "}
        </h1>
        <Modals />
        <LoginModal />
      
      {isSearchOpen && (
        <div className="search-panel">
          <form
            className="search-form"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              className="search-input"
              placeholder="Buscar noticias, secciones..."
            />
            <button
              type="button"
              className="search-close"
              onClick={() => setIsSearchOpen(false)}
            >
              X
            </button>
          </form>
        </div>
      )}
      <div className="sub_menu">
        <ul>
          <li>
            Dólar hoy: &nbsp; <b> $109.25 / $115,25</b>
          </li>
          <li>
            Dólar blue: &nbsp; <b> $197,00 / $201,00</b>
          </li>
          <li>
            <b>
              <WiDayCloudy />
              20° &nbsp;
            </b>
            Capital Federal
          </li>
          <li>
            <button className="link-button">Recibí Newsletters</button>
          </li>
          <li>
            <button className="link-button">Descubrí tus beneficios</button>
          </li>
        </ul>
      </div>
      </div>
    </>
  );
};

export default Header;
