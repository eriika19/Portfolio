//import Oops from '../components/Oops';
//import Project from '../components/Project';
const Dashboard = () => (
  <section id='dashboard'>
    <div className='tile is-ancestor'>
      <div className='tile is-vertical'>
        <div className='tile is-parent is-me'>
          <article className='tile is-child notification is-bold is-pink'>
            <div className='level'>
              <figure className='image level-item'>
                <img
                  className='is-rounded is-picture shadow'
                  src='/assets/foto.png'
                />
              </figure>
            </div>
            <p className='is-size-4 has-text-centered has-text-weight-light'>
              <em>
                " Si no lo sé, <strong>lo aprendo.</strong> Me pongo la camiseta
                y <strong>busco colaborar</strong> "
              </em>
            </p>
            <p className='subtitle is-4'>
              <strong>¿Quién soy?</strong>
            </p>
            <div className='content has-text-justified'>
              Mujer apasionada por la programación y el desarrollo web, con gran
              interés en desarrollarme dentro de un equipo colaborativo que
              fomente el aprendizaje, la comunicación efectiva y el crecimiento
              profesional. Con experiencia en auditorías además de aplicación de
              sistemas y herramientas de gestión de calidad.
            </div>
          </article>
        </div>
        <div className='tile is-parent is-short'>
          <article className='tile is-child notification is-bold is-orange'>
            <p className='title'>Premios y reconocimientos</p>
          </article>
        </div>
        <div className='tile is-parent'>
          <article className='tile is-child notification is-bold is-white'>
            <p className='title'>Smart Spend</p>
            <p className='subtitle'>1er Lugar</p>
            <div className='level'>
              <figure className='image level-item is-award'>
                <img
                  className='is-rounded is-small-thumbnail'
                  src='/assets/smart_spend2.png'
                />
              </figure>
            </div>
          </article>
          <article className='tile is-child notification is-bold is-white'>
            <p className='title'>IBM Week Challenge</p>
            <p className='subtitle'>Insignia</p>
            <div className='level'>
              <figure className='image level-item is-award'>
                <img
                  className='is-rounded is-small-thumbnail'
                  src='/assets/ibm.png'
                />
              </figure>
            </div>
          </article>
        </div>
      </div>

      <div className='tile is-vertical is-8'>
        <div className='tile is-parent'>
          <article className='tile is-child notification is-bold'>
            <p className='title'>Proyectos</p>
          </article>
        </div>
        <div className='tile'>
          <div className='tile is-vertical is-5'>
            <div className='tile is-parent'>
              <article className='tile is-child notification is-bold is-link'>
                <p className='title'>Sacbé</p>
                <p className='subtitle'>Red Social (JS, Firebase, SPA)</p>
                <div className='level'>
                  <figure className='image level-item'>
                    <img
                      className='is-thumbnail'
                      src='/assets/sacbe.png'
                    />
                  </figure>
                </div>
                <div className='content has-text-justified'>
                  Sacbé en una web app mobile-first dirigida a ciclistas de la
                  CDMX que se enfrentan a distintos contratiempos y peligros
                  viales. El objetivo es crear una red de que permita a los
                  ciclistas intercambiar información de interés común; además
                  cuenta con funcionalidades de alto valor como un directorio,
                  enfocado a la comunidad, que muestra un mapa con ubicación y
                  un botón S.O.S. que permite compartir su ubicación, a otros
                  usuarios, en caso de un percance.
                </div>
                <time dateTime='Ago 2019'>Ago 2019</time>
              </article>
            </div>
            <div className='tile is-parent'>
              <article className='tile is-child notification is-bold is-primary'>
                <p className='title'>Smart Spend</p>
                <p className='subtitle'>Aplicación Fintech (JS)</p>
                <div className='level'>
                  <figure className='image level-item'>
                    <img
                      className='is-rounded is-small-thumbnail shadow'
                      src='/assets/smart_spend.png'
                    />
                  </figure>
                </div>
                <div className='content has-text-justified'>
                  Smart Spend es un aplicación cuya propuesta es impulsar la
                  cultura finaciera aportando tips y noticias al usuario día a
                  día; a través de un simpático personaje.
                </div>
                <time dateTime='Oct 2019'>Jul 2019</time>
              </article>
            </div>
          </div>
          <div className='tile is-parent is-vertical'>
            <article className='tile is-child notification is-bold is-wine has-text-white'>
              <p className='title'>Mesereando</p>
              <p className='subtitle'>
                Aplicación progresiva para PYME (React)
              </p>
              <div className='level'>
                <figure className='image level-item'>
                  <img
                    className='is-thumbnail'
                    src='/assets/mesereando.png'
                  />
                </figure>
              </div>
              <div className='content has-text-justified'>
                Mesereando es una Progressive Web App diseñada para la eficiente
                gestión y toma de pedidos de una PYME de servicio de comida
                rápida.
              </div>
              <time dateTime='Oct 2019'>Oct 2019</time>
            </article>
            <article className='tile is-child notification is-bold is-light'>
              <p className='title'>MD-Links</p>
              <p className='subtitle'>Librería de Node.js (Backend)</p>
              <div className='level'>
                <figure className='image level-item'>
                  <img
                    className='is-thumbnail'
                    src='/assets/md_links.jpg'
                  />
                </figure>
              </div>
              <div className='content has-text-justified'>
                MD-Links es una librería de Node.js que permite al usuario, a
                partir de una Interfaz de Línea de Comandos (CLI) o la
                importación de la función MD-Links, buscar y verificar el status
                de los links existentes dentro de cualquier archivo Markdown
                (*.md).
              </div>
              <time dateTime='Sep 2019'>Sep 2019</time>
            </article>
          </div>
        </div>
        <div className='tile is-parent'>
          <article className='tile is-child notification is-bold is-dark'>
            <p className='title'>Steam News</p>
            <p className='subtitle'>Portal de noticias (JS, API)</p>
            <div className='level'>
              <figure className='image level-item'>
                <img
                  className='is-thumbnail'
                  src='/assets/steam_desktop.png'
                />
              </figure>
              <div className='level-other'>
                <div className='content has-text-justified'>
                  Steam News es un portal de noticias para Gamers. Una
                  Aplicación Web responsiva que hace uso de la base de datos del
                  portal STEAM, una popular plataforma de distribución de
                  videojuegos.
                </div>
                <time className='content' dateTime='Jul 2019'>
                  Jul 2019
                </time>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
    <style jsx>
      {`
        #dashboard {
          margin-top: 1rem;
        }
        .is-size-4 {
          margin: 1.5rem 0 2.5rem 0;
        }
        .image img.is-picture {
          width: 18rem;
          height: auto;
          margin-top: 1rem;
        }
        .image img.is-thumbnail {
          height: 13rem;
          width: auto;
          border-radius: 0.45rem;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
        .shadow {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }

        .image img.is-small-thumbnail {
          height: 8rem;
          width: auto;
        }
        .is-horizontal-center {
          justify-content: center;
        }

        .notification.is-wine {
          background-color: #821c48;
          // background-color: #9C494A;
        }
        .subtitle.is-4 {
          margin: 3.1rem auto 1.9rem auto;
        }
        .tile.is-me {
          margin-bottom: 2rem;
          padding: 0.75rem 0.41rem 0.75rem 0.48rem;
        }
        .notification.is-pink {
          background-color: rgb(231, 202, 212, 0.38);
        }
        .notification.is-orange {
          // background-color: rgb(244, 216, 137, 0.25);
          background-color: rgb(221, 140, 0, 0.1);
        }
        .notification.is-white {
          background-color: #fff;
        }
        .is-short {
          display: inline-table;
        }
        .level-other .content {
          margin-left: 1.5rem;
        }

        @media (min-width: 769px) {
          .is-5 {
            width: 50%;
          }
        }

        @media (max-width: 768px) {
          .is-5 {
            width: 100%;
          }
          .level-other .content {
            margin-left: 0;
          }
          .is-short {
            display: block;
          }
          .is-award {
            display: block;
          }
          .tile.is-me {
            margin-bottom: 1rem;
          }
        }
      `}
    </style>
  </section>
);

export default Dashboard;
