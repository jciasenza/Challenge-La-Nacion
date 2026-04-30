import React from "react";
import "../../App.scss";
import Box from "../Box";
import { Col } from "../Col/index";
import { Row } from "../Row";
import Card from "../Card";

const ElMundo = () => {
  const Articles = [
    {
      id: "1",
      category: "Guerra",
      title:
        "Francisco redobló su pedido por Ucrania mientras un líder europeo se diferencia de Joe Biden",
      author: "Juan Ortiz",
      image:
        "https://static.euronews.com/articles/stories/06/57/39/16/630x354_cmsv2_8e913c89-a181-5240-afe2-46377c01ad55-6573916.jpg",
    },
    {
      id: "2",
      category: "EEUU",
      title: "La Casa Blanca matiza las palabras de Biden sobre Putin",
      author: "Romina Garcia",
      image:
        "https://phantom-elmundo.unidadeditorial.es/ba8f82029e55c8fd6162f5db6831d0c5/resize/473/f/webp/assets/multimedia/imagenes/2022/03/27/16483922837432.jpg",
    },
    {
      id: "3",
      category: "Sorprendente!!",
      title:
        "Nuevo temario patriótico de las escuelas rusas: Ucrania nunca fue un país",
      author: "Macelo Sanchez",
      image:
        "https://phantom-elmundo.unidadeditorial.es/2c09ce129b4527962c7de89abd847b30/resize/990/f/webp/assets/multimedia/imagenes/2022/03/25/16482371732731.jpg",
    },
    {
      id: "4",
      category: "Francisco?",
      title:
        "El sumo pontífice enfatizó su petición poner fin a los combates; “La guerra no sólo devasta el presente, sino también el futuro de la sociedad’', dijo",
      author: "Joaquin Romario",
      image:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIWFRgVFhYYGRgYGhgYGBgaGRgYGBoYGBgZGRgZGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTQBDAwMEA8QHhISHzQrIyw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBAUGB//EAEEQAAIBAgMECAIIBQQBBQEAAAECAAMRBCExBRJBcQYiMlFhgZGhE0IUFVKxwdHh8CMzYnKCB1PC8aIkQ5LS4hb/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAkEQEBAAICAwABBAMAAAAAAAAAAQIREiEDMUFhIlGBwQQycf/aAAwDAQACEQMRAD8ApJhx3GSLhTwE6un0fqHgBLadGjxb0nHjHXlXHrhz3SVMLO0To9TGpJlulsiivyg85eMTlXDJhB3SengHOiH0nephaY0UekkCAcJU24yjsWq3y25y9R6OP8zATpwIsow6fR2nxJMtJsWiPlvzmpaMYQKqYGmNEHpJ/hgaAR4ikSaDd2KFiEx14DTAiKSBKWP2rRogNVaxbsIAXdz/AEIty3PQeE1D8RoJTJ8PE/lJUprznKnpFiHNkpCmOBchn5lV6qnwuZn18LWqdvEO19RmF8lBt7ScsY6Tw513l6d7XW/dcXg2HXhl904PDbGCePpNnD1XQWViB3X08jcRyhfDk3HQjWNymHidt4hLXprWTRgp3KoHeoPVc+HVlLEfHfr0XLI2lxZ1PFHHBhJuMXDLH26c1lHESF9oU11YTmk2PiG7bn1lql0dHzMTJtNL1fb9FeMpVOlKcATLKbBpDhJ02PRHy35y7p0xn6SVD2UMibaGMfRLTqUwtMaKIu6B3Sap04+rg8XUtvaSRdgV21czqmroNWEgbH0x8wjRtir0ZHzMTLNLo9SHjL77SQ6XMg+m1D2UMmou6kTZdIfKJYTD0xoolQNiD8oHnHDC1zqwEbiL3V7hCUvq5/tmEuzTVKxTFERrTQZaAEN8DUyJ8Ug+YesCa0S0oVdsUV+cSlV6Q0+FzykG8ItpyzdIHPZQnnlGPtHFv2Vt6xuGq6tnA4yJ66DiJy/0fGPq1o5Nh1m7Tt6ybNN6rtGmvzCU6nSCiON5UTo4vEky1S2DSXhJ2aVanSZflQnylZtuV27KGbqbOpLoolhaKDgBLqnTmG2vVQEuAWOSL48XYcQMsu8jnKCVFVmc9Z3tvu2bMBoN7gBnZRYDulrbrg1XOtgoHh1Rp6+8wqtYk66HX98JnO6j0eGdttHzy45cvG80cOvDh3zBwVQ2v36cbAfv7ps4axFs+6048u3rs6alLPSJUH5RqOAQchzt62iu293eP6Zzpvpx32q1x+zK2HrslVXW9n6jrwJHZJ8dc+4yziU/fvKDXDjmp5EGTHLtc8d410bY2mNTbwjDtFeAJ8o6lSpkbxA1OvMywWprxUek7Xbw9Kf0xz2UPnC+IPACTPtGkuriV22zT4Bm5KZP5Dhhap1f0jvq2+rsfORjaVQ9mk3nlENbFnRFXmY6NpPqqnxufOS08DTXRRGYo1lRsgTbUd8ycAlR0DPVYE6gZW8JOjtvWpr9kSN8dSX5lmb9DpfMzNzMeqYZflHnKLDbZpcCTyBMj+tiezTc+VpG20aK6BR6SI7aXh7CBP8AWVb/AGT7QlX68P2W9IRtNEfauJbspaV2qY1tBadWUUdwkT1kHES6/K7jm12bi37TkcpOnR0ntOT5mbL46n3yMY3uUnyjUFKn0epDXOW02XSHywNaqdE9Y4U6x1IEdCZcLTGigRxCDukP0Jzq58ofVq8ST5yiR8VTGrCQNtCnwN+UkXA0xwHnHn4Sj5R6SdiqdoE9lGPlG/GrHRLczJH2rh01dR5iU63SfCr8xPIR/IsihiDqwEPq5zq7eUyqnS9PkRj7SlW6ZMCAVCFr24mw4nSZtkaxxuV1IztuVAruqm9iRc69XL8BMZGuD45a98sEM++Sb5lgRxBJ08dJSRCptwMxm9Himum5g3NrHl5/sTYwrjv/AH6Tn8FU1yJ5d81cPiktm4BHeRecpO3p302qe9bInLn+kkd20/8AsPe5lKnj04OG1BH6jjJTjRkMswDKxxptW4zNx6ffb8ZTdrEHulmviKZPWdb9x/ecqNcsPXW8sllTK9NZaauykuQrKRug26wOvmCPSTjB4ca3PM3nK4/G1Fqqir1FW+/4lbi3jeTbPxTVDuEOz+BsLTvylrx5YXGTf10m/h10RfaDbRprpuiU12XU/wBtebG8tJsmpxKjkIYNba/cGPIGQvj6hOSnzIEuDY9+07HlYSZNkUwcwTzJMdnTB2/tKshQKStxwzBmXRxlRci1gTmbTqNt7OBZCq3FjpnMdtlMciN0d5k1+69CkjOLg1H8RkJMuzqh/wDbP+TTTwOMw9KmqF1JEWp0goDiTyEuk2qJsmoeCL7yVNjNxf0AiP0kHyU3bykbbaxJ7FH1jUN1a+ok+03rElX6fj/9tYRqG63voC8ST5w+gUxwlT/1B1dV5CNOFJPWqt5ZTXSdrzIijQCRPjaS6ssydtYmnSKB94o3H85KlfCgAqq85narR2tT4XbkDE+sqh7NJjzylY7Wpjsr6CRPtZ+CnzsJdi78bFH5VXmbybBJWud9xyAmI+Pqnio5m8n2XiXLm7g5cBlJaaT9IcFiH3dxiO/dNpif/wA/WbtMfNp22GuRdpL8Md0a32b04il0T72HoTLtHozTGtz6CdVuxtpeMNsWlsGiNE9Zyn+ouxN2mmIQWCEK4H2WNr+pX08Z6LIsbhEq03puLq6lDyYWkyx3NN+PO4ZSvGNlY6mlQ0jvHfUkngtrZCXFW9+Njwtp4CZGGwLpiWJGm/TcZ9R1zOZ4Er/5TZpFbAnzE4W3Wntsm9xlY7aW71RvDhugHeY2vYDWc9icViGay0KmWeam/fe1j98799j06jB1C6cWsR3FcrA+EuYPYdbTecrrYtZR5Kc5Mc5PhcN/dOG6P7Urb24qEAXLWBFgNb39J0nSnatelTptTUksN3IXzOY05H1m6uHUK2QvdLm1uyTfyzE1q9BSoBy6uo8Ad0iJd3bV6mnjlPD7TqNvlWsc7vZV9zkZ3PRP4gRviKVINrHO+mYPd+cvpsAl7kKy671ypz70WwMvVlVQAB7Wz8BNXO34xwk+7Waez3db5XzG8Tw0t6Whhko4aoHZiWtoNJoLgVKb7OQMzYGw1mHgqKtiV4rc2vnOuOOo8nly3lpuP0lX5UY+UjO2q7dikfObSYZRoo9JKqCb7c+nOtWxzaKBEXB4xj1ntOlyiRpNqbbPq7os9+cwtt4Z0XN734TsxpMLauzAVZyxJAvJxNs3YuyaT01ZluTrebCbOpLoi+kg2B/KHMzVESRd1XWio0A9I9V8JJEMqbJuwi3EIHM/TKjcR5AmG5Vb7Z9psNtHDrxXykTbdp8ATyBk0bYHSfC1PhopBzPHOZeASohVBbrEDPO07THYlKiAujAajKYuJxYQDcTrE6tM9NStNdjE9pz5ACTrsekNSTzJlFaONcZuq8oo2LVbt128spdRO18YXDpwWWMNiKINgV8plr0ep/MzNzJmns/ZdJD1V1l0Lj4qmPmErVNrUl1aWKuApn5RIhgKf2BL2ioduU+AY+UYdq1D2abHymmtBBoBJQBwjsY3xsW2iBecT6Nim1cDlNlyALnIDU+E5zavSfcuEQk975DmFGZ9pZjalrkOl2xatOo1XVHAZm4byjO/jleZ6Jw5za2ltzEVzSpOQFepdlRbBlRSwVjfTeCnxtaVa2HsSRwJ++cfLjxezxeXlJL8S4GpYCX8TtPcS4uScgBqSdAPOZAB4TNwG0A7kO244NkQ5ED7WepPhwnD/j1yzXbR2Rimcs7PdmZldAQVUg2AHfp5zpMS4akEB3SV3Q2RK3yBAPdPJ8fTr4as7oTvXJuMwwJvmOIM39jbRxGK6jLuILFyCet3IPsg538J0k0lsvx02yNs33qb5OhKsNA1tHXvUjMHxljE1d8gDMlhYcbkgWnL9I3c1UeiGZ0sr7ouu4xGTEaEHPw850myF/iU9/5WDt/j1vvFpJO9M+SyY7js8NgxuBXFzmSOAJ4eUzdoYdUr0ioAvfSa2Arb+8RoDxlDbA/i0j4z0x83K7u60wYXigRYQ0wjohgW00lTHjqPyMtU9JWxo6jcjAydhH+H5maYaZfR8dRv7prQEJMS0deF4DbQhCBVp7MoroglhMOg0UekkvC0airCqCul5zm2qNQ9bdAVSPvnR09Jn7aX+E0UPpdkchJAJFh+yvISUGEFo+lrIXrBbX4y1TCkZSw2eWvpnAIZIqx8uk2jFMR26I6EaRXqU8ssxxBzBmVtbYVOut1sri9jwPgZuNIlHEeYk+jyPEKUq0mYWKVGVhxAcEH3AmvtGjutvfK2vn+sudNtkspasoupILeDAgi48SPeR4Nlq0yhOY7J8spz8ncdvHlxsYy0TfW1jnGbV2ZSe2+oIbjxDL/UPAiaFRCCQcjx8tYtOnvqyENqSptobmxv+9Z5pvb6Esk25LE7AqF7pVZV7u3byJzlzCbBAABqVWOrAEIhP+JJPrNvH4VKahmLEZnhbLln7zObpNTRQEUXJ/68p0n5amV+RqJhBTRFRcgbWAvkQSSeOts/Gb3RCheo7Hgm7/8AI/8A5M5PA9IKrdZqLlb6hSQe7nO86MVGbecpuBlUgGwJuTnYaDLjNYYzlt5/PleHbbFEC5A14TF24rb1Nt02DZm2Q5906FYFZ6NPBtngxZZagOXKRNRI8ZNLtHeJeBgTILdHSQYkdVuRk1DsyOvoeUDC6PN1XHc01yZjbDFi/wDdNiAgMN6KFhuwEvCLuwg6PgYQgWKXZlLav8t+Rl6jpKW0x/Df+0y0RYa+4vISbdkWE7C8hJS9iOdvYn8JA7aNDqXUZrY+QyP5+UzsLjQDbTwm0j3mfjdkhjvJYHiOHl3RlL7hGhQqhhJgZhUXekQrggcG1HmRw+6bFF7iMctpYniRBFM2gkLqQbjzH4yeIZLNitjMOtSmyNoylT5zzfDYGrTW69pCysDowUkAg8J6cotOe2hVp0lqb6gE1CKfDeLgNl3i5JMzlGsf2jnaZ+PZt0qQbNfLThNBGIAHDSMp00VMswMyePiTKiY+mago7yFmsBvE7lzYhSQO1pbTnOExtvT27kx7WauFFRSjaHh+I7jOWxXRkUn33G+gIKgC5J4b4/Y751GMp1aQLKN9UvvWvvWGthxt6yOntQ1Etu68ZLjHXHLKT9PpJsfZr1d0tkmp8f6V8OF51uAXNzlkQgt3KNPUmea7GZ6NZmqYmo24xCr8R7bvyl7nPK2U9L2V/KU5jeBbPXrEtc+s6+OT48n+RMpZauLxjoixROsealhCEojdAdZWqUCOUuQMlggoDKMqjIybdscpG/GSxXO7E7dQeP4zavMXZX82oPH8TNqRYIkLQtCiEW0ICwtAwhNLNDSVNodh+RlqgMpXx46jcjArYA9ROQjqnaXzPoAPxjNnD+GnKPfteX3n9IKs4c3lgGQ08hHi5Oc0gxFEMtvSZ+GrtTbcfIfKeHK/dNUNIcTSVxusPzHjM5Y29z2svyrAhK2GpMq7pbetobZ27tZJlNT12yd8Qc401T4CI7SMtcgd59uMbDmaw3mOgvyGs8o2vtdsRiCWJ3RcKvBbWNgO/vPEz0ja+JHw3/sf13Gt7zw2jit4bynO5PjnM+XqO3hne3c7K20jZXzXKW9pbHp1V36aqrjO191Wva+nK/PuuZ5qgqByyNmTcg2tzJA9502ydvtlvX3RxOh8R3icJdPX1W3hduVDeluMpGRJsLWy75i/TDQrtS+RrOnJtQPMN7TV2ng2xBWph/5mSlQQA45nLeH3eU6To/0UUKHxKI9TgpAYKMsjwJyiY3KmWeOE/pS2RsfD1FWu6Au7gbzEkbiAXIGnAi87lbGU/hBmawyVSi2yAJGdvYSTZ73Wx1GXlwnaTjZHhzyuV3V2IIsJ0YEIQgEIRICMJFUGV5MRGEXuJKOX2abV6g77/fNqY2EW2Jcc5t2mWiRIpEIDYRN4QhUhMIQtAsYfSV8YOo3Iyxh9JDih1W5GEUdnH+GnKCVb1GXuAPqB+sTZf8teUrq4BduJqFR/ibW++WDZQjjqdBJgBKeGe43o/wCIZUWGeMLSMGG9AkDxheMvEvCnEyMvYg/3H/xaKzRrC9vMeot+MiOd21jgUYDjl7zxXbgOGxDqOw/XXkxNx5G/tPYtr4brZWsRvePHX0nLbY2fQchqqI1hYbw+6azss1WsLZdx58dtMw3VUC9syd4nynqX+lewCWqYmtmd34aq2Zs4BYsOFxYAdxnNUKdNT/Cpon9QUBvXUT0T/TdupWXjvI3qCP8AjOONx3qOmeV0nwXRIUcQrrUPw94sqEXKkfKDfTxtOrqvuqSeAvEqarz/AOJ/KVsSCzBO83J/pGf6TpJJ6cbbl7T4RLIL6nrHmc5Xw5tVcd+f4/iZdA8ZRxPVqK3fb8j7SZfKRowhCbQQhCARIsQwFkbaiSRlTSBz1Wnu4tv6l3h56+4M0iZBtal/EpOP6lP3j/lJA0xfbULeIYoMYTClhDOJAnvCNIhAs4c5RmJ7LcjFww1hWGR5QjK2X/LBPC/tOfp4ss5XuJY82J/KbuGxCpRLNkqk38iT+E4ehjd6q5GQa9h4DT2vJcpNLJt3mzaoNMWP2vZj7SU1yCfD93mHsvFgU90sBbeyzJ77+8uLjlHefGa2jSSqTr5RPjAazObaABBFpHVdXBIOfERsar1wOMZTxG9wmVRr6DgI84sDjp3RsarP3wpP1gfGZgxJcG2ozHjxHPS0WliWJBOQvkOVj+xJsVekG4rm1shfwGpz7ss55vjsWajltRoJ23+o6VDTSonYa6VSPLcv4HMX8uM4jZ+FLMLCcvLlb+mOvjkk5VYw6Na1szPUuhOz/hYcMe1UO+eWi+2fnOP2Tsku6pxJ61tAOJ8hPUKahQFGQAAA8BkJvx46Y8mWyOungfzH4yHDdYs3+I5D9Y7GVLLYatkPxPpHKhFgNAABOjmmlHaS5A+JHr/1Lq34xtRARaSzc0sujaD7yg949+MllbB3AKnUH2P7Msyz0hYQhKCIYsSAGBgYQKmJS6eKkEeRz9ryLdlwrqO//qVLTNWE3YtoCF5FJaEIQh1oWiXhCp6A1iVuMMPxhVGsDktrUWbDNu/LUJPIb15xaPuureOfLjPQHt9Gqg6HfHmxsPciefsM7HhOXkne28b8bDOyHLRvTwjkxTgWEr4GurKEY5jIeI/OWHw/7/SWZbTRjYho9MSwzF+4xu5EUcDNbTS8MVYAkZ8CLZ+F/wBJO+KsFcKGXQ31B+6Ze4ZLSZwCBodQcxG002UqqwDI3Md3LukFWsQWA49b/IZ3EzFoMM729pZNFza7aad8nKLpv7NxdGvSalUtZgVZCNQeIPCR4DorQpr1WLd7AC5trnMRMEozufKa+wartWCbzFEUndvlwAuObXiWWllkbeCwqIxVVC2UG/E3vfPyEvHeHjIquVRD3hlPjoR+Mdi6hC5dpuqvM/lr5TpplFRYM7NwXqLz+Y+uXlJfjBcvE+0fRohVCgaC0Sktxnn1m1/uMqFSrfgbd+VpNGiLAhJs48QR6WI+8yeVcRkVP9VvUEflLIiBYQhKCN4x0bxgKYimKYy+cgVtRKlUWY/vWXGGUrV+B7xFWIbwvFtCZU28I6EGwBAwhCpcOdY54QhHJ7Qq2osvfUI8hc/facnjKQvvDkfz9osJcpOJj7VGEkoYtxezGwtkcx7whPJeq6rTbTIHWUHkSPzirthOKN5EH8oQm5lSwNtpflQ+ZA+68SntKox4AdwH4mEJLlTUOaoTmSTzmthat0HhCEzj7L6SVKlhN3ohQ6j1PtNujkv6k+kITth/sxl6bWMyAb7LKffdPsY1RvPfggsP7mFyfQgeZhCdnNckC9UeZ9yYQgSAiPhCUQ4hbqfDMc1Nx90lEISBYQhKCN4whAdImEISVYepkNUZcj+/vhCEVzAQhMtCEIQP/9k=",
    },
    {
      id: "5",
      category: "Latinoamerica",
      title:
        "Perú, el país en el que se volvió casi normal destituir a sus presidentes",
      author: "Patricia Chavez",
      image:
        "https://www.eltiempo.com/files/image_284_205/files/crop/uploads/2021/11/11/618d82fd03c67.r_1648353388674.0-231-2166-1796.jpeg",
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

  const articles = Articles;

  return (
    <div>
      <Box title={"El Mundo"} />
      <div className="wrapper2">
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
export default ElMundo;
