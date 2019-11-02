import Link from 'next/link';
import Head from 'next/head';
//import 'bulma/css/bulma.min.css';
//import Oops from '../components/Oops';
import Nav from '../components/Nav';


import ProjectData from '../data/projects.json';

const AboutPage = () => (
  // ({ title, date, tags, description, thumbnail, type, github, demo, label }) =>
  <section id='about'>
    <Head>
      <title> Enciso | Acerca de mí </title>
    </Head>
    <section id='main' className='hero is-medium is-dark'>
    <div className='hero-head'>
          <Nav pageOpen='about'/>
        </div>
    <div className='tile is-parent'>
      <article className='tile is-child notification is-danger'>
        <p className='title'>Itzel Enciso | Front-End</p>
        <p className='subtitle'>Acerca de mí</p>
        <div className='content'>Aquí hablaré de mí</div>
      </article>
    </div>
    <Link href='/'>
      <button className='button is-focused'>Regresar</button>
        </Link>
        </section>
  </section>
);

/* ProjectPage.getInitialProps = ({ query: { id } }) => {
  const data = ProjectData.projects[id];

  const {
    title,
    date,
    tags,
    description,
    thumbnail,
    src,
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
    src,
    type,
    tags,
    label,
    github,
    demo
  };
}; */

export default AboutPage;
