import { Component } from "react";
//import Router from "next/router";
import Link from "next/link";
import Head from "next/head";
import "bulma-extensions/bulma-timeline/dist/css/bulma-timeline.min.css";

import Hero from "../components/Hero";
import FirstCard from "../components/FirstCard";
import Timeline from "../components/Timeline";

class AboutPage extends Component {
  state = {
    scrolled: "",
    move: "",
    load: ""
  };

  componentDidMount() {
    window.addEventListener("load", this.handleLoad, true);
    window.addEventListener("scroll", this.handleScroll, true);
    window.addEventListener("scroll", this.handleMove, true);
    this.setState({
      scrolled: 0,
      move: false,
      load: false
    });
  }

  componentWillUnmount() {
    window.removeEventListener("load", this.handleLoad);
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("scroll", this.handleMove);
  }

  handleScroll = () => {
    this.setState({
      scrolled: window.scrollY
    });
  };

  handleMove = () => {
    if (window.pageYOffset > 0) {
      this.setState({
        move: true
      });
    }
  };

  handleLoad = () => {
    setTimeout(
      () =>
        this.setState({
          load: true
        }),
      500
    );
  };

  render() {
    // ({ title, date, tags, description, thumbnail, type, github, demo, label }) =>
    const { scrolled, load, move } = this.state;

    return (
      <section id="about">
        <Head>
          <title> Enciso FE | Acerca de mí </title>
        </Head>
        <Hero pageOpen="/about" scrolled={scrolled} />

        <div id="main" className="level">
          <figure className="image level-item">
            <img className="" src="/assets/construction.jpg" alt="dev" />
          </figure>
        </div>

        <style jsx>
          {`
            .card {
              margin: 1rem auto;
            }
            .img-left {
              margin-right: 1rem;
            }

            .image img {
              width: auto;
            }

              .fadedfx {
                background-color: #fe5652;
                opacity: 0;
                visibility: hidden;
              }

              .fadeIn {
                visibility: visible;
                transition: all 2s ease-in-out;
                opacity: 1;
              }
            }
          `}
        </style>
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
