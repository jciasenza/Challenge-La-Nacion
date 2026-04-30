import React from "react";
import "../../App.scss";
import Box from "../Box";
import Advertising from "../Advertising";

const Espectaculos = () => {
  return (
    <>
      <Box title={"Espectaculos"} />
      <div className="espectaculos-container">
        <section>
          <Advertising
            category={"Tragame Tierra"}
            title={
              "La insólita pregunta de Elías Bublé por el embarazo de Luisana Lopilato: '¿Por qué no nos invitaste cuando te enamoraste?'"
            }
            image={
              "https://cdn.ciudad.com.ar/sites/default/files/styles/nota_portada_crop/public/nota/portada/2022/03/25/lopilato-buble.jpg?itok=X0RibcqXg"
            }
            author={"Juan Jerez"}
          />
        </section>
        <section>
          <Advertising
            category={"ENCANTADO"}
            title={
              "El sentido mensaje de Jorge Rial por el cumpleaños de su nieto, Francesco: Mi corazón explota por vos"
            }
            image={
              "https://cdn.ciudad.com.ar/sites/default/files/styles/grizzly_galeria/public/nota/2022/03/18/rial.jpg?itok=QjKIQQjC"
            }
            author={"Ana Ventrano"}
          />
        </section>
        <section>
          <Advertising
            category={"Enrique Pinti"}
            title={
              "el humorista de raza y el entrañable charlatán que nos enseñó a reírnos de nuestras desgracias"
            }
            image={
              "https://www.losandes.com.ar/resizer/y5BBKuR6mtvAhzsfa91bmTlpkMc=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/6JBKYRS6UFGRXHPL73FX55FD5U.jpg"
            }
            author={"Alan Braz"}
          />
        </section>
        <section>
          <Advertising
            category={"Atento a Todo"}
            title={
              "Premios Oscar 2022: las categorías que crearon para que el público vote a los ganadores desde su celular"
            }
            image={
              "https://cdn.ciudad.com.ar/sites/default/files/styles/nota_portada_crop/public/nota/portada/2022/03/17/oscar-redes-sociales.jpg?itok=vL2CqpJq"
            }
            author={"Romina Martino"}
          />
        </section>
        <section>
          <Advertising
            category={"ESPECTACULAR"}
            title={
              "Así es la lujosa casa de campo de Wanda Nara en Milán: La decoré con muebles reciclados"
            }
            image={
              "https://cdn.ciudad.com.ar/sites/default/files/styles/nota_portada_crop/public/nota/portada/2022/03/25/nara.jpg?itok=dgvLuZac"
            }
            author={"Pamela Sanchez"}
          />
        </section>
        <section>
          <Advertising
            category={"!EPA! Valeria Archimó"}
            title={
              "Rompió el silencio sobre la versión de infidelidad de Guillermo Marín con Sol Pérez"
            }
            image={
              "https://cdn.ciudad.com.ar/sites/default/files/styles/nota_portada_crop/public/nota/portada/2022/03/23/archimo-valeria.jpg?itok=ApwOz_GZ"
            }
            author={"Javier Polaski"}
          />
        </section>
      </div>
    </>
  );
};

export default Espectaculos;
