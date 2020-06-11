import { Component } from "react";

import projectData from "../data/projects";

class Project extends Component {
  render() {
    const { id, color, img } = this.props;
    const {
      title,
      subtitle,
      src,
      thumbnail,
      overview,
      date,
      github,
      demo
    } = projectData.projects[id];

    const selector = "tile is-child notification is-bold ";
    const overSelector = "button is-inverted is-outlined is-link subtitle is-6";

    return (
      <article key={id} className={color ? selector + color : selector}>
        <p className="title">{title}</p>
        <p className="subtitle">{subtitle}</p>
        <div className="level">
          <figure className="image level-item">
            <img
              className={img ? img : "is-thumbnail"}
              src={src}
              alt={thumbnail}
            />
          </figure>
        </div>
        <div className="content has-text-justified">{overview}</div>
        <time dateTime={date}>{date}</time>
        <div className="overlay show-on-hover">
          <div className="content-on-hover">
            <p className="over title is-1 has-text-white">{title}</p>
            <div className="level">
              <a className="level-item over" href={github} target="_blank">
                <button className={overSelector}>GitHub</button>
              </a>
              <a className="level-item" href={demo} target="_blank">
                <button className={overSelector}>Abrir Demo</button>
              </a>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .image img.is-thumbnail {
              height: 12rem;
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
            .notification.is-wine {
              background-color: #821c48;
              color: #fff;
              // background-color: #9C494A;
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

            .overlay {
              position: absolute;
              border-radius: 4px;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              height: 100%;
              width: 100%;
              opacity: 0;
              transition: all 0.5s ease;
              background-color: rgba(0, 0, 0);
            }

            .overlay:hover {
              opacity: 0.72;
            }

            .content-on-hover {
              position: absolute;
              top: 30%;
              left: 50%;
              -webkit-transform: translate(-50%, -50%);
              -ms-transform: translate(-50%, -50%);
              transform: translate(-50%, -50%);
              text-align: center;
              width: inherit;
            }

            .notification a:not(.button):not(.dropdown-item) {
              color: currentColor;
              text-decoration: unset;
            }
            button.subtitle.is-6 {
              font-size: 1.3rem;
              font-weight: 600;
              margin-bottom: 1%;
            }
            .over.title {
              margin-bottom: 40%;
            }
            over.title.is-1 {
              font-size: 3.5rem;
            }
            .level-item.subtitle {
              margin-bottom: 1%;
            }
            .button.is-link.is-inverted.is-outlined {
              border-width: 0.2rem;
            }

            @media (min-width: 1025px) {
              .content-on-hover {
                top: 48%;
              }
            }

            @media (max-width: 768px) {
              .content-on-hover {
                top: 50%;
              }
              .over.title {
                margin-bottom: 7%;
              }
            }

            @media (max-width: 426px) {
              .over.title {
                margin-bottom: 35%;
              }
              .content-on-hover {
                top: 48%;
              }
              .overlay:hover {
                opacity: 0.8;
              }
            }
          `}
        </style>
      </article>
    );
  }
}

export default Project;
