//import Oops from '../components/Oops';
import Project from '../components/Project';

const Dashboard = () => (
  <section id='dashboard'>
    <div className='tile is-ancestor'>
      <div className='tile is-vertical'>
        <div className='tile is-parent is-me'>
          <article className='tile is-child notification is-bold is-pink shadow'>
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
          <article className='tile is-child notification is-bold is-orange shadow'>
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
          <article className='tile is-child notification is-bold is-light shadow'>
            <p className='title'>Proyectos</p>
          </article>
        </div>
        <div className='tile'>
          <div className='tile is-vertical is-5'>
            <div className='tile is-parent'>
              <Project id='2' color='is-link' />
            </div>
            <div className='tile is-parent'>
              <Project
                id='3'
                color='is-primary'
                img='is-rounded is-small-thumbnail shadow'
              />
            </div>
          </div>
          <div className='tile is-parent is-vertical'>
            <Project id='0' color='is-wine' />
            <Project id='1' color='is-light' />
          </div>
        </div>
        <div className='tile is-parent'>
          <article className='tile is-child notification is-bold is-dark'>
            <p className='title'>Steam News</p>
            <p className='subtitle'>Portal de noticias (JS, API)</p>
            <div className='level'>
              <figure className='image level-item'>
                <img className='is-thumbnail' src='/assets/steam_desktop.png' />
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
          .image img.is-small-thumbnail {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
              0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
