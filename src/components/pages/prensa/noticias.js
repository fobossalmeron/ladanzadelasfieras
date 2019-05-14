import React from "react";
import {
  Section,
  Heading3,
  whiteColor,
  redColor,
  blackColor
} from "components/layout/pageLayout";
import Fade from "react-reveal/Fade";
import styled from "styled-components/macro";

var news = [
  {
    publisher: "Proceso",
    date: "06/30/17",
    title: "Alerta a los jóvenes del crimen organizado",
    quote: `Una sólida investigación realizada por estudiosos y organismos 
          especializados en la trata de personas dio como producto un filme 
          singular: <b>La Danza de las Fieras</b>.`,
    link:
      "https://www.proceso.com.mx/496268/alerta-a-los-jovenes-crimen-organizado"
  },
  {
    publisher: "CERO:60",
    date: "10/09/17",
    title:
      "LDDLF, DOCUMENTAL SOBRE LA TRATA DE PERSONAS EN FESTIVAL RENCONTRES CINEMATHOGRAPHIQUES",
    quote: `<b>La danza de las fieras</b>, tiene una calidad estética, sonora y actoral que deja 
      pasmado al espectador, pues sin exponer fielmente escenas de abuso, evidencia de 
      manera verosímil, el sufrimiento de las víctimas lo que conmueve hasta las fibras más 
      sensibles de quienes miran los 6 cortometrajes basados en historias reales.`,
    link:
      "http://www.cero60.mx/la-danza-de-las-fieras-documental-sobre-trata-de-personas-se-expone-en-viva-mexico-rencontres-cinematographiques/"
  },
  {
    publisher: "LA VOZ DE MICHOACÁN",
    date: "10/09/17",
    title: "EXPONEN “LA DANZA DE LAS FIERAS” EN VIVA MÉXICO",
    quote: `Esta obra desde su inicio rompe con los lenguajes cinematográficos convencionales.`,
    link:
      "https://www.lavozdemichoacan.com.mx/cultura/exponen-la-danza-de-las-fieras-en-viva-mexico/"
  },
  {
    publisher: "MI MORELIA",
    date: "10/09/17",
    title: "15 PELÍCULAS MEXICANAS EN FESTIVAL RENCONTRES CINEMATOGRAPHIES",
    quote: `La riqueza cultural de México es el destacado papel que ha tomado la 
      mujer durante los últimos años en la industria del cine, tanto en actrices como 
      directoras y personal técnico.`,
    link:
      "https://www.mimorelia.com/proyectaran-15-peliculas-mexicanas-festival-viva-mexico-rencontres-cinematographiques/"
  },
  {
    publisher: "20 MINUTOS",
    date: "10/10/17",
    title: "ESTRENAN EN PARÍS PELÍCULA MEXICANA SOBRE TRATA",
    quote: `La película mexicana <b>La danza de las fieras</b> se estrenó a nivel 
      mundial en París con gran éxito por su contenido.`,
    link:
      "https://www.20minutos.com.mx/noticia/281331/0/estrenan-en-paris-pelicula-mexicana-sobre-trata-la-danza-de-las-fieras/"
  },
  {
    publisher: "ARSENAL DIARIO DIGITAL",
    date: "10/10/17",
    title: "ESTRENAN EN PARÍS PELÍCULA MEXICANA SOBRE TRATA, LDDLF",
    quote: `<b>La danza de las fieras</b>, de gran calidad cinematográfica pero 
      con una finalidad didáctica, muestra con crudeza y realismo algunas de las 
      múltiples caras de la trata de personas.`,
    link:
      "http://www.elarsenal.net/2017/10/10/estrenan-en-paris-pelicula-mexicana-sobre-trata-la-danza-de-las-fieras/"
  },
  {
    publisher: "Radio Francia Internacional",
    date: "11/09/17",
    title:
      "LDDLF, PELÍCULA MEXICANA PARA CONCIENTIZAR SOBRE LA TRATA DE MENORES",
    quote: `Película mexicana que reúne 6 cortometrajes sobre diversos temas que 
      tienen que ver con la trata de menores y adolescentes.`,
    link: "https://www.youtube.com/watch?v=GA3UHmbTIXw&t=9s"
  },
  {
    publisher: "EL MAÑANA",
    date: "11/10/17",
    title: "EXHIBEN EN PARÍS CINTA MEXICANA",
    quote: `Todas las historias están basadas en hechos reales que fueron tomados 
      como base para hacer una película conjunta en la que intervinieron más de 20 
      expertos en el tema, entre ellos sociólogos, antropólogos, psicólogos, criminalistas y 
      otros especialistas en derechos humanos y trata de personas.`,
    link: "https://www.elmanana.com/exhibenenpariscintamexicana-4104815.html"
  },
  {
    publisher: "LA JORNADA",
    date: "11/10/17",
    title: "ESTRENAN EN PARÍS LA DANZA DE LAS FIERAS",
    quote: `Un ejemplo de otros tipos de trata es el tema del segundo corto de la cinta, 
      Desechables, de Miguel Ángel Fernández, quien cuenta la historia de Martín, un joven 
      de 15 años que es engañado para trabajar en el campo y termina amenazado por un 
      cártel de narcotraficantes.`,
    link: "http://www.jornada.unam.mx/2017/10/11/espectaculos/a12n1esp"
  },
  {
    publisher: "PLUMAS LIBRES",
    date: "11/10/17",
    title:
      "ESTRENAN EN PARÍS PELÍCULA MEXICANA LDDLF, QUE ALERTA SOBRE LA TRATA DE PERSONAS",
    quote: `La película busca servir de instrumento para luchar contra la trata de personas. 
      Busca no sólo informar, sino que les haga tomar precauciones.`,
    link:
      "https://www.plumaslibres.com.mx/2017/10/11/estrenan-paris-la-pelicula-mexicana-la-danza-las-fieras-alerta-la-trata-personas/"
  },
  {
    publisher: "PROCESO",
    date: "21/10/17",
    title: "CINEASTAS MEXICANOS CON EL PÚBLICO FRANCÉS",
    quote: `Luego cuenta la historia de ese filme de 208 minutos que consta de seis cortometrajes 
      filmados por seis realizadores distintos –cinco de ellos muy jóvenes– y busca crear consciencia 
      sobre la trata de personas entre los adolescentes y sus padres.`,
    link:
      "https://www.proceso.com.mx/508264/cineastas-mexicanos-publico-frances"
  },
  {
    publisher: "CB TELEVISIÓN",
    date: "23/10/17",
    title: "LDDLF LLEVA AL FICM LA PREOCUPACIÓN POR LA TRATA DE PERSONAS",
    quote: `El filme permite experimentar con nuevas ideas como el caso de FollowBack, una historia 
      de una niña que es observada desde una pantalla de celular por un tratante y seguida por un adolescente.`,
    link:
      "https://www.cbtelevision.com.mx/la-danza-las-fieras-lleva-al-ficm-la-preocupacion-la-trata-personas/"
  },
  {
    publisher: "MI MORELIA",
    date: "23/10/17",
    title: "LDDLF, CRUDO RETRATO DE LA EXPLPOTACIÓN HUMANA",
    quote: `Más allá de las mafias de explotación sexual y laboral que operan con impunidad en todo 
      el mundo, seis directores de México y España realizaron una serie de cortometrajes sobre los 
      estragos que estos delitos causan en los menores de edad y jóvenes en la película <b>La danza de las fieras</b>.`,
    link:
      "https://www.mimorelia.com/la-danza-las-fieras-crudo-retrato-la-explotacion-humana/"
  },
  {
    publisher: "QUADRATÍN NOTICIAS TV",
    date: "23/10/17",
    title: "LA DANZA DE LAS FIERAS EN EL FICM",
    quote: `Tuvieron que realizar una investigación de aproximadamente tres meses con distintas personas, 
      víctimas, antropólogos, psicólogos, entre otros.`,
    link: "https://www.youtube.com/watch?v=-T3pslBBhY8"
  },
  {
    publisher: "QUADRATÍN",
    date: "23/10/17",
    title: "VÍCTIMAS DE LA TRATA & LOS FAMILIARES",
    quote: `Las víctimas de la trata de blancas no solo son aquellas raptadas o utilizadas, sino también 
      lo son sus familiares, así como los responsables no solo son los que lo realizan, sino también quienes 
      consumen su contenido.`,
    link:
      "http://www.quadratin.com.mx/principal/victimas-la-trata-los-familiares-cineasta-alayde-castro/"
  },
  {
    publisher: "VÍCTOR AMERICANO NOTICIAS",
    date: "23/10/17",
    title: "LDDLF LLVA AL FICM LA PREOCUPACIÓN POR LA TRATA DE PERSONAS",
    quote: `De acuerdo con reportes de la Casa Blanca 27 millones de personas sufren condiciones similares 
      a la esclavitud como consecuencia de la trata de personas. Esta situación es abordada en los seis 
      cortometrajes que forman parte de <b>La danza de las fieras</b>.`,
    link:
      "http://americanovictor.com/la-danza-de-las-fieras-lleva-al-ficm-la-preocupacion-por-la-trata-de-personas/"
  },
  {
    publisher: "QUADRATÍN",
    date: "24/10/17",
    title: "LDDLF, DESGARRADORA VISIÓN DE LA TRATA DE PERSONAS",
    quote: `Es probable que por el solo título nos anticipe el contenido; <b>La danza de las fieras</b> es una 
      película así de desgarradora.`,
    link:
      "https://www.quadratin.com.mx/cultura/la-danza-las-fieras-desgarradora-vision-la-trata-personas/"
  },
  {
    publisher: "EL FINANCIERO",
    date: "25/10/17",
    title: "UN DEMONIO LLAMADO TRATA",
    quote: `Seis historias (cuatro ficciones y dos documentales) componen esta cinta que se exhibió en 
      el Festival Internacional de Cine de Morelia y comenzó su corrida en festivales en París.”`,
    link:
      "https://www.elfinanciero.com.mx/after-office/un-demonio-llamado-trata.html"
  },
  {
    publisher: "EL ECONOMISTA",
    date: "31/10/17",
    title: "EL VASTO UNIVERSO DE LA TRATA DE PERSONAS",
    quote: `(…)la idea de hacer una película, que a su vez tuviera elementos didácticos sobre la 
      trata de personas. Así nació <b>La danza de las fieras</b>.`,
    link:
      "https://www.eleconomista.com.mx/arteseideas/El-vasto-universo-de-la-trata-de-personas-20171031-0140.html"
  },
  {
    publisher: "CRÓNICA JALISCO",
    date: "06/11/17",
    title: "¿EL SÉTIMO ARTE PARA LA CONCIENCIA Y REFLECCIÓN?",
    quote: `Dichos cortometrajes que fueron recopilados para <b>La danza de las fieras</b>, han sido 
      creados desde la investigación y desarrollo creativo, que además de contar con su respectivo 
      director de cine, se aliaron de expertos en temas de sociología, antropología, psicología, 
      crimen y otros especialistas en derechos humanos y trata de personas.`,
    link: "http://www.cronicajalisco.com/notas/2017/81656.html"
  },
  {
    publisher: "CANAL 44",
    date: "13/11/17",
    title: "ENTREVISTA A ALAÍDE CASTRO Y GERMÁN CASTILLA DE LDDLF",
    quote: `Este proyecto aborda uno de estos temas que traen a México de cabeza pero que no 
      terminamos por admitir que existen.`,
    link: "https://www.youtube.com/watch?v=2bsDqH0hpy0"
  },
  {
    publisher: "CRITERIO HIDALGO",
    date: "14/11/17",
    title: "NARRAN LA EXPLOTACIÓN SEXUAL EN UNA PELÍCULA",
    quote: `Hay que hablar de estos temas que son muy dañinos, nos están pasando aquí y ahora 
      y nadie está haciendo nada al respecto.`,
    link:
      "https://www.criteriohidalgo.com/noticias/letras/narran-la-explotacion-sexual-en-una-pelicula"
  },
  {
    publisher: "EL NORTE",
    date: "14/11/17",
    title: "NARRAN EXPLOTACIÓN",
    quote: `La película hace una radiografía de las distintas formas de abuso, desde el engaño 
      para realizar trabajo infantil en condiciones precarias, las víctimas de la esclavitud 
      sexual embaucadas en redes sociales, hasta la manipulación de pequeños para convertirse en sicarios.`,
    link:
      "https://www.elnorte.com/aplicacioneslibre/articulo/default.aspx?id=1256717&md5=3084e4d9a3bf76104530366b3c261d10&ta=0dfdbac11765226904c16cb9ad1b2efe"
  },
  {
    publisher: "NOTICIAS 22",
    date: "16/11/17",
    title: "LDDLF, LA TRATA DE PERSONAS Y SUS DISTINTAS REALIDADES",
    quote: `¿Cómo hablar de la trata de personas a los jóvenes? <b>La danza de las fieras</b> es un documental 
      que explica de diversas maneras el problema.`,
    link: "https://www.youtube.com/watch?time_continue=2&v=XW9UQU55DfU"
  },
  {
    publisher: "20 Minutos",
    date: "14/02/18",
    title:
      "La danza de las fieras se presenta con éxito en festival de Londres",
    quote: `En la película participaron más de 20 expertos, entre ellos sociólogos, antropólogos, psicólogos, 
      criminalistas y otros especialistas en derechos humanos y trata de personas.`,
    link:
      "https://www.20minutos.com.mx/noticia/332944/0/la-danza-de-las-fieras-se-presenta-con-exito-en-festival-de-londres/"
  }
];

const Noticia = styled.div`
  color: ${whiteColor};
  :hover {
    h3 {
      color: ${redColor};
    }
  }
`;

const TitleQuote = styled.a`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 40px;
  text-decoration: none;
  color: ${whiteColor};
  margin-top: 20px;
  margin-bottom: 10%;
  h4 {
    grid-column: 1 / span 5;
    text-transform: uppercase;
    margin-bottom: 10px;
    text-decoration: none;
    margin-top: 0;
  }
  p {
    grid-column: 1 / span 4;
    quotes: "“" "”" "‘" "’";
    position: relative;
    text-decoration: none;
    @media (max-width: 900px) {
      grid-column: 1 / span 5;
    }
    b {
      text-transform: uppercase;
    }
    :before,
    :after {
    }
    :before {
      font-size: 2rem;
      font-weight: 700;
      content: open-quote;
      position: absolute;
      left: -18px;
      top: -4px;
    }
    :after {
      font-size: 2rem;
      font-weight: 700;
      content: close-quote;
      right: -16px;
      bottom: -4px;
      position: relative;
      line-height: 0;
      left: 5px;
      top: 14px;
    }
  }
`;

const Publisher = styled.div`
  grid-column: 1 / span 5;
  display: flex;
  flex-direction: row-gap;
  a {
    display: flex;
    text-decoration: none;
  }
  h3 {
    margin-bottom: 0;
    margin-top: 0;
    transition: 0.3s ease all;
  }
  span {
    color: white;
    background-color: ${blackColor};
    margin-bottom: 0;
    margin-top: 0;
    display: flex;
    align-items: flex-end;
    line-height: 1;
    padding: 2px 10px 7px 10px;
  }
`;

export default function Noticias() {

  function isEven(n) {
    n = Number(n);
    return n === 0 || !!(n && !(n % 2));
  }

  function set(x) {
    return { __html: x };
  }

  const newsReverse = news.reverse();

  const noticias = newsReverse.map((article, index) => (
    <Section
      columnStart={isEven(index) ? "2" : "3"}
      columnEnd={isEven(index) ? "7" : "8"}
      columnEndSmall={"8"}
      columnStartSmall={"2"}
      key={"noticia" + index}
    >
      <Fade bottom>
        <Noticia>
          <Publisher>
            <a target="_blank" rel="noopener noreferrer" href={article.link}>
              <Heading3>{article.publisher}</Heading3>
              <span>{article.date}</span>
            </a>
          </Publisher>
          <TitleQuote
            target="_blank"
            rel="noopener noreferrer"
            href={article.link}
          >
            <h4>{article.title}</h4>
            <p
              dangerouslySetInnerHTML={set(article.quote)}
              style={{ marginBottom: "0" }}
            />
          </TitleQuote>
        </Noticia>
      </Fade>
    </Section>
  ));
  return noticias;
}
