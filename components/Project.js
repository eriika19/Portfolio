import { Component } from 'react';
//import Link from 'next/link';

import projectData from '../data/projects';

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
      demo,
      label
    } = projectData.projects[id];

    const selector = 'tile is-child notification is-bold ';

    return (
      <article className={color ? selector + color : selector}>
        <p className='title'>{title}</p>
        <p className='subtitle'>{subtitle}</p>
        <div className='level'>
          <figure className='image level-item'>
            <img
              className={img ? img : 'is-thumbnail'}
              src={src}
              alt={thumbnail}
            />
          </figure>
        </div>
        <div className='content has-text-justified'>{overview}</div>
        <time dateTime={date}>{date}</time>
        <style jsx>
          {`
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
          `}
        </style>
      </article>
    );
  }
}

export default Project;
