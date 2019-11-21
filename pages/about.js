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
      move:false,
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
      scrolled: window.scrollY,
    });
  };

  handleMove = () => {
    if (window.pageYOffset > 0) {      
      this.setState({
        move: true,
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

        <div className="container">
          <FirstCard load={load} move={move}/>
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-content media-left">
                  <p className="title is-4">Biografía </p>
                  <p className="subtitle is-6">se trabajó en...</p>
                </div>
                <div className="media-right">
                  <figure className="image">
                    <img
                      src="https://unsplash.it/400/300?image=503"
                      className={scrolled === 0 ? "fadedfx" : "fadeIn"}
                      alt="img-demo"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image">
                    <img
                      src="https://unsplash.it/400/300?image=503"
                      className={scrolled === 0 ? "fadedfx" : "fadeIn"}
                      alt="img-demo"
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">Biografía </p>
                  <p className="subtitle is-6">se trabajó en...</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>
          {`
          .card {
            margin: 1rem auto;
          }
            .fadedfx {
              background-color: #fe5652;
              opacity:0;
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
