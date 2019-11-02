import Head from 'next/head';
//import 'bulma/css/bulma.min.css';
//import Link from 'next/link';

//import Oops from '../components/Oops';
import Carousel from '../components/Carousel';
import Project from '../components/Project';
import ProjectData from '../data/projects.json';

const Home = () => (
  <div className="home">
    <Head>
      <title>Portafolio | Enciso FE</title>
    </Head>
    <Carousel />
    {ProjectData.projects.map(props => <Project {...props} key={props.id} />)}
    {/* {!projects ? <Oops /> : projects.map(props => <Project {...props} key={props.id} />)} */}
  </div>
);

export default Home;
