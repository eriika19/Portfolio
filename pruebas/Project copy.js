import React, { Component } from 'react';
import Router from 'next/router';
import Link from 'next/link';

class Project extends Component {
  prefetchProjectPage = () => {
    Router.prefetch(`/project?id=${this.props.id}`);
  };

  render() {
    const {
      id,
      title,
      date,
      tags,
      description,
      src,
      thumbnail,
      type,
      github,
      demo,
      label
    } = this.props;
    return (
      <Link as={`/project/${id}`} href={`/project?id=${id}`}>
        <div
          className='card'
          id={`project-${id}`}
          onMouseEnter={this.prefetchProjectPage}>
          <img src={src} alt={`Image for ${title}`} width='300' />
          {/* <div className="card-image">
            <Image src={img[thumbnail]} alt={`Image for ${title}`} className="img-responsive" />
          </div> */}
          <div className='card-header'>
            <div className='card-title h5 text-primary text-ellipsis'>
              {title}
            </div>
          </div>
          <div className='card-body text-ellipsis'>{description}</div>
        </div>
      </Link>
    );
  }
}

{
  /* {ProjectData.projects.map(props => <Project {...props} key={props.id} />)} */
}
{
  /* {!projects ? <Oops /> : projects.map(props => <Project {...props} key={props.id} />)} */
}

export default Project;
