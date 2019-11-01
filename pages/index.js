import Head from 'next/head';
//import 'bulma/css/bulma.min.css';
//import Link from 'next/link';

//import Oops from '../components/Oops';
import Project from '../components/Project';

import ProjectData from '../data/projects.json';
//import { getProjects } from '../utils/apiCalls';

const Home = () => (
  <div className="home">
    <Head>
      <title>Portafolio | Enciso FE</title>
    </Head>
    {ProjectData.projects.map(props => <Project {...props} key={props.id} />)}
    {/* {projects.map(props => <Project {...props} key={props.id} />)} */}
    {/* {!projects ? <Oops /> : projects.map(props => <Project {...props} key={props.id} />)} */}
  </div>
);

/* Home.getInitialProps = () => {
  const projects = ProjectData.projects;
log
  return { projects };
} */

/* Home.getInitialProps = () => {
  const data = ProjectData;

  const projects = data.projects.map(({ id, title, date, tags, description, thumbnail, type, github, demo, label }) => ({
    id,
    title,
    date,
    tags,
    description,
    thumbnail,
    type,
    github,
    demo,
    label
  }));

  return { projects };
}; */

export default Home;
