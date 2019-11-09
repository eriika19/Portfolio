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
          className=''
          id={`project-${id}`}
          onMouseEnter={this.prefetchProjectPage}>
          <img src={src} alt={`Image for ${title}`} width='300' />
          <div className=''>
            <div className=''>{title}</div>
          </div>
          <div className=''>{description}</div>
        </div>
      </Link>
    );
  }
}

export default Project;
