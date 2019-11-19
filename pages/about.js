import { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import "bulma-extensions/bulma-timeline/dist/css/bulma-timeline.min.css";

import Hero from "../components/Hero";
import Timeline from "../components/Timeline";

class AboutPage extends Component {
  state = {
    scrolled: ""
  };

  componentDidMount() {
    this.setState({
      scrolled: 0
    });
  }

  handleScroll = () => {
    this.setState({
      scrolled: window.scrollY
    });
  };

  render() {
    // ({ title, date, tags, description, thumbnail, type, github, demo, label }) =>
    const { scrolled } = this.state;

    return (
      <section id="about" onWheel={this.handleScroll}>
        <Head>
          <title> Enciso FE | Acerca de mí </title>
        </Head>
        <Hero pageOpen="/about" scrolled={scrolled} />
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <article className="tile is-child notification is-info">
              <p className="title">Enciso FE | Acerca de mí</p>
              <p className="subtitle">Acerca de mí</p>
              <div className="content">
                Aquí hablaré de mí, mis intereses y timeline de desarrollo
                académico. Metodologías utilizadas, soft skills y tech skills;
                además de un icono para descargar CV en formato PDF.
              </div>
            </article>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <Timeline />
          </div>

          <div className="is-divider-vertical" data-content="FORMACIÓN"></div>
          <div className="column">
            <Timeline /> <br />
            Note: divider stretches to parent's height.FORMACIÓN
          </div>
        </div>
        <div classNameName="level-item">
          <Link href="/">
            <button classNameName="button is-size-4 is-focused">
              Regresar
            </button>
          </Link>
        </div>
      </section>
    );
  }
}

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
