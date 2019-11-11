import Link from 'next/link';
import Head from 'next/head';

import Hero from '../components/Hero';

const ContactPage = () => (
  <section id='contact'>
    <Head>
      <title> Enciso FE | Contacto</title>
    </Head>
    <Hero pageOpen='/contact' />
    <div className='tile is-ancestor'>
      <div className='tile is-parent'>
        <article className='tile is-child notification is-info'>
          <p className='title'>Enciso FE | Contacto</p>
          <p className='subtitle'>Contacto</p>
          <div className='content'>
            Aquí pondré un formulario e información de contacto
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

export default ContactPage;
