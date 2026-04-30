import React from "react";
import Box from "./components/Box/index";
import { Col } from "./components/Col/index";
import { Row } from "./components/Row";
import Card from "./components/Card/index";
import BigCard from "./components/BigCard/index";
import publi from "./components/Imagenes/publi.jpg";
import Carrousel from "./components/Carrousel/Carrousel";
import Opinion from "./components/Opinion";

const Articles = [
  {
    id: "1",
    category: "Fecha decisiva",
    title:
      "Sin escalas: Uruguay y Ecuador se clasifican a Qatar 2022 y Chile depende de un milagro",
    author: "Juan Ortiz",
    image:
      "https://s.yimg.com/ny/api/res/1.2/iSMwxXqk8HsmmHW5LXviLg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQzMQ--/https://s.yimg.com/uu/api/res/1.2/h6zTK4dVOeTooCDfL6hvgw--~B/aD01MTc7dz03Njg7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/es/lanacion.com.ar/59716e728f138767530265c04c1fe64d",
  },
  {
    id: "2",
    category: "Increíble",
    title:
      " Descubren la verdadera identidad de un hombre gracias a la vacuna de Covid",
    author: "Romina Garcia",
    image:
      "https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/09-11-2020-Pfizer-Vaccine-02.jpg/image1170x530cropped.jpg",
  },
  {
    id: "3",
    category: "Sorpresa",
    title:
      "Revelan una escalofriante escena inédita de la nueva Batman con la presencia del Guasón",
    author: "Macelo Sanchez",
    image:
      "https://www.cinemascomics.com/wp-content/uploads/2022/02/THe-Batman-buena.png",
  },
  {
    id: "4",
    category: "Sube la presión",
    title:
      "La OTAN consideró “improbable“ una guerra entre Rusia y los países aliados",
    author: "Joaquin Romario",
    image:
      "https://media.tycsports.com/files/2022/03/03/397316/guerra-rusia-ucrania_862x485_wmk.jpg",
  },
  {
    id: "5",
    category: "En medio de la interna",
    title:
      "Grabois se abrazó con Máximo y habló sobre la unidad: “El límite es la derecha macrista”",
    author: "Patricia Chavez",
    image:
      "https://www.clarin.com/img/2022/03/24/maximo-kirchner-encabezo-la-movilizacion___SWKnOeK45_720x0__1.jpg",
  },
  {
    id: "6",
    category: "Cuál es y dónde queda",
    title:
      "Otro pueblo de Italia se suma a la iniciativa de vender casas por un euro",
    author: "Adrian Lopez",
    image:
      "https://1.bp.blogspot.com/-LOkN_7MDPSE/YA8uemnISiI/AAAAAAAAHIo/T-2YozY7pPMhFNYn8AMxCqxPxyfr3Jh4wCLcBGAsYHQ/s1920/santo-stefano-di-sessanio.jpg",
  },
];

function Home() {
  const articles = Articles;

  return (
    <div>
      <Carrousel />
      <Box title={"ACTUALIDAD"} />
      <div className="wrapper">
        <Row>
          {articles.map((article) => (
            <Col key={article.key}>
              <Card 
                category={article.category}
                title={article.title}
                author={article.author}
                image={article.image}
              />
            </Col>
          ))}
        </Row>
        <div>
          <BigCard title={"Anuncios"} image={publi} />
        </div>
        <div>
          <hr />
          <Opinion />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Home;
