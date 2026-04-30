import React from "react";
import "../../App.scss";
import imagen from "../../components/Imagenes/deportes.png";
import { Col } from "../Col/index";
import { Row } from "../Row/index";
import Card from "../Card/index";

const Articles = [
  {
    category: "Boxeo Femenino",
    title:
      "Un duelo muy intenso que finalizó con victoria por fallo por puntos.",
    author: "Luis Gonzalez",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Boxing_in_Uruguay_-_Palacio_Pe%C3%B1arol.jpg/640px-Boxing_in_Uruguay_-_Palacio_Pe%C3%B1arol.jpg",
  },
  {
    category: "Basquet",
    title:
      "Empieza a definirse el panorama: sábado clave por La Liga. Breves Mundo Básquet. ",
    author: "Milagros Suarez",
    image:
      "https://static1.abc.es/media/deportes/2021/02/14/564tyu-U47680321364cHP-620x349@abc.jpg",
  },
  {
    category: "Pre Olimpicos",
    title:
      "El Preolímpico de la Concacaf (Norteamérica, Centroamérica y Caribe) fue el torneo clasificatorio que envió a las dos selecciones finalistas",
    author: "Rodolfo Martinez",
    image:
      "https://ichef.bbci.co.uk/news/640/cpsprodpb/1191/production/_118679440_whatsubject.jpg",
  },
  {
    category: "Seleccion Argentina",
    title:
      "Con todos a disposición, se empezó a pensar en Ecuador, La Sub 20 empató ante Estados Unidos",
    author: "Martin Smith",
    image:
      "https://pxc.cdn.ellitoral.com.ar/litoral/032022/1648269108443.jpg?&ma=3&cw=1170&ch=731",
  },
  {
    category: "Futbol Americano",
    title:
      "El football americano sigue creciendo a pasos agigantados en la región. Y así de importante es la relevancia que empieza a cobrar esta parte del mundo",
    author: "Jose Bermudez",
    image:
      "https://ca-times.brightspotcdn.com/dims4/default/bd546e5/2147483647/strip/true/crop/4063x2709+0+1/resize/840x560!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F2a%2F1f%2F4b8df714e66cc3c3fc0708171027%2Fa49916604e8a4994ad944f3aa889416a",
  },
  {
    category: "Golf Femenino",
    title:
      "El golf se gano su corazón, sin saber que también la convertiría en una de las estrellas y grandes promesas del golf argentino",
    author: "Arturo Paez",
    image:
      "https://www.newzealand.com/assets/Tourism-NZ/Other/6c28ee4439/img-1536967384-3878-28853-4037D216-97F0-3962-0FA3892872BAC2A1__aWxvdmVrZWxseQo_FocalPointCropWzQyMCw5NjAsNTAsNTAsNzUsImpwZyIsNjUsMi41XQ.jpg",
  },
];

const Deportes = () => {
  const articles = Articles;
  return (
    <div className="deportes">
      <div className="image_title">
        <img src={imagen} alt="Deportes" className="png"></img>
      </div>
      <hr />
      <div className="wrapper2">
        <Row>
          {articles.map((article) => (
            <Col>
              <Card
                category={article.category}
                title={article.title}
                author={article.author}
                image={article.image}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Deportes;
