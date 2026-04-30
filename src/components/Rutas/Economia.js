import React from "react";
import "../../App.scss";
import BigNews from "../BigNews";
import News from "../News";
import imagen from "../../components/Imagenes/economia.png";

const Economia = () => {
  return (
    <div className="content_economia">
      <div className="imagen_title">
        <img src={imagen} alt="Economia" className="png"></img>
      </div>
      <hr />
      <div className="content_economia">
        <BigNews
          category={"Economia"}
          title={"¿Es posible dolarizar la economía argentina?"}
          text={
            "Para el economista Alfredo Romano, el peso ya murió en la Argentina y nos acercamos a un cambio de paradigma económico."
          }
          date={"24 de Enero 2022"}
        />
        <News
          category={"Peso o Dolar"}
          title={"Entra el dólar, sale el peso"}
          author={"Suiz Jerez"}
          image={
            "https://media.ambito.com/p/0a9a4dd401882a8ef42e2bfefab3e80d/adjuntos/239/imagenes/039/334/0039334633/pesos-dolarjpg.jpg"
          }
        />
      </div>
    </div>
  );
};

export default Economia;
