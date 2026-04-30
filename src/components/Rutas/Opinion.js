import React from "react";
import "../../App.scss";
import Box from "../Box";
import ColOpiniones from "../ColOpiniones/index";

const Articles = [
  {
    category: "Decepción",
    title:
      "En primera persona. Si tengo bienes, sé lo que tengo; si tengo pesos, no",
    author: "Luis Gonzalez",
    date: "24 de Marzo de 2022",
  },
  {
    category: "Derechos Humanos",
    title: "El día de la memoria selectiva",
    author: "Milagros Suarez",
    date: "23 de Marzo de 2022",
  },
  {
    category: "Qué lástima, narcicismo, Malvinas",
    title:
      "Permítame que le diga, señor Presidente, que el lunes pasado perdió la gran oportunidad de dar un gran ejemplo",
    author: "Rodolfo Martinez",
    date: "22 de Marzo de 2022",
  },
  {
    category: "Al populismo se lo derrota con “halconismo”",
    title:
      "El autor, aliado sindical de Patricia Bullrich, plantea que “no alcanza con estar juntos”",
    author: "Martin Smith",
    date: "15 de Marzo de 2022",
  },
  {
    category: "El golpe que Montoneros quería",
    title:
      "Todavía queda mucho por escribir de aquel golpe misterioso del 24 de marzo de 1976.",
    author: "Jose Bermudez",
    date: "24 de Febrero de 2022",
  },
  {
    category: "Una izquierda jurásica anclada en los viejos esquemas de poder",
    title:
      "La invasión de Rusia a Ucrania deja patente la división entre simpatizantes del autoritarismo y defensores de la democracia",
    author: "Arturo Paez",
    date: "2 de Enero de 2022",
  },
];

const Opinion = () => {
  const articles = Articles;
  return (
    <div className="content_opinion">
      <Box title={"OPINIONES"} />
      {articles.map((article) => (
        <div className="opiniones">
          <ColOpiniones
            category={article.category}
            title={article.title}
            author={article.author}
            date={article.date}
          />
        </div>
      ))}
    </div>
  );
};

export default Opinion;
