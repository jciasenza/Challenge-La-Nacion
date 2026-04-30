import React from "react";
import "../../App.scss";
import Box from "../Box";
import { Col } from "../Col/index";
import { Row } from "../Row";
import Card from "../Card";

const Politica = () => {
  const Articles = [
    {
      id: "1",
      category: "Vocero del enojo kirchnerista contra el Presidente",
      title:
        "El ministro bonaerense y dirigente de la Cámpora retomó sus críticas contra el Gobierno tras el ataque al despacho de Cristina Kirchner.",
      author: "Suiz Jerez",
      image:
        "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/ZSB7NROVGVAYVA3CE47QAX3HKE.jpg",
    },
    {
      id: "2",
      category: "Explotamos todos",
      title: " El peligro inminente que acecha al gobierno de los enemigos",
      author: "Romina Garcia",
      image:
        "https://infocronos.com.ar/amp/26262/maximo-kirchner-en-la-marcha-del-24m-el-gobierno-es-con-la-gente-adentro/uploads/noticias/5/2022/03/20220325112701_maximok24mm.webp",
    },
    {
      id: "3",
      category: "Maxima tensón",
      title:
        "El kirchnerismo se prepara para resistir la suba de tarifas que instrumentará el Gobierno",
      author: "Macelo Sanchez",
      image:
        "https://fotos.perfil.com/2019/12/10/trim/950/534/cristina-kirchner-asume-alberto-fernandez-g20191210-817379.jpg",
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
      category: "Entrevista",
      title:
        "Patricia Bullrich explica sus diferencias con Rodríguez Larreta de cara al 2023",
      author: "Adrian Lopez",
      image:
        "https://media.ambito.com/p/c5f569683c62d932a410d6f76c0c799d/adjuntos/239/imagenes/038/923/0038923818/1200x900/smart/patricia-bullrich.jpg",
    },
  ];

  const articles = Articles;

  return (
    <div>
      <Box title={"Politica"} />
      <div className="wrapper3">
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
      </div>
    </div>
  );
};

export default Politica;
