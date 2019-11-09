import Head from 'next/head';

import Carousel from '../components/Carousel';
import Dashboard from '../components/Dashboard';

const Home = () => (
  <section className='home'>
    <Head>
      <title>Portafolio | Enciso FE</title>
    </Head>
    <Carousel />
    <Dashboard />
  </section>
);

export default Home;
