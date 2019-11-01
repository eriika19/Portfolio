import React, { Component } from 'react';
import Router from 'next/router';
import Link from 'next/link';

//import Image from './Image';
//import img from '../assets';

//import ProjectData from '../data/projects.json';
//import { getImageSrc } from '../utils/apiCalls';

class Project extends Component {
  prefetchProjectPage = () => {
    Router.prefetch(`/project?id=${this.props.id}`);
  };

  render() {
    const { id, title, date, tags, description, thumbnail, type, github, demo, label } = this.props;
    return (
      <Link as={`/project/${id}`} href={`/project?id=${id}`}>
        <div className="card" id={`project-${id}`} onMouseEnter={this.prefetchProjectPage}>
          {/* <div className="card-image">
            <Image src={img[thumbnail]} alt={`Image for ${title}`} className="img-responsive" />
          </div> */}
          <div className="card-header">
            <div className="card-title h5 text-primary text-ellipsis">{title}</div>
          </div>
          <div className="card-body text-ellipsis">{description}</div>
        </div>
      </Link>
    );
  }
}

export default Project;
