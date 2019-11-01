import Link from 'next/link';
import Head from 'next/head';
//import 'bulma/css/bulma.min.css';

import Oops from '../components/Oops';
//import Image from '../components/Image';
//import img from '../assets';

import ProjectData from '../data/projects.json';
//import { getProjects } from '../utils/apiCalls';
//import { getImageSrc } from '../utils/apiCalls';

//import img from '../assets';

const ProjectPage = ({ title, date, tags, description, thumbnail, type, github, demo, label }) =>
(
    <div className="movie">
      <Head>
        <title> Proyecto | {title} </title>
      </Head>
      <div className="card">
        <div className="card-header">
          <div className="card-title h3 text-primary">{title}</div>
          <div className="card-subtitle text-gray">Fecha - {date}</div>
          <div className="chips">
            {tags.map((tag, i) => (
              <div key={i} className="chip">
                {tag}
              </div>
            ))}
          </div>
        </div>
        {/* <div className="card-image">
          <Image src={img[thumbnail]} alt={`Poster for ${title}`} className="img-responsive" />
        </div> */}
        <div className="card-body">
          <div className="card-title h4">Descripción</div>
          <div className="card-subtitle">{description}</div>
          <div className="card-title h4">Links</div>
            <div className="cast">{github}         </div>
            <div className="cast">{demo}         </div>
            {/* {cast.map(
              ({ credit_id, profile_path, name }) =>
                profile_path ? (
                  <figure key={credit_id} className="avatar avatar-xl tooltip" data-tooltip={name}>
                    <Image src={getImageSrc(profile_path, 92)} alt={name} />
                  </figure>
                ) : null
            )} */} 
        </div>
        <div className="card-footer btn-group btn-group-block">
          <Link href="/">
              <button className="btn btn-primary">Regresar</button>
          </Link>
        </div>
      </div>
    </div>
  );

ProjectPage.getInitialProps = ({ query: { id } }) => {
  const data = ProjectData.projects[id];

  const {
    title,
    date,
    tags,
    description,
    thumbnail,
    type,
    label,
    github,
    demo
  } = data;

  return {
    title,
    date,
    tags,
    description,
    thumbnail,
    type,
    tags,
    label,
    github,
    demo
  };
};

export default ProjectPage;
