import Link from 'next/link';
import Head from 'next/head';

import Hero from '../components/Hero';

const AboutPage = () => (
  // ({ title, date, tags, description, thumbnail, type, github, demo, label }) =>
  <section id='about'>
    <Head>
      <title> Enciso FE | Acerca de mí </title>
    </Head>
    <Hero pageOpen='/about' />
    <div className='tile is-ancestor'>
      <div className='tile is-parent'>
        <article className='tile is-child notification is-info'>
          <p className='title'>Enciso FE | Acerca de mí</p>
          <p className='subtitle'>Acerca de mí</p>
          <div className='content'>
            Aquí hablaré de mí, mis intereses y timeline de desarrollo
            académico. Metodologías utilizadas, soft skills y tech skills;
            además de un icono para descargar CV en formato PDF.
          </div>
        </article>
      </div>
    </div>
    <div className='level-item'>
      <Link href='/'>
        <button className='button is-size-4 is-focused'>Regresar</button>
      </Link>
    </div>
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
